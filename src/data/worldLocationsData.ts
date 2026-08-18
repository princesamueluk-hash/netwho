/**
 * Master Worldwide Geographic Dataset for NETWHO Global Location Generator
 * Backed by the official 195-Country Dataset
 */
import {
  WORLD_LOCATION_HIERARCHY,
  ContinentData,
  CountryData,
  DivisionData,
  CityData,
  TOTAL_COUNTRIES_COUNT,
  ALL_COUNTRIES_FLAT,
  getCountryByName,
} from './countries';

export * from './countries';

export {
  WORLD_LOCATION_HIERARCHY as WORLD_LOCATIONS_DATA,
  TOTAL_COUNTRIES_COUNT,
  ALL_COUNTRIES_FLAT,
  getCountryByName,
};

export type { ContinentData, CountryData, DivisionData, CityData };

export interface FullLocationResult {
  id: string;
  continent: string;
  country: string;
  countryCode: string;
  countryCode3: string;
  capital: string;
  divisionName: string;
  divisionType: string;
  cityName: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utcOffset: string;
  currency: string;
  dialCode: string;
  postalCode?: string;
  streetAddress?: string;
  formattedAddress: string;
  timestamp: string;
}

const SAMPLE_STREET_NAMES = [
  'Central Boulevard',
  'Commercial Avenue',
  'Parkway Drive',
  'Victoria Way',
  'Market Street',
  'High Road',
  'Liberty Square',
  'Harbour View Road',
  'University Way',
  'Technology Parkway',
  'Grand Avenue',
  'King Street',
  'Queen Promenade',
  'Innovation Drive',
  'Olympic Way',
];

export function generateStructuredLocation(
  continentName: string,
  countryName: string,
  divisionName: string,
  cityName: string
): FullLocationResult | null {
  const continent = WORLD_LOCATION_HIERARCHY.find(
    (c) => c.name.toLowerCase() === continentName.trim().toLowerCase()
  );
  if (!continent) return null;

  const country = continent.countries.find(
    (c) => c.name.toLowerCase() === countryName.trim().toLowerCase()
  );
  if (!country) return null;

  const division = country.divisions.find(
    (d) => d.name.toLowerCase() === divisionName.trim().toLowerCase()
  ) || country.divisions[0];
  if (!division) return null;

  const city = division.cities.find(
    (c) => c.name.toLowerCase() === cityName.trim().toLowerCase()
  ) || division.cities[0];
  if (!city) return null;

  const streetNum = Math.floor(Math.random() * 150) + 1;
  const street = SAMPLE_STREET_NAMES[Math.floor(Math.random() * SAMPLE_STREET_NAMES.length)];
  const postal = city.postalFormat || '10001';
  const streetAddress = `${streetNum} ${street}`;

  const formattedAddress = `${streetAddress}, ${city.name}, ${division.name}, ${country.name} (Postal: ${postal})`;

  return {
    id: `LOC-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    continent: continent.name,
    country: country.name,
    countryCode: country.code,
    countryCode3: country.code3,
    capital: country.capital,
    divisionName: division.name,
    divisionType: division.type || country.divisionType,
    cityName: city.name,
    latitude: city.lat,
    longitude: city.lng,
    timezone: city.timezone,
    utcOffset: city.utcOffset,
    currency: country.currency,
    dialCode: country.dialCode,
    postalCode: postal,
    streetAddress,
    formattedAddress,
    timestamp: new Date().toISOString(),
  };
}

export function generateRandomWorldwideLocation(): FullLocationResult {
  // Random Continent
  const continent =
    WORLD_LOCATION_HIERARCHY[Math.floor(Math.random() * WORLD_LOCATION_HIERARCHY.length)];
  // Random Country in continent
  const country =
    continent.countries[Math.floor(Math.random() * continent.countries.length)];
  // Random Division in country
  const division =
    country.divisions[Math.floor(Math.random() * country.divisions.length)];
  // Random City in division
  const city =
    division.cities[Math.floor(Math.random() * division.cities.length)];

  const streetNum = Math.floor(Math.random() * 180) + 1;
  const street = SAMPLE_STREET_NAMES[Math.floor(Math.random() * SAMPLE_STREET_NAMES.length)];
  const postal = city.postalFormat || '10001';
  const streetAddress = `${streetNum} ${street}`;

  return {
    id: `LOC-RND-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    continent: continent.name,
    country: country.name,
    countryCode: country.code,
    countryCode3: country.code3,
    capital: country.capital,
    divisionName: division.name,
    divisionType: division.type || country.divisionType,
    cityName: city.name,
    latitude: city.lat,
    longitude: city.lng,
    timezone: city.timezone,
    utcOffset: city.utcOffset,
    currency: country.currency,
    dialCode: country.dialCode,
    postalCode: postal,
    streetAddress,
    formattedAddress: `${streetAddress}, ${city.name}, ${division.name}, ${country.name}`,
    timestamp: new Date().toISOString(),
  };
}
