import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Building,
  Navigation,
  Compass,
  Clock,
  Globe,
  Copy,
  Check,
  Download,
  Layers,
  ArrowRight,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { ResultLayout } from './ResultLayout';
import { getResult, StoredResult } from '../../utils/resultStore';
import { ResolvedAddressResult } from '../../utils/geocoder';
import { LocationMap } from '../LocationMap';

interface AddressGeneratorResultViewProps {
  resultId: string;
  onNavigate: (path: string) => void;
}

export const AddressGeneratorResultView: React.FC<AddressGeneratorResultViewProps> = ({
  resultId,
  onNavigate,
}) => {
  const [storedRecord, setStoredRecord] = useState<StoredResult<ResolvedAddressResult> | null>(() => {
    return getResult<ResolvedAddressResult>('address-generator', resultId);
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const rec = getResult<ResolvedAddressResult>('address-generator', resultId);
    setStoredRecord(rec);
  }, [resultId]);

  if (!storedRecord || !storedRecord.data) {
    return (
      <ResultLayout
        toolName="Address Generator"
        toolSlug="/address-generator"
        resultId={resultId}
        resultTitle="Address & Location Result"
        notFound={true}
        onNavigate={onNavigate}
      />
    );
  }

  const addr = storedRecord.data;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const coordsString = `${addr.latitude.toFixed(6)}, ${addr.longitude.toFixed(6)}`;

  const formatSummaryForCopy = () => {
    return [
      `=== NETWHO ADDRESS & LOCATION INTELLIGENCE (${resultId}) ===`,
      `Formatted Address: ${addr.formattedAddress}`,
      `Address Line 1: ${addr.addressLine1}`,
      `Address Line 2: ${addr.addressLine2 || 'Not available'}`,
      `Building / Residence Number: ${addr.buildingNumber || 'Not available'}`,
      `Municipality / City: ${addr.city || 'Not available'}`,
      `State / Province / Region: ${addr.state || 'Not available'}`,
      `Postal / ZIP Code: ${addr.postalCode || 'Not available'}`,
      `Country: ${addr.country} (${addr.countryCode}) ${addr.countryFlag}`,
      `WGS84 Coordinates: ${coordsString}`,
      `Latitude: ${addr.latitude}`,
      `Longitude: ${addr.longitude}`,
      `Accuracy Level: ${addr.accuracy}`,
      `Timezone: ${addr.timezone || 'UTC'}`,
      `Resolution Method: ${addr.source}`,
      `Timestamp: ${storedRecord.createdAt}`,
    ].join('\n');
  };

  return (
    <ResultLayout
      toolName="Address Generator"
      toolSlug="/address-generator"
      resultId={resultId}
      resultTitle={addr.city ? `${addr.city}, ${addr.country}` : addr.country}
      resultSubtitle={`${addr.formattedAddress} • ${addr.accuracy}`}
      badgeLabel="RESOLVED ADDRESS & LOCATION"
      createdAt={storedRecord.createdAt}
      onNavigate={onNavigate}
      onGenerateAnother={() => onNavigate('/address-generator')}
      generateAnotherLabel="New Search / Generator"
      onCopyAll={formatSummaryForCopy}
      jsonExportData={addr}
      jsonFileName={`address-${(addr.city || addr.country).toLowerCase().replace(/[^a-z0-9]/g, '_')}.json`}
    >
      <div className="space-y-6">
        {/* Formatted Address Hero Header Card */}
        <div className="bg-black text-white border-2 border-black p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label={addr.country}>
                {addr.countryFlag}
              </span>
              <span className="px-2.5 py-1 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider">
                {addr.countryCode}
              </span>
              <span className="px-2.5 py-1 bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider">
                {addr.accuracy}
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              Result ID: {resultId}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Resolved Formatted Address
              </span>
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {addr.formattedAddress}
              </div>
              <div className="font-mono text-sm text-neutral-300 mt-1">
                WGS84 Coordinates: {coordsString}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(addr.formattedAddress, 'address')}
                className="px-4 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copiedField === 'address' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === 'address' ? 'Copied Address' : 'Copy Address'}</span>
              </button>

              <button
                onClick={() => handleCopy(coordsString, 'coords')}
                className="px-4 py-3 bg-neutral-800 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copiedField === 'coords' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === 'coords' ? 'Copied' : 'Copy Coords'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Structured Address Lines & Geodetic Resolution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Postal & Address Fields */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Building className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Structured Address Lines
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Address Line 1</span>
                <span className="font-bold text-black text-right max-w-[65%]">{addr.addressLine1}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Address Line 2</span>
                <span className={`font-bold ${addr.addressLine2 ? 'text-black' : 'text-neutral-400 italic'}`}>
                  {addr.addressLine2 || 'Not available'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Building / Residence No.</span>
                <span className={`font-bold ${addr.buildingNumber ? 'text-black' : 'text-neutral-400 italic'}`}>
                  {addr.buildingNumber || 'Not available'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">City / Locality</span>
                <span className="font-bold text-black">{addr.city || 'Not available'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">State / Province / Region</span>
                <span className="font-bold text-black">{addr.state || 'Not available'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Postal / ZIP Code</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {addr.postalCode || 'Not available'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Country</span>
                <span className="font-bold text-black flex items-center gap-1.5">
                  <span>{addr.countryFlag}</span>
                  <span>{addr.country}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Geodetic & Coordinate Resolution */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Compass className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Geodetic & Coordinate Resolution
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
                <span className="text-neutral-500 uppercase">Latitude</span>
                <span className="font-bold text-black">{addr.latitude.toFixed(6)}°</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Longitude</span>
                <span className="font-bold text-black">{addr.longitude.toFixed(6)}°</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Accuracy Designation</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                  {addr.accuracy}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Timezone</span>
                <span className="font-bold text-black">{addr.timezone || 'UTC'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Resolution Provider</span>
                <span className="font-bold text-neutral-800">{addr.source}</span>
              </div>
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
            latitude={addr.latitude}
            longitude={addr.longitude}
            city={addr.city || addr.country}
            division={addr.state || ''}
            country={addr.country}
          />
        </div>
      </div>
    </ResultLayout>
  );
};
