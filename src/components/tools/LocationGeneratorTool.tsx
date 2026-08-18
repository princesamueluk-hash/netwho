import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sparkles,
  Globe,
  MapPin,
  Compass,
  Copy,
  Check,
  RefreshCw,
  Download,
  Building,
  Navigation,
  Clock,
  Coins,
  Phone,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Layers,
  Search,
} from 'lucide-react';
import {
  WORLD_LOCATIONS_DATA,
  TOTAL_COUNTRIES_COUNT,
  ContinentData,
  CountryData,
  DivisionData,
  CityData,
  FullLocationResult,
  generateStructuredLocation,
  generateRandomWorldwideLocation,
} from '../../data/worldLocationsData';
import { LocationMap } from '../LocationMap';
import { saveResult } from '../../utils/resultStore';

interface LocationGeneratorToolProps {
  onNavigate?: (path: string) => void;
}

export const LocationGeneratorTool: React.FC<LocationGeneratorToolProps> = ({ onNavigate }) => {
  // Generation Mode: 'select' (Manual Hierarchy) | 'random' (Instant World Random)
  const [activeMode, setActiveMode] = useState<'select' | 'random'>('select');

  // Hierarchy Selection State
  const [selectedContinentName, setSelectedContinentName] = useState<string>('Africa');
  const [selectedCountryName, setSelectedCountryName] = useState<string>('Nigeria');
  const [selectedDivisionName, setSelectedDivisionName] = useState<string>('Lagos');
  const [selectedCityName, setSelectedCityName] = useState<string>('Ikeja');
  const [countrySearchQuery, setCountrySearchQuery] = useState<string>('');

  // Result & UI State
  const [generatedResult, setGeneratedResult] = useState<FullLocationResult | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const resultCardRef = useRef<HTMLDivElement | null>(null);

  // Derive Current Objects in Hierarchy
  const currentContinent = useMemo<ContinentData | undefined>(() => {
    return WORLD_LOCATIONS_DATA.find((c) => c.name === selectedContinentName) || WORLD_LOCATIONS_DATA[0];
  }, [selectedContinentName]);

  const availableCountries = useMemo<CountryData[]>(() => {
    return currentContinent ? currentContinent.countries : [];
  }, [currentContinent]);

  const currentCountry = useMemo<CountryData | undefined>(() => {
    return availableCountries.find((c) => c.name === selectedCountryName) || availableCountries[0];
  }, [availableCountries, selectedCountryName]);

  const availableDivisions = useMemo<DivisionData[]>(() => {
    return currentCountry ? currentCountry.divisions : [];
  }, [currentCountry]);

  const currentDivision = useMemo<DivisionData | undefined>(() => {
    return availableDivisions.find((d) => d.name === selectedDivisionName) || availableDivisions[0];
  }, [availableDivisions, selectedDivisionName]);

  const availableCities = useMemo<CityData[]>(() => {
    return currentDivision ? currentDivision.cities : [];
  }, [currentDivision]);

  // Initial mount: generate default location
  useEffect(() => {
    const initial = generateStructuredLocation('Africa', 'Nigeria', 'Lagos', 'Ikeja');
    if (initial) {
      setGeneratedResult(initial);
    }
  }, []);

  const filteredCountries = useMemo<CountryData[]>(() => {
    if (!countrySearchQuery.trim()) return availableCountries;
    const q = countrySearchQuery.toLowerCase().trim();
    return availableCountries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [availableCountries, countrySearchQuery]);

  // Handlers for Cascading Selection (resets dependent children to valid defaults)
  const handleContinentChange = (newContinentName: string) => {
    setSelectedContinentName(newContinentName);
    const newCont = WORLD_LOCATIONS_DATA.find((c) => c.name === newContinentName);
    if (newCont && newCont.countries.length > 0) {
      const firstCountry = newCont.countries[0];
      setSelectedCountryName(firstCountry.name);
      if (firstCountry.divisions.length > 0) {
        const firstDiv = firstCountry.divisions[0];
        setSelectedDivisionName(firstDiv.name);
        if (firstDiv.cities.length > 0) {
          setSelectedCityName(firstDiv.cities[0].name);
        }
      }
    }
  };

  const handleCountryChange = (newCountryName: string) => {
    setSelectedCountryName(newCountryName);
    const newCtry = availableCountries.find((c) => c.name === newCountryName);
    if (newCtry && newCtry.divisions.length > 0) {
      const firstDiv = newCtry.divisions[0];
      setSelectedDivisionName(firstDiv.name);
      if (firstDiv.cities.length > 0) {
        setSelectedCityName(firstDiv.cities[0].name);
      }
    }
  };

  const handleDivisionChange = (newDivisionName: string) => {
    setSelectedDivisionName(newDivisionName);
    const newDiv = availableDivisions.find((d) => d.name === newDivisionName);
    if (newDiv && newDiv.cities.length > 0) {
      setSelectedCityName(newDiv.cities[0].name);
    }
  };

  const handleCityChange = (newCityName: string) => {
    setSelectedCityName(newCityName);
  };

  // Generate Location from Manual Hierarchy
  const handleGenerateManualLocation = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const res = generateStructuredLocation(
        selectedContinentName,
        selectedCountryName,
        selectedDivisionName,
        selectedCityName
      );
      if (res) {
        const resultId = `LOC-${res.countryCode}-${(res.cityName || 'WORLD').replace(/[^a-zA-Z0-9]/g, '').slice(0, 10)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        saveResult('location-generator', '/location-generator', 'Location Generator', res, resultId);
        setIsGenerating(false);

        if (onNavigate) {
          onNavigate(`/location-generator/result/${resultId}`);
        } else {
          window.location.hash = `#/location-generator/result/${resultId}`;
        }
      } else {
        setIsGenerating(false);
      }
    }, 350);
  };

  // Generate Random World Location
  const handleGenerateRandomLocation = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomLoc = generateRandomWorldwideLocation();
      const resultId = `LOC-${randomLoc.countryCode}-${(randomLoc.cityName || 'WORLD').replace(/[^a-zA-Z0-9]/g, '').slice(0, 10)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      saveResult('location-generator', '/location-generator', 'Location Generator', randomLoc, resultId);
      setIsGenerating(false);

      if (onNavigate) {
        onNavigate(`/location-generator/result/${resultId}`);
      } else {
        window.location.hash = `#/location-generator/result/${resultId}`;
      }
    }, 350);
  };

  // Copy address string to clipboard
  const handleCopyFormattedAddress = () => {
    if (!generatedResult) return;
    navigator.clipboard.writeText(generatedResult.formattedAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  // Copy coordinates string
  const handleCopyCoordinates = () => {
    if (!generatedResult) return;
    const coordsStr = `${generatedResult.latitude}, ${generatedResult.longitude}`;
    navigator.clipboard.writeText(coordsStr);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  // Export JSON file
  const handleExportJson = () => {
    if (!generatedResult) return;
    const blob = new Blob([JSON.stringify(generatedResult, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `netwho-location-${generatedResult.cityName.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Dynamic administrative division label based on country
  const dynamicDivisionLabel = currentCountry?.divisionType || 'State / Province / Region';

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* MODE SELECTOR TABS */}
      <div className="flex border-2 border-black bg-white p-1 gap-1">
        <button
          id="mode-tab-select"
          onClick={() => setActiveMode('select')}
          className={`flex-1 py-3 px-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
            activeMode === 'select'
              ? 'bg-black text-white'
              : 'text-neutral-700 hover:bg-neutral-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Mode 1: Select Location Hierarchy</span>
        </button>
        <button
          id="mode-tab-random"
          onClick={() => setActiveMode('random')}
          className={`flex-1 py-3 px-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
            activeMode === 'random'
              ? 'bg-black text-white'
              : 'text-neutral-700 hover:bg-neutral-100'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Mode 2: Random World Location</span>
        </button>
      </div>

      {/* GENERATION CONTROL PANEL */}
      <section className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
        <div className="border-b-2 border-black pb-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-400">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{TOTAL_COUNTRIES_COUNT} Sovereign Countries Active</span>
              </span>
              <span className="font-mono text-[11px] font-bold text-neutral-600">
                Full 4-Tier Hierarchy Verified
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
              {activeMode === 'select'
                ? 'Select Continent, Country, Region & City'
                : 'Instant Worldwide Random Location Generator'}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mt-1">
              {activeMode === 'select'
                ? 'Follow the 4-tier geographic hierarchy to generate structured data for any supported global territory.'
                : 'Synthesizes a 100% logically valid location across all 195 sovereign nations worldwide.'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800">
              WGS84 Geocoded
            </span>
          </div>
        </div>

        {/* MODE 1 FORM: Step-by-Step Cascading Dropdowns */}
        {activeMode === 'select' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1: Continent */}
              <div className="space-y-1.5">
                <label
                  htmlFor="select-continent"
                  className="block font-mono text-xs font-black uppercase tracking-wider text-black"
                >
                  1. Continent ({WORLD_LOCATIONS_DATA.length})
                </label>
                <select
                  id="select-continent"
                  value={selectedContinentName}
                  onChange={(e) => {
                    setCountrySearchQuery('');
                    handleContinentChange(e.target.value);
                  }}
                  className="w-full bg-neutral-50 border-2 border-black px-3 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  {WORLD_LOCATIONS_DATA.map((cont) => (
                    <option key={cont.name} value={cont.name}>
                      {cont.name} ({cont.countries.length} countries)
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Country */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="select-country"
                    className="block font-mono text-xs font-black uppercase tracking-wider text-black"
                  >
                    2. Country ({availableCountries.length})
                  </label>
                </div>
                <div className="space-y-1">
                  {availableCountries.length > 15 && (
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Filter country..."
                        value={countrySearchQuery}
                        onChange={(e) => setCountrySearchQuery(e.target.value)}
                        className="w-full pl-8 pr-2 py-1 text-xs font-mono bg-white border border-neutral-300 focus:outline-none focus:border-black"
                      />
                    </div>
                  )}
                  <select
                    id="select-country"
                    value={selectedCountryName}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full bg-neutral-50 border-2 border-black px-3 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                  >
                    {filteredCountries.map((ctry) => (
                      <option key={ctry.code} value={ctry.name}>
                        {ctry.name} ({ctry.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: State / Province / Region (Adaptive Label) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="select-division"
                  className="block font-mono text-xs font-black uppercase tracking-wider text-black truncate"
                  title={`3. ${dynamicDivisionLabel}`}
                >
                  3. {dynamicDivisionLabel}
                </label>
                <select
                  id="select-division"
                  value={selectedDivisionName}
                  onChange={(e) => handleDivisionChange(e.target.value)}
                  className="w-full bg-neutral-50 border-2 border-black px-3 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  {availableDivisions.map((div) => (
                    <option key={div.name} value={div.name}>
                      {div.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 4: City */}
              <div className="space-y-1.5">
                <label
                  htmlFor="select-city"
                  className="block font-mono text-xs font-black uppercase tracking-wider text-black"
                >
                  4. City / Locality
                </label>
                <select
                  id="select-city"
                  value={selectedCityName}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full bg-neutral-50 border-2 border-black px-3 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  {availableCities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons for Mode 1 */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-generate-location"
                onClick={handleGenerateManualLocation}
                disabled={isGenerating}
                className="px-6 py-3.5 bg-black text-white hover:bg-neutral-800 transition-all font-mono font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-60"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                    <span>Generating Location...</span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Generate Location</span>
                  </>
                )}
              </button>

              <button
                id="btn-quick-random-in-mode1"
                onClick={handleGenerateRandomLocation}
                disabled={isGenerating}
                className="px-5 py-3.5 bg-neutral-100 text-black hover:bg-neutral-200 transition-all font-mono font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-black cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-neutral-700" />
                <span>Or Generate Random Location</span>
              </button>
            </div>
          </div>
        )}

        {/* MODE 2: Random Location Fast Generator */}
        {activeMode === 'random' && (
          <div className="space-y-6">
            <div className="p-5 bg-neutral-50 border-2 border-black border-dashed flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-base font-black text-black">
                  Random World Geographic Generation Engine
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  Selects an arbitrary continent, authentic country, validated province/state, and real city with verified coordinates.
                </div>
              </div>

              <button
                id="btn-generate-random-location-mode2"
                onClick={handleGenerateRandomLocation}
                disabled={isGenerating}
                className="px-7 py-4 bg-black text-white hover:bg-neutral-800 transition-all font-mono font-black text-sm uppercase tracking-wider flex items-center gap-3 border-2 border-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 disabled:opacity-60"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin text-emerald-400" />
                    <span>Synthesizing World Location...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    <span>Generate Random Location</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </section>

      {/* GENERATED LOCATION RESULT SECTION */}
      {generatedResult && (
        <div ref={resultCardRef} className="space-y-8 scroll-mt-24">
          {/* Top Result Card */}
          <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Card Header */}
            <div className="bg-black text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-emerald-400">
                    Location Generated • {generatedResult.id}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {generatedResult.cityName}, {generatedResult.country}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 font-mono text-xs">
                <button
                  id="btn-copy-address"
                  onClick={handleCopyFormattedAddress}
                  className="px-3.5 py-2 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy formatted address to clipboard"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
                <button
                  id="btn-export-json"
                  onClick={handleExportJson}
                  className="px-3.5 py-2 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Download JSON record"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>JSON</span>
                </button>
              </div>
            </div>

            {/* Structured Details Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Formatted Full Address Banner */}
              <div className="bg-neutral-50 border-2 border-black p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                    Formatted Address String
                  </span>
                  <div className="font-mono text-sm sm:text-base font-black text-black">
                    {generatedResult.formattedAddress}
                  </div>
                </div>
                <button
                  onClick={handleCopyFormattedAddress}
                  className="shrink-0 text-xs font-mono font-bold text-neutral-700 hover:text-black flex items-center gap-1 underline"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>

              {/* Comprehensive Hierarchy & Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Continent */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center space-x-1.5 text-neutral-500">
                    <Globe className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      Continent
                    </span>
                  </div>
                  <div className="text-lg font-black text-black">{generatedResult.continent}</div>
                </div>

                {/* 2. Country */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center space-x-1.5 text-neutral-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      Country
                    </span>
                  </div>
                  <div className="text-lg font-black text-black">{generatedResult.country}</div>
                  <div className="text-xs font-mono text-neutral-600">
                    ISO: {generatedResult.countryCode} / {generatedResult.countryCode3} • Capital: {generatedResult.capital}
                  </div>
                </div>

                {/* 3. State / Province / Region */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center space-x-1.5 text-neutral-500">
                    <Building className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {generatedResult.divisionType}
                    </span>
                  </div>
                  <div className="text-lg font-black text-black">{generatedResult.divisionName}</div>
                  <div className="text-xs font-mono text-neutral-600">Administrative Level 1</div>
                </div>

                {/* 4. City */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center space-x-1.5 text-neutral-500">
                    <Navigation className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      City / Locality
                    </span>
                  </div>
                  <div className="text-lg font-black text-black">{generatedResult.cityName}</div>
                  <div className="text-xs font-mono text-neutral-600">
                    Postal: {generatedResult.postalCode}
                  </div>
                </div>
              </div>

              {/* Geographic & Regional Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Coordinates */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center justify-between text-neutral-500">
                    <div className="flex items-center space-x-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                        Geographic Coordinates
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCoordinates}
                      className="text-xs font-mono text-neutral-600 hover:text-black flex items-center gap-1"
                      title="Copy coordinates"
                    >
                      {copiedCoords ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                  <div className="font-mono text-base font-black text-black">
                    {generatedResult.latitude.toFixed(4)}°, {generatedResult.longitude.toFixed(4)}°
                  </div>
                  <div className="text-xs font-mono text-neutral-600">
                    Lat: {generatedResult.latitude} | Lng: {generatedResult.longitude}
                  </div>
                </div>

                {/* Timezone */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center space-x-1.5 text-neutral-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      Timezone & Offset
                    </span>
                  </div>
                  <div className="font-mono text-base font-black text-black truncate">
                    {generatedResult.timezone}
                  </div>
                  <div className="text-xs font-mono text-neutral-600">
                    Offset: {generatedResult.utcOffset}
                  </div>
                </div>

                {/* Currency & Dial Code */}
                <div className="bg-neutral-50 border border-neutral-300 p-4 space-y-1">
                  <div className="flex items-center space-x-1.5 text-neutral-500">
                    <Coins className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      Currency & Dial Code
                    </span>
                  </div>
                  <div className="text-base font-black text-black truncate">
                    {generatedResult.currency}
                  </div>
                  <div className="text-xs font-mono text-neutral-600">
                    Calling Code: {generatedResult.dialCode}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC MAP INTEGRATION */}
          <LocationMap
            latitude={generatedResult.latitude}
            longitude={generatedResult.longitude}
            cityName={generatedResult.cityName}
            countryName={generatedResult.country}
            divisionName={generatedResult.divisionName}
          />
        </div>
      )}

      {/* COMPREHENSIVE PROFESSIONAL SEO CONTENT & GEOGRAPHIC ARCHITECTURE */}
      <article className="border-t-2 border-black pt-12 space-y-10">
        {/* H1 & Lead intro */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Global Location Generator
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-serif max-w-4xl">
            NETWHO’s Global Location Generator is a professional geographic intelligence and synthetic
            location utility. It allows developers, QA engineers, GIS specialists, designers, and educators
            to generate, inspect, and explore structured geographic datasets from continents and territories
            around the globe. Whether configuring exact continent-to-city hierarchies or generating random
            verified worldwide coordinates, NETWHO provides logically coherent geographic models with real
            geodetic parameters and interactive cartographic mapping.
          </p>
        </div>

        {/* H2: Generate Locations Anywhere in the World */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-black tracking-tight">
            Generate Locations Anywhere in the World
          </h2>
          <p className="text-neutral-700 leading-relaxed font-serif">
            Modern applications require reliable geographic test vectors across global regions. The Global
            Location Generator models international administrative taxonomies across all seven continents:
            Africa, Asia, Europe, North America, South America, Oceania, and Antarctic research territories.
            Each generated record synthesizes valid hierarchical relationships, ISO standard country codes,
            national capitals, regional subdivisions, timezone offsets, currency indicators, and WGS84
            latitude and longitude coordinates.
          </p>
        </section>

        {/* H2: How the Global Location Generator Works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-black tracking-tight">
            How the Global Location Generator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-neutral-50 border-2 border-black p-5 space-y-2">
              <span className="font-mono text-xs font-black text-neutral-400">STAGE 01</span>
              <h3 className="text-base font-black text-black">Geographic Hierarchy Modeling</h3>
              <p className="text-xs text-neutral-600 leading-normal font-mono">
                The generator indexes continent, national, and subnational boundary datasets to ensure every
                selected or randomized location adheres strictly to real-world administrative structures.
              </p>
            </div>
            <div className="bg-neutral-50 border-2 border-black p-5 space-y-2">
              <span className="font-mono text-xs font-black text-neutral-400">STAGE 02</span>
              <h3 className="text-base font-black text-black">Geodetic Parameter Resolution</h3>
              <p className="text-xs text-neutral-600 leading-normal font-mono">
                High-precision latitude, longitude, IANA timezones (e.g. Africa/Lagos, America/New_York), UTC
                offsets, and currency designations are attached to the generated record.
              </p>
            </div>
            <div className="bg-neutral-50 border-2 border-black p-5 space-y-2">
              <span className="font-mono text-xs font-black text-neutral-400">STAGE 03</span>
              <h3 className="text-base font-black text-black">Cartographic Map Rendering</h3>
              <p className="text-xs text-neutral-600 leading-normal font-mono">
                The generated location coordinates are bound directly to an interactive OpenStreetMap engine,
                providing visual satellite verification and downloadable structured JSON exports.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Select a Continent, Country, Region and City */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-black tracking-tight">
            Select a Continent, Country, Region and City
          </h2>
          <p className="text-neutral-700 leading-relaxed font-serif">
            Administrative divisions vary significantly across borders. In the United States and Nigeria,
            subdivisions are designated as <strong>States</strong>; in Canada and South Africa, they are{' '}
            <strong>Provinces</strong>; in the United Kingdom, they span constituent nations and{' '}
            <strong>Counties</strong>; in Japan, they are structured as <strong>Prefectures</strong>; in Germany,
            as <strong>Federal States (Bundesländer)</strong>; and in the United Arab Emirates, as{' '}
            <strong>Emirates</strong>. The NETWHO selector dynamically adapts its administrative labels to reflect
            the exact governance taxonomy of the chosen country, ensuring natural, accurate exploration.
          </p>
        </section>

        {/* H2: Generate a Random World Location */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-black tracking-tight">
            Generate a Random World Location
          </h2>
          <p className="text-neutral-700 leading-relaxed font-serif">
            Mode 2 enables instant worldwide randomization. With a single click, the engine selects a valid
            random path from continent down to an authentic locality. Unlike static mock lists, NETWHO ensures
            zero invalid combinations—preventing nonsensical mismatches such as assigning a Nigerian city to a
            North American state. Every generation is independently computed and updates both the metadata card
            and the interactive map in real time.
          </p>
        </section>

        {/* H2: Explore Location Details */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-black tracking-tight">
            Explore Location Details & Common Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-neutral-300 p-4 space-y-1.5 bg-white">
              <h4 className="font-bold text-sm text-black">Software & API Testing</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Validate address parsing routines, geofencing algorithms, billing form validators, and
                international checkout flows with realistic worldwide datasets.
              </p>
            </div>
            <div className="border border-neutral-300 p-4 space-y-1.5 bg-white">
              <h4 className="font-bold text-sm text-black">UI Prototyping & Mockups</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Populate user interfaces, dashboard analytics cards, travel booking flows, and logistics demo
                applications with authentic international addresses and coordinates.
              </p>
            </div>
            <div className="border border-neutral-300 p-4 space-y-1.5 bg-white">
              <h4 className="font-bold text-sm text-black">GIS & Map Visualizations</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Quickly locate valid latitude and longitude coordinate benchmarks for testing OpenStreetMap,
                Leaflet, Mapbox, or Google Maps layers.
              </p>
            </div>
            <div className="border border-neutral-300 p-4 space-y-1.5 bg-white">
              <h4 className="font-bold text-sm text-black">Education & Geography Research</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Explore worldwide country capitals, timezones, currency designations, dialing codes, and
                regional administrative structures in an interactive environment.
              </p>
            </div>
          </div>
        </section>

        {/* Responsible Usage Notice */}
        <div className="p-4 bg-neutral-100 border-l-4 border-black text-xs font-mono text-neutral-700 space-y-1">
          <div className="font-bold text-black uppercase">Responsible Usage & Data Scope Notice</div>
          <p>
            Locations generated by this tool are structured synthetic models based on verified geographic
            geometries and administrative divisions. They are intended strictly for software development,
            testing, education, and UI prototyping. Generated street patterns and numbers do not represent the
            residential identity or private data of any individual person.
          </p>
        </div>

        {/* H2: Frequently Asked Questions (Accordion) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="border-2 border-black divide-y-2 divide-black bg-white">
            {[
              {
                q: 'What is a global location generator?',
                a: 'A global location generator is an online utility that creates structured geographic records—including continent, country, state/province/region, city, latitude, longitude, and timezone data—for software testing, design mockups, and geographical research.',
              },
              {
                q: 'Can I select a specific country and region?',
                a: 'Yes. In Mode 1 (Select Location), you can manually choose your continent, target country, specific state/province/region, and city. The generator dynamically adapts its options and labels to match the administrative divisions of your selected country.',
              },
              {
                q: 'Can I generate a random location worldwide?',
                a: 'Yes. Mode 2 (Random World Location) randomly selects a valid hierarchy across all major continents, generating authentic coordinates, administrative details, and an interactive map view in a single click.',
              },
              {
                q: 'Does the generator support cities around the world?',
                a: 'Yes. The dataset encompasses major cities across Africa (e.g. Nigeria, South Africa, Kenya, Egypt, Ghana), Asia (e.g. Japan, India, Singapore, UAE, South Korea), Europe (e.g. UK, Germany, France, Netherlands), North America (e.g. USA, Canada, Mexico), South America (e.g. Brazil, Argentina, Colombia), Oceania (e.g. Australia, New Zealand), and Antarctica.',
              },
              {
                q: 'Can I use the tool for development, QA testing, or mockups?',
                a: 'Yes. All generated records are ideal for testing address forms, geofencing logic, GIS mapping software, API payloads, and seeding databases. You can copy formatted text strings or download raw JSON records.',
              },
              {
                q: 'Can I view generated locations on an interactive map?',
                a: 'Yes. Every generated location automatically updates the embedded OpenStreetMap view with accurate bounding coordinates, a centered pin marker, and one-click direct links to OpenStreetMap and Google Maps.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="p-4 sm:p-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-black text-base sm:text-lg text-black hover:text-neutral-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm font-serif text-neutral-700 leading-relaxed border-t border-neutral-200 pt-3">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPLORE MORE NETWHO TOOLS (Internal SEO Links) */}
        <section className="bg-neutral-50 border-2 border-black p-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-black" />
            <h3 className="text-lg font-black text-black tracking-tight">
              Explore More NETWHO Tools
            </h3>
          </div>
          <p className="text-xs font-mono text-neutral-600">
            Discover related network intelligence and structured demographic data utilities on the NETWHO platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <button
              onClick={() => onNavigate && onNavigate('/ip-lookup')}
              className="text-left bg-white border-2 border-black p-4 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <div className="font-mono text-[10px] font-bold uppercase text-neutral-500">
                Network Intelligence
              </div>
              <div className="font-black text-sm text-black group-hover:text-neutral-800 flex items-center justify-between mt-1">
                <span>IP Lookup</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Real-time IP geolocation, ASN routing, ISP inspection, and network security diagnostics.
              </p>
            </button>

            <button
              onClick={() => onNavigate && onNavigate('/generate-ip')}
              className="text-left bg-white border-2 border-black p-4 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <div className="font-mono text-[10px] font-bold uppercase text-neutral-500">
                Synthetic Addresses
              </div>
              <div className="font-black text-sm text-black group-hover:text-neutral-800 flex items-center justify-between mt-1">
                <span>Generate IP</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Generate valid public IPv4/IPv6, RFC1918 private subnets, and custom CIDR ranges for testing.
              </p>
            </button>

            <button
              onClick={() => onNavigate && onNavigate('/uk-profile')}
              className="text-left bg-white border-2 border-black p-4 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <div className="font-mono text-[10px] font-bold uppercase text-neutral-500">
                Demographic Data
              </div>
              <div className="font-black text-sm text-black group-hover:text-neutral-800 flex items-center justify-between mt-1">
                <span>UK Profile</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                Create coherent 8-section UK demographic and lifestyle profiles with selectable criteria.
              </p>
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};
