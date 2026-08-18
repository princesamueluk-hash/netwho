import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Search,
  Globe,
  Building,
  Navigation,
  Compass,
  Clock,
  Copy,
  Check,
  Download,
  RotateCcw,
  Sparkles,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Layers,
  ArrowRight,
  Info,
  RefreshCw,
} from 'lucide-react';
import { ALL_COUNTRIES_FLAT, getCountryByName, CountryData, DivisionData } from '../../data/countries';
import { resolveLocationDetails, ResolvedAddressResult } from '../../utils/geocoder';
import { saveResult } from '../../utils/resultStore';

interface AddressGeneratorToolProps {
  onNavigate?: (path: string) => void;
}

const PRESET_ADDRESSES = [
  { label: '🇬🇧 10 Downing Street, London', postal: 'SW1A 2AA', country: 'United Kingdom', state: 'Greater London', city: 'London', address: '10 Downing Street' },
  { label: '🇺🇸 350 Fifth Ave (Empire State)', postal: '10118', country: 'United States', state: 'New York', city: 'New York', address: '350 5th Ave' },
  { label: '🇫🇷 Champ de Mars, Paris', postal: '75007', country: 'France', state: 'Île-de-France', city: 'Paris', address: '5 Avenue Anatole France' },
  { label: '🇯🇵 1-1 Chiyoda, Tokyo', postal: '100-8111', country: 'Japan', state: 'Tokyo', city: 'Tokyo', address: '1-1 Chiyoda' },
  { label: '🇩🇪 Pariser Platz, Berlin', postal: '10117', country: 'Germany', state: 'Berlin', city: 'Berlin', address: 'Pariser Platz 1' },
];

export const AddressGeneratorTool: React.FC<AddressGeneratorToolProps> = ({ onNavigate }) => {
  // Input fields state (All optional)
  const [postalCode, setPostalCode] = useState<string>('');
  const [selectedCountryName, setSelectedCountryName] = useState<string>('United Kingdom');
  const [selectedDivisionName, setSelectedDivisionName] = useState<string>('Greater London');
  const [selectedCityName, setSelectedCityName] = useState<string>('London');
  const [knownAddress, setKnownAddress] = useState<string>('10 Downing Street');
  const [customCityText, setCustomCityText] = useState<string>('');
  const [customStateText, setCustomStateText] = useState<string>('');

  // UI & Execution State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStepText, setLoadingStepText] = useState<string>('Locating address...');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [countrySearchQuery, setCountrySearchQuery] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Derive country data from 195-country database
  const currentCountryObj = useMemo<CountryData | undefined>(() => {
    if (!selectedCountryName) return undefined;
    return getCountryByName(selectedCountryName);
  }, [selectedCountryName]);

  const availableDivisions = useMemo<DivisionData[]>(() => {
    return currentCountryObj ? currentCountryObj.divisions : [];
  }, [currentCountryObj]);

  const currentDivisionObj = useMemo<DivisionData | undefined>(() => {
    if (!selectedDivisionName || !currentCountryObj) return undefined;
    return currentCountryObj.divisions.find((d) => d.name === selectedDivisionName);
  }, [currentCountryObj, selectedDivisionName]);

  const availableCities = useMemo(() => {
    return currentDivisionObj ? currentDivisionObj.cities : [];
  }, [currentDivisionObj]);

  // Filter countries for selector
  const filteredCountries = useMemo(() => {
    if (!countrySearchQuery.trim()) return ALL_COUNTRIES_FLAT;
    const q = countrySearchQuery.toLowerCase().trim();
    return ALL_COUNTRIES_FLAT.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [countrySearchQuery]);

  // Country Change handler
  const handleCountryChange = (countryName: string) => {
    setSelectedCountryName(countryName);
    if (!countryName) {
      setSelectedDivisionName('');
      setSelectedCityName('');
      return;
    }
    const cObj = getCountryByName(countryName);
    if (cObj && cObj.divisions.length > 0) {
      const firstDiv = cObj.divisions[0];
      setSelectedDivisionName(firstDiv.name);
      if (firstDiv.cities.length > 0) {
        setSelectedCityName(firstDiv.cities[0].name);
      } else {
        setSelectedCityName('');
      }
    } else {
      setSelectedDivisionName('');
      setSelectedCityName('');
    }
  };

  // Division Change handler
  const handleDivisionChange = (divName: string) => {
    setSelectedDivisionName(divName);
    if (currentCountryObj) {
      const divObj = currentCountryObj.divisions.find((d) => d.name === divName);
      if (divObj && divObj.cities.length > 0) {
        setSelectedCityName(divObj.cities[0].name);
      } else {
        setSelectedCityName('');
      }
    }
  };

  // Main Generation Handler
  const handleGenerate = async () => {
    const effectiveCity = customCityText.trim() || selectedCityName;
    const effectiveState = customStateText.trim() || selectedDivisionName;
    const effectiveCountry = selectedCountryName;

    const hasAnyInput =
      Boolean(postalCode.trim()) ||
      Boolean(effectiveCountry) ||
      Boolean(effectiveState) ||
      Boolean(effectiveCity) ||
      Boolean(knownAddress.trim());

    if (!hasAnyInput) {
      setErrorMessage(
        'Please enter at least one location parameter (e.g. Postal Code, Country, City, or Known Address).'
      );
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);
    setLoadingStepText('Locating address & coordinates...');

    try {
      const result = await resolveLocationDetails({
        postalCode: postalCode.trim() || undefined,
        country: effectiveCountry || undefined,
        state: effectiveState || undefined,
        city: effectiveCity || undefined,
        address: knownAddress.trim() || undefined,
      });

      const resultId = `ADDR-${result.countryCode}-${(result.cityName || 'GEO').replace(/[^a-zA-Z0-9]/g, '').slice(0, 8)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      saveResult('address-generator', '/address-generator', 'Address Generator', result, resultId);

      setIsLoading(false);

      if (onNavigate) {
        onNavigate(`/address-generator/result/${resultId}`);
      } else {
        window.location.hash = `#/address-generator/result/${resultId}`;
      }
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(
        err?.message ||
          'We could not find a precise location from the information provided. Try adding a city, state or postal code.'
      );
    }
  };

  // Preset Handlers for rapid testing
  const applyPreset = (preset: {
    postal?: string;
    country?: string;
    state?: string;
    city?: string;
    address?: string;
  }) => {
    setPostalCode(preset.postal || '');
    setSelectedCountryName(preset.country || '');
    setSelectedDivisionName(preset.state || '');
    setSelectedCityName(preset.city || '');
    setCustomCityText('');
    setCustomStateText('');
    setKnownAddress(preset.address || '');
    setErrorMessage(null);
  };

  // Reset form
  const handleReset = () => {
    setPostalCode('');
    setSelectedCountryName('');
    setSelectedDivisionName('');
    setSelectedCityName('');
    setCustomCityText('');
    setCustomStateText('');
    setKnownAddress('');
    setErrorMessage(null);
  };

  const dynamicDivisionLabel = currentCountryObj?.divisionType || 'State / Province / Region';

  return (
    <div id="address-generator-tool-container" className="space-y-8">
      {/* Search & Configuration Form Card */}
      <div className="bg-white border-2 border-black p-6 sm:p-8 space-y-6">
        <div className="border-b-2 border-black pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-black">
              Address & Location Resolution Parameters
            </h2>
            <p className="text-xs text-neutral-600">
              Enter any combination of fields below. All fields are optional.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="self-start sm:self-auto text-xs font-mono font-bold uppercase text-neutral-600 hover:text-black flex items-center gap-1.5 cursor-pointer underline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Form</span>
          </button>
        </div>

        {/* Rapid Preset Chips */}
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 block">
            Quick Preset Addresses:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_ADDRESSES.map((preset) => (
              <button
                key={preset.label}
                onClick={() => applyPreset(preset)}
                className="px-3 py-1.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 hover:border-black font-mono text-xs text-black transition-colors cursor-pointer"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {/* Field 1: Postal Code */}
          <div className="space-y-1.5">
            <label
              htmlFor="input-postal-code"
              className="block font-mono text-xs font-black uppercase tracking-wider text-black"
            >
              1. Postal / ZIP Code
            </label>
            <input
              id="input-postal-code"
              type="text"
              placeholder="e.g. SW1A 1AA, 90210, 75008"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-mono text-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-neutral-400"
            />
            <span className="text-[10px] font-mono text-neutral-500 block">
              Entering a postal code can instantly resolve the entire location.
            </span>
          </div>

          {/* Field 2: Country */}
          <div className="space-y-1.5">
            <label
              htmlFor="select-country-ag"
              className="block font-mono text-xs font-black uppercase tracking-wider text-black"
            >
              2. Country ({ALL_COUNTRIES_FLAT.length} sovereign states)
            </label>
            <div className="space-y-1">
              <select
                id="select-country-ag"
                value={selectedCountryName}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              >
                <option value="">-- Select Country (Optional) --</option>
                {filteredCountries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.flag} {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Field 3: State / Province / Region */}
          <div className="space-y-1.5">
            <label
              htmlFor="select-division-ag"
              className="block font-mono text-xs font-black uppercase tracking-wider text-black truncate"
              title={`3. ${dynamicDivisionLabel}`}
            >
              3. {dynamicDivisionLabel}
            </label>
            {availableDivisions.length > 0 ? (
              <select
                id="select-division-ag"
                value={selectedDivisionName}
                onChange={(e) => handleDivisionChange(e.target.value)}
                className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              >
                <option value="">-- Select {dynamicDivisionLabel} --</option>
                {availableDivisions.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                placeholder={`Type ${dynamicDivisionLabel}...`}
                value={customStateText}
                onChange={(e) => setCustomStateText(e.target.value)}
                className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-mono text-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-neutral-400"
              />
            )}
          </div>

          {/* Field 4: City / Locality */}
          <div className="space-y-1.5">
            <label
              htmlFor="select-city-ag"
              className="block font-mono text-xs font-black uppercase tracking-wider text-black"
            >
              4. City / Locality
            </label>
            {availableCities.length > 0 ? (
              <select
                id="select-city-ag"
                value={selectedCityName}
                onChange={(e) => setSelectedCityName(e.target.value)}
                className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              >
                <option value="">-- Select City --</option>
                {availableCities.map((cty) => (
                  <option key={cty.name} value={cty.name}>
                    {cty.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id="input-city-ag"
                type="text"
                placeholder="Type City / Locality..."
                value={customCityText}
                onChange={(e) => setCustomCityText(e.target.value)}
                className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-mono text-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-neutral-400"
              />
            )}
          </div>

          {/* Field 5: Known Address or Street */}
          <div className="space-y-1.5 lg:col-span-2">
            <label
              htmlFor="input-known-address"
              className="block font-mono text-xs font-black uppercase tracking-wider text-black"
            >
              5. Street Address or Landmark
            </label>
            <input
              id="input-known-address"
              type="text"
              placeholder="e.g. 10 Downing Street, Baker Street, Broadway"
              value={knownAddress}
              onChange={(e) => setKnownAddress(e.target.value)}
              className="w-full bg-neutral-50 border-2 border-black px-3.5 py-2.5 text-sm font-mono text-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-neutral-400"
            />
          </div>
        </div>

        {/* Action Button & Note */}
        <div className="pt-4 border-t-2 border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            id="address-generator-submit-btn"
            onClick={handleGenerate}
            disabled={isLoading}
            className="px-8 py-4 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer flex items-center space-x-2 disabled:opacity-50"
          >
            {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>{isLoading ? loadingStepText : 'Generate Location'}</span>
          </button>

          <span className="font-mono text-xs text-neutral-500">
            Will open dedicated result page upon resolving geodetic coordinates.
          </span>
        </div>
      </div>

      {isLoading && (
        <div className="border-2 border-black bg-neutral-50 p-8 text-center space-y-3">
          <RefreshCw className="w-6 h-6 animate-spin mx-auto text-black" />
          <p className="font-mono text-sm font-bold uppercase tracking-wider text-black">
            {loadingStepText}
          </p>
          <p className="text-xs text-neutral-600">
            Querying geographic boundary index and geocoding centroids.
          </p>
        </div>
      )}

      {errorMessage && !isLoading && (
        <div className="p-4 bg-red-50 border-2 border-red-700 text-red-900 font-bold text-sm font-mono flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Feature Capabilities Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-black p-6 space-y-2">
          <MapPin className="w-6 h-6 text-black" />
          <h2 className="font-black text-sm uppercase tracking-wide text-black">
            True Address Accuracy
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Strict adherence to real street addresses and administrative subdivisions — no fake invented street numbers.
          </p>
        </div>

        <div className="bg-white border-2 border-black p-6 space-y-2">
          <Compass className="w-6 h-6 text-black" />
          <h2 className="font-black text-sm uppercase tracking-wide text-black">
            WGS84 Coordinates
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Sub-meter geodetic latitude and longitude coordinates computed with precision accuracy levels.
          </p>
        </div>

        <div className="bg-white border-2 border-black p-6 space-y-2">
          <Globe className="w-6 h-6 text-black" />
          <h2 className="font-black text-sm uppercase tracking-wide text-black">
            195 Sovereign Countries
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Comprehensive coverage of postal codes, states, provinces, prefectures, and municipalities globally.
          </p>
        </div>
      </div>
    </div>
  );
};
