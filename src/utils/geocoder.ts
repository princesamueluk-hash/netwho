/**
 * Geocoding & Address Resolution Engine for NETWHO Address Generator
 * Integrates OpenStreetMap Nominatim geocoding with 195-country offline dataset fallback
 */
import { ALL_COUNTRIES_FLAT, getCountryByName } from '../data/countries';
import { UK_REGIONS } from '../data/ukData';

export interface GeocodingQuery {
  postalCode?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
}

export type LocationAccuracyLevel =
  | 'Address-level (Exact)'
  | 'Postal Code (Zone)'
  | 'City-level (Approximate)'
  | 'State / Province-level (Partial)'
  | 'Country-level (Broad)'
  | 'Partial result';

export interface ResolvedAddressResult {
  id: string;
  formattedAddress: string;
  addressLine1?: string;
  addressLine2?: string;
  buildingNumber?: string;
  streetName?: string;
  cityName?: string;
  stateProvince?: string;
  postalCode?: string;
  countryName: string;
  countryCode: string;
  countryCode3?: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utcOffset?: string;
  accuracy: LocationAccuracyLevel;
  source: 'Live Geocoding (Nominatim)' | 'Geographic Knowledge Base';
  rawDetails?: Record<string, any>;
  timestamp: string;
}

/**
 * Parses building/house number and street name from a freeform street/address string
 * WITHOUT inventing any numbers that weren't supplied or returned.
 */
export function extractStreetAndNumber(rawAddress?: string): {
  buildingNumber?: string;
  streetName?: string;
} {
  if (!rawAddress || !rawAddress.trim()) {
    return {};
  }
  const clean = rawAddress.trim();

  // Look for leading number: e.g. "10 Downing Street" or "123B Baker St"
  const leadingNumMatch = clean.match(/^(\d+[\w\/-]*)\s+(.+)$/i);
  if (leadingNumMatch) {
    return {
      buildingNumber: leadingNumMatch[1],
      streetName: leadingNumMatch[2],
    };
  }

  // Look for trailing number: e.g. "Friedrichstraße 43"
  const trailingNumMatch = clean.match(/^(.+?)\s+(\d+[\w\/-]*)$/i);
  if (trailingNumMatch) {
    return {
      buildingNumber: trailingNumMatch[2],
      streetName: trailingNumMatch[1],
    };
  }

  // No number detected: just street/landmark name
  return {
    streetName: clean,
  };
}

/**
 * Resolves local timezone approximation based on longitude and country
 */
function resolveApproxTimezone(lat: number, lng: number, countryCode?: string): { timezone: string; utcOffset: string } {
  // Approximate standard timezone offset from longitude
  const hoursOffset = Math.round(lng / 15);
  const sign = hoursOffset >= 0 ? '+' : '-';
  const absHours = Math.abs(hoursOffset);
  const offsetString = `UTC${sign}${absHours.toString().padStart(2, '0')}:00`;

  // Common mapping
  const c = countryCode?.toUpperCase();
  if (c === 'GB' || c === 'UK') return { timezone: 'Europe/London', utcOffset: 'UTC+00:00' };
  if (c === 'US') {
    if (lng < -115) return { timezone: 'America/Los_Angeles', utcOffset: 'UTC-08:00' };
    if (lng < -100) return { timezone: 'America/Denver', utcOffset: 'UTC-07:00' };
    if (lng < -85) return { timezone: 'America/Chicago', utcOffset: 'UTC-06:00' };
    return { timezone: 'America/New_York', utcOffset: 'UTC-05:00' };
  }
  if (c === 'NG') return { timezone: 'Africa/Lagos', utcOffset: 'UTC+01:00' };
  if (c === 'DE') return { timezone: 'Europe/Berlin', utcOffset: 'UTC+01:00' };
  if (c === 'FR') return { timezone: 'Europe/Paris', utcOffset: 'UTC+01:00' };
  if (c === 'JP') return { timezone: 'Asia/Tokyo', utcOffset: 'UTC+09:00' };
  if (c === 'AU') return { timezone: 'Australia/Sydney', utcOffset: 'UTC+10:00' };
  if (c === 'IN') return { timezone: 'Asia/Kolkata', utcOffset: 'UTC+05:30' };
  if (c === 'ZA') return { timezone: 'Africa/Johannesburg', utcOffset: 'UTC+02:00' };
  if (c === 'BR') return { timezone: 'America/Sao_Paulo', utcOffset: 'UTC-03:00' };
  if (c === 'CA') return { timezone: 'America/Toronto', utcOffset: 'UTC-05:00' };

  return { timezone: `Etc/GMT${hoursOffset > 0 ? `-${hoursOffset}` : `+${Math.abs(hoursOffset)}`}`, utcOffset: offsetString };
}

/**
 * Main Geocoding Resolver
 */
export async function resolveLocationDetails(query: GeocodingQuery): Promise<ResolvedAddressResult> {
  const { postalCode, country, state, city, address } = query;

  const hasPostal = Boolean(postalCode?.trim());
  const hasCountry = Boolean(country?.trim());
  const hasState = Boolean(state?.trim());
  const hasCity = Boolean(city?.trim());
  const hasAddress = Boolean(address?.trim());

  if (!hasPostal && !hasCountry && !hasState && !hasCity && !hasAddress) {
    throw new Error('Please provide at least one location parameter (e.g. postal code, country, city, or address).');
  }

  // Construct search query for Nominatim
  const queryParts: string[] = [];
  if (hasAddress) queryParts.push(address!.trim());
  if (hasCity) queryParts.push(city!.trim());
  if (hasState) queryParts.push(state!.trim());
  if (hasPostal) queryParts.push(postalCode!.trim());
  if (hasCountry) queryParts.push(country!.trim());

  const searchString = queryParts.join(', ');

  // Attempt live Nominatim geocoding first (with 4-second timeout)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const params = new URLSearchParams({
      format: 'json',
      addressdetails: '1',
      limit: '1',
      q: searchString,
    });

    const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        const addr = item.address || {};

        const resolvedCountry = addr.country || country || 'Unknown Country';
        const resolvedCountryCode = (addr.country_code || '').toUpperCase();
        const resolvedState =
          addr.state || addr.province || addr.region || addr.county || state || undefined;
        const resolvedCity =
          addr.city || addr.town || addr.village || addr.municipality || addr.suburb || city || undefined;
        const resolvedPostcode = addr.postcode || postalCode || undefined;
        
        // Extract real road / street / house_number from Nominatim
        const nominatimHouseNum = addr.house_number || undefined;
        const nominatimRoad = addr.road || addr.street || addr.pedestrian || addr.footway || undefined;

        // Combine with user-entered address if Nominatim didn't return a specific building
        const userExtracted = extractStreetAndNumber(address);
        const finalBuildingNumber = nominatimHouseNum || userExtracted.buildingNumber || undefined;
        const finalStreetName = nominatimRoad || userExtracted.streetName || (hasAddress ? address : undefined);

        // Determine address line 1 & 2
        let addressLine1: string | undefined = undefined;
        if (finalBuildingNumber && finalStreetName) {
          addressLine1 = `${finalBuildingNumber} ${finalStreetName}`;
        } else if (finalStreetName) {
          addressLine1 = finalStreetName;
        }

        let addressLine2: string | undefined = undefined;
        if (addr.neighbourhood || addr.suburb) {
          addressLine2 = addr.neighbourhood || addr.suburb;
        }

        // Determine Accuracy Level
        let accuracy: LocationAccuracyLevel = 'Partial result';
        if (finalBuildingNumber && finalStreetName) {
          accuracy = 'Address-level (Exact)';
        } else if (finalStreetName) {
          accuracy = 'Address-level (Exact)';
        } else if (hasPostal || resolvedPostcode) {
          accuracy = hasCity ? 'City-level (Approximate)' : 'Postal Code (Zone)';
        } else if (hasCity || resolvedCity) {
          accuracy = 'City-level (Approximate)';
        } else if (hasState || resolvedState) {
          accuracy = 'State / Province-level (Partial)';
        } else if (hasCountry) {
          accuracy = 'Country-level (Broad)';
        }

        const lat = parseFloat(item.lat);
        const lng = parseFloat(item.lon);
        const tz = resolveApproxTimezone(lat, lng, resolvedCountryCode);

        // Format clean address
        const formattedParts: string[] = [];
        if (addressLine1) formattedParts.push(addressLine1);
        if (addressLine2) formattedParts.push(addressLine2);
        if (resolvedCity) formattedParts.push(resolvedCity);
        if (resolvedState) formattedParts.push(resolvedState);
        if (resolvedPostcode) formattedParts.push(resolvedPostcode);
        if (resolvedCountry) formattedParts.push(resolvedCountry);

        return {
          id: `ADDR-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
          formattedAddress: formattedParts.length > 0 ? formattedParts.join(', ') : item.display_name,
          addressLine1,
          addressLine2,
          buildingNumber: finalBuildingNumber,
          streetName: finalStreetName,
          cityName: resolvedCity,
          stateProvince: resolvedState,
          postalCode: resolvedPostcode,
          countryName: resolvedCountry,
          countryCode: resolvedCountryCode,
          latitude: lat,
          longitude: lng,
          timezone: tz.timezone,
          utcOffset: tz.utcOffset,
          accuracy,
          source: 'Live Geocoding (Nominatim)',
          rawDetails: item,
          timestamp: new Date().toISOString(),
        };
      }
    }
  } catch (err) {
    // Fall through to offline knowledge base resolver
  }

  // =========================================================================
  // FALLBACK RESOLVER: 195-Country Knowledge Base & UK Postal Gazetteer
  // =========================================================================
  return fallbackKnowledgeBaseResolver(query);
}

/**
 * Deterministic fallback resolving against our validated 195-country dataset
 */
function fallbackKnowledgeBaseResolver(query: GeocodingQuery): ResolvedAddressResult {
  const { postalCode, country, state, city, address } = query;

  // 1. If country specified, look up in 195 countries
  let foundCountry = country ? getCountryByName(country) : undefined;
  
  // If no country provided, try to search all 195 countries for matching city or state
  if (!foundCountry && (city || state)) {
    const targetCity = (city || '').toLowerCase().trim();
    const targetState = (state || '').toLowerCase().trim();

    for (const c of ALL_COUNTRIES_FLAT) {
      if (targetCity) {
        const hasCity = c.divisions.some((d) =>
          d.cities.some((cit) => cit.name.toLowerCase() === targetCity)
        );
        if (hasCity) {
          foundCountry = c;
          break;
        }
      }
      if (targetState) {
        const hasDiv = c.divisions.some((d) => d.name.toLowerCase() === targetState);
        if (hasDiv) {
          foundCountry = c;
          break;
        }
      }
    }
  }

  // If still not found and UK postal code pattern
  if (!foundCountry && postalCode && /^[A-Z]{1,2}\d/i.test(postalCode.trim())) {
    foundCountry = getCountryByName('United Kingdom');
  }

  // If still no country found, but postal code matches US 5-digit ZIP
  if (!foundCountry && postalCode && /^\d{5}(-\d{4})?$/.test(postalCode.trim())) {
    foundCountry = getCountryByName('United States');
  }

  // If no country could be derived at all
  if (!foundCountry) {
    // Generic fallback location
    if (address || city || postalCode) {
      const parsed = extractStreetAndNumber(address);
      return {
        id: `ADDR-FBK-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        formattedAddress: [address, city, state, postalCode, country].filter(Boolean).join(', '),
        addressLine1: parsed.streetName ? (parsed.buildingNumber ? `${parsed.buildingNumber} ${parsed.streetName}` : parsed.streetName) : undefined,
        buildingNumber: parsed.buildingNumber,
        streetName: parsed.streetName,
        cityName: city || undefined,
        stateProvince: state || undefined,
        postalCode: postalCode || undefined,
        countryName: country || 'Global Territory',
        countryCode: 'XX',
        latitude: 0.0,
        longitude: 0.0,
        timezone: 'UTC',
        utcOffset: 'UTC+00:00',
        accuracy: 'Partial result',
        source: 'Geographic Knowledge Base',
        timestamp: new Date().toISOString(),
      };
    }

    throw new Error(
      'We could not find a precise location from the information provided. Try adding a city, state or postal code.'
    );
  }

  // Country is resolved: check for divisions & cities
  let resolvedDivision = state
    ? foundCountry.divisions.find((d) => d.name.toLowerCase() === state.toLowerCase().trim())
    : undefined;

  let resolvedCity = city
    ? (resolvedDivision
        ? resolvedDivision.cities.find((c) => c.name.toLowerCase() === city.toLowerCase().trim())
        : foundCountry.divisions.flatMap((d) => d.cities).find((c) => c.name.toLowerCase() === city.toLowerCase().trim()))
    : undefined;

  if (resolvedCity && !resolvedDivision) {
    resolvedDivision = foundCountry.divisions.find((d) =>
      d.cities.some((c) => c.name.toLowerCase() === resolvedCity!.name.toLowerCase())
    );
  }

  // Geodetic Coordinates
  let lat = foundCountry.capital ? 0 : 0;
  let lng = 0;
  let tzName = 'UTC';
  let tzOffset = 'UTC+00:00';

  if (resolvedCity) {
    lat = resolvedCity.lat;
    lng = resolvedCity.lng;
    tzName = resolvedCity.timezone;
    tzOffset = resolvedCity.utcOffset;
  } else if (resolvedDivision && resolvedDivision.cities.length > 0) {
    lat = resolvedDivision.cities[0].lat;
    lng = resolvedDivision.cities[0].lng;
    tzName = resolvedDivision.cities[0].timezone;
    tzOffset = resolvedDivision.cities[0].utcOffset;
  } else if (foundCountry.divisions.length > 0 && foundCountry.divisions[0].cities.length > 0) {
    const firstCity = foundCountry.divisions[0].cities[0];
    lat = firstCity.lat;
    lng = firstCity.lng;
    tzName = firstCity.timezone;
    tzOffset = firstCity.utcOffset;
  }

  // Address line resolution (NO INVENTED NUMBERS!)
  const userExtracted = extractStreetAndNumber(address);
  const buildingNumber = userExtracted.buildingNumber || undefined;
  const streetName = userExtracted.streetName || (address?.trim() || undefined);
  const addressLine1 = buildingNumber && streetName ? `${buildingNumber} ${streetName}` : streetName;

  // Determine accuracy level
  let accuracy: LocationAccuracyLevel = 'Country-level (Broad)';
  if (buildingNumber && streetName) {
    accuracy = 'Address-level (Exact)';
  } else if (streetName) {
    accuracy = 'Address-level (Exact)';
  } else if (resolvedCity || city) {
    accuracy = 'City-level (Approximate)';
  } else if (resolvedDivision || state) {
    accuracy = 'State / Province-level (Partial)';
  } else if (postalCode) {
    accuracy = 'Postal Code (Zone)';
  }

  const resolvedPostcode = postalCode || (resolvedCity?.postalFormat ? undefined : undefined);

  const formattedParts: string[] = [];
  if (addressLine1) formattedParts.push(addressLine1);
  if (resolvedCity?.name || city) formattedParts.push(resolvedCity?.name || city!);
  if (resolvedDivision?.name || state) formattedParts.push(resolvedDivision?.name || state!);
  if (postalCode) formattedParts.push(postalCode);
  formattedParts.push(foundCountry.name);

  return {
    id: `ADDR-DS-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    formattedAddress: formattedParts.join(', '),
    addressLine1,
    addressLine2: undefined,
    buildingNumber,
    streetName,
    cityName: resolvedCity?.name || city || undefined,
    stateProvince: resolvedDivision?.name || state || undefined,
    postalCode: postalCode || undefined,
    countryName: foundCountry.name,
    countryCode: foundCountry.code,
    countryCode3: foundCountry.code3,
    latitude: lat,
    longitude: lng,
    timezone: tzName,
    utcOffset: tzOffset,
    accuracy,
    source: 'Geographic Knowledge Base',
    timestamp: new Date().toISOString(),
  };
}
