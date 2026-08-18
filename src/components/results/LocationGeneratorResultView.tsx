import React, { useState, useEffect } from 'react';
import {
  Globe,
  MapPin,
  Compass,
  Building,
  Navigation,
  Clock,
  Coins,
  Phone,
  Copy,
  Check,
  Download,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ResultLayout } from './ResultLayout';
import { getResult, StoredResult } from '../../utils/resultStore';
import { FullLocationResult } from '../../data/worldLocationsData';
import { LocationMap } from '../LocationMap';

interface LocationGeneratorResultViewProps {
  resultId: string;
  onNavigate: (path: string) => void;
}

export const LocationGeneratorResultView: React.FC<LocationGeneratorResultViewProps> = ({
  resultId,
  onNavigate,
}) => {
  const [storedRecord, setStoredRecord] = useState<StoredResult<FullLocationResult> | null>(() => {
    return getResult<FullLocationResult>('location-generator', resultId);
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const rec = getResult<FullLocationResult>('location-generator', resultId);
    setStoredRecord(rec);
  }, [resultId]);

  if (!storedRecord || !storedRecord.data) {
    return (
      <ResultLayout
        toolName="Location Generator"
        toolSlug="/location-generator"
        resultId={resultId}
        resultTitle="Global Location Result"
        notFound={true}
        onNavigate={onNavigate}
      />
    );
  }

  const loc = storedRecord.data;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const coordsString = `${loc.coordinates.lat.toFixed(6)}, ${loc.coordinates.lng.toFixed(6)}`;
  const fullAddressString = `${loc.city}, ${loc.division} (${loc.divisionType}), ${loc.country} (${loc.countryCode})`;

  const formatSummaryForCopy = () => {
    return [
      `=== NETWHO GLOBAL LOCATION INTELLIGENCE (${resultId}) ===`,
      `Full Location: ${fullAddressString}`,
      `Continent: ${loc.continent}`,
      `Country: ${loc.country} (${loc.countryCode}) ${loc.countryFlag}`,
      `Administrative Division: ${loc.division} [${loc.divisionType}]`,
      `Municipality / City: ${loc.city}`,
      `Geodetic Coordinates: ${coordsString}`,
      `Latitude: ${loc.coordinates.lat} (${loc.coordinates.latDMS})`,
      `Longitude: ${loc.coordinates.lng} (${loc.coordinates.lngDMS})`,
      `Timezone: ${loc.timezone} (${loc.utcOffset})`,
      `National Capital: ${loc.capital}`,
      `Currency: ${loc.currency}`,
      `Dialing Code: ${loc.phoneCode}`,
      `Generated Timestamp: ${storedRecord.createdAt}`,
    ].join('\n');
  };

  return (
    <ResultLayout
      toolName="Location Generator"
      toolSlug="/location-generator"
      resultId={resultId}
      resultTitle={`${loc.city}, ${loc.country}`}
      resultSubtitle={`${loc.division} • ${loc.continent} • ${coordsString}`}
      badgeLabel="RESOLVED GLOBAL LOCATION"
      createdAt={storedRecord.createdAt}
      onNavigate={onNavigate}
      onGenerateAnother={() => onNavigate('/location-generator')}
      generateAnotherLabel="Generate Another Location"
      onCopyAll={formatSummaryForCopy}
      jsonExportData={loc}
      jsonFileName={`location-${loc.city.toLowerCase()}-${loc.countryCode.toLowerCase()}.json`}
    >
      <div className="space-y-6">
        {/* Location Hero Header Card */}
        <div className="bg-black text-white border-2 border-black p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label={loc.country}>
                {loc.countryFlag}
              </span>
              <span className="px-2.5 py-1 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider">
                {loc.countryCode}
              </span>
              <span className="px-2.5 py-1 bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider">
                {loc.continent}
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              Result ID: {resultId}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Resolved Municipality & Region
              </span>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {loc.city}, {loc.country}
              </div>
              <div className="font-mono text-sm text-neutral-300 mt-1">
                {loc.division} ({loc.divisionType}) • {loc.continent}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(coordsString, 'coords')}
                className="px-4 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copiedField === 'coords' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === 'coords' ? 'Copied Coords' : 'Copy Coordinates'}</span>
              </button>

              <button
                onClick={() => handleCopy(fullAddressString, 'address')}
                className="px-4 py-3 bg-neutral-800 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copiedField === 'address' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === 'address' ? 'Copied' : 'Copy Address'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Geopolitical & Geodetic Data Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Administrative Hierarchy */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Building className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Administrative Hierarchy
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Continent</span>
                <span className="font-bold text-black">{loc.continent}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Sovereign State</span>
                <span className="font-bold text-black flex items-center gap-2">
                  <span>{loc.countryFlag}</span>
                  <span>{loc.country}</span>
                  <span className="bg-neutral-100 px-1.5 py-0.5 border border-neutral-300">{loc.countryCode}</span>
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">State / Province / Region</span>
                <span className="font-bold text-black">{loc.division}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Division Classification</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                  {loc.divisionType}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Municipality / City</span>
                <span className="font-bold text-black">{loc.city}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Geodetic & Chronometric Coordinates */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Compass className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Geodetic & Chronometric Data
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">WGS84 Coordinates</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {coordsString}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Latitude (DMS)</span>
                <span className="font-bold text-black">{loc.coordinates.latDMS}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Longitude (DMS)</span>
                <span className="font-bold text-black">{loc.coordinates.lngDMS}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Timezone (IANA)</span>
                <span className="font-bold text-black">{loc.timezone}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">UTC Offset</span>
                <span className="font-bold text-black">{loc.utcOffset}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Geopolitical Metadata Specs */}
        <div className="bg-neutral-50 border-2 border-black p-6 space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-neutral-300 pb-3">
            <Globe className="w-5 h-5 text-black" />
            <h2 className="text-base font-black text-black uppercase tracking-wide">
              National & Regional Geopolitical Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-white border border-neutral-300 p-4 space-y-1">
              <span className="text-neutral-500 uppercase text-[11px] block">National Capital</span>
              <span className="font-bold text-black text-sm">{loc.capital}</span>
            </div>
            <div className="bg-white border border-neutral-300 p-4 space-y-1">
              <span className="text-neutral-500 uppercase text-[11px] block">Currency</span>
              <span className="font-bold text-black text-sm">{loc.currency}</span>
            </div>
            <div className="bg-white border border-neutral-300 p-4 space-y-1">
              <span className="text-neutral-500 uppercase text-[11px] block">Country Dialing Code</span>
              <span className="font-bold text-black text-sm">{loc.phoneCode}</span>
            </div>
          </div>
        </div>

        {/* Interactive Location Map */}
        <div className="bg-white border-2 border-black p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Interactive Cartographic Map
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              {coordsString}
            </span>
          </div>

          <LocationMap
            latitude={loc.coordinates.lat}
            longitude={loc.coordinates.lng}
            city={loc.city}
            division={loc.division}
            country={loc.country}
          />
        </div>
      </div>
    </ResultLayout>
  );
};
