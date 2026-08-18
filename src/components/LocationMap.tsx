import React, { useState } from 'react';
import { MapPin, ExternalLink, Compass, Layers, Globe } from 'lucide-react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  cityName: string;
  countryName: string;
  divisionName: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  latitude,
  longitude,
  cityName,
  countryName,
  divisionName,
}) => {
  const [mapZoom, setMapZoom] = useState<number>(12);
  const [mapType, setMapType] = useState<'standard' | 'cycle' | 'transport'>('standard');

  // Calculate bounding box for OpenStreetMap embed
  const delta = 0.08 / (mapZoom / 10);
  const minLng = (longitude - delta).toFixed(5);
  const maxLng = (longitude + delta).toFixed(5);
  const minLat = (latitude - delta).toFixed(5);
  const maxLat = (latitude + delta).toFixed(5);

  const osmLayerMap = {
    standard: 'mapnik',
    cycle: 'cyclemap',
    transport: 'transportmap',
  };

  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${minLng}%2C${minLat}%2C${maxLng}%2C${maxLat}&layer=${osmLayerMap[mapType]}&marker=${latitude}%2C${longitude}`;
  const osmDirectUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${mapZoom}/${latitude}/${longitude}`;
  const googleMapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <div className="bg-white border-2 border-black overflow-hidden flex flex-col">
      {/* Map Header Toolbar */}
      <div className="bg-black text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-black">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-mono text-xs font-black uppercase tracking-wider">
            Geographic Map & Satellite Pin
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="bg-neutral-800 text-neutral-200 px-2 py-0.5 border border-neutral-700 hidden sm:inline-block">
            {latitude.toFixed(4)}° N, {longitude.toFixed(4)}° E
          </span>
          <a
            href={osmDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-white inline-flex items-center gap-1 transition-colors underline"
          >
            <span>OpenStreetMap</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={googleMapsDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-white inline-flex items-center gap-1 transition-colors underline"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Map Embed Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] bg-neutral-100 flex items-center justify-center">
        <iframe
          key={`${latitude}-${longitude}-${mapType}`}
          title={`Map of ${cityName}, ${countryName}`}
          className="w-full h-full border-0"
          src={osmEmbedUrl}
          loading="lazy"
        />

        {/* Pin Location HUD Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] pointer-events-none max-w-[85%]">
          <div className="text-xs font-black text-black leading-tight truncate">
            {cityName}, {divisionName}
          </div>
          <div className="text-[10px] font-mono text-neutral-600 truncate">
            {countryName} • Lat: {latitude.toFixed(4)} • Lng: {longitude.toFixed(4)}
          </div>
        </div>
      </div>

      {/* Map Footer Information */}
      <div className="bg-neutral-50 border-t border-neutral-300 p-3 text-xs font-mono text-neutral-600 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <Compass className="w-3.5 h-3.5 text-neutral-500" />
          <span>Coordinate Grid Precision: WGS84 Geodetic Standard</span>
        </div>
        <span className="text-[11px] text-neutral-500">
          Interactive map powered by OpenStreetMap Open Data
        </span>
      </div>
    </div>
  );
};
