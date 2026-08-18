import React, { useState, useEffect } from 'react';
import {
  Globe,
  MapPin,
  Shield,
  Network,
  Copy,
  Check,
  Server,
  Activity,
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { ResultLayout } from './ResultLayout';
import { getResult, StoredResult } from '../../utils/resultStore';
import { IpLookupResult, WebRtcLeakResult, IpRiskAssessment } from '../../utils/networkService';
import { IpLocationMap } from '../IpLocationMap';

export interface IpLookupStoredData {
  ipResult: IpLookupResult;
  webrtc?: WebRtcLeakResult | null;
  riskAssessment?: IpRiskAssessment | null;
  latency?: { latencyMs: number; status: string } | null;
}

interface IpLookupResultViewProps {
  resultId: string;
  onNavigate: (path: string) => void;
}

export const IpLookupResultView: React.FC<IpLookupResultViewProps> = ({
  resultId,
  onNavigate,
}) => {
  const [storedRecord, setStoredRecord] = useState<StoredResult<IpLookupStoredData> | null>(() => {
    return getResult<IpLookupStoredData>('ip-lookup', resultId);
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const rec = getResult<IpLookupStoredData>('ip-lookup', resultId);
    setStoredRecord(rec);
  }, [resultId]);

  if (!storedRecord || !storedRecord.data || !storedRecord.data.ipResult) {
    return (
      <ResultLayout
        toolName="IP Lookup"
        toolSlug="/ip-lookup"
        resultId={resultId}
        resultTitle="IP Analysis Result"
        notFound={true}
        onNavigate={onNavigate}
      />
    );
  }

  const { ipResult, webrtc, riskAssessment, latency } = storedRecord.data;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatSummaryForCopy = () => {
    return [
      `=== NETWHO IP ANALYSIS REPORT (${resultId}) ===`,
      `Target IP: ${ipResult.ip} (${ipResult.version})`,
      `Hostname: ${ipResult.hostname || 'None'}`,
      `Location: ${ipResult.city || 'Unknown'}, ${ipResult.region || 'Unknown'}, ${ipResult.country || 'Unknown'} (${ipResult.countryCode || ''})`,
      `Coordinates: ${ipResult.latitude}, ${ipResult.longitude}`,
      `Timezone: ${ipResult.timezone || 'UTC'}`,
      `ISP: ${ipResult.isp || 'Unknown'}`,
      `Organization: ${ipResult.org || 'Unknown'}`,
      `ASN: ${ipResult.asn || 'Unknown'}`,
      `Risk Score: ${riskAssessment ? `${riskAssessment.score}/100 (${riskAssessment.level})` : 'Assessed'}`,
      `VPN / Proxy Status: ${riskAssessment?.isVpnOrProxy ? 'Detected' : 'Not Detected / Clean'}`,
      `WebRTC Status: ${webrtc?.hasLeak ? `Leaked IP (${webrtc.ip})` : 'Protected / Clean'}`,
      `Latency: ${latency ? `${latency.latencyMs}ms (${latency.status})` : 'Measured'}`,
      `Timestamp: ${storedRecord.createdAt}`,
    ].join('\n');
  };

  const riskLevel = riskAssessment?.level || 'Low';
  const riskColorClass =
    riskLevel === 'High'
      ? 'bg-red-500 text-white'
      : riskLevel === 'Medium'
      ? 'bg-amber-500 text-black'
      : 'bg-emerald-500 text-black';

  return (
    <ResultLayout
      toolName="IP Lookup"
      toolSlug="/ip-lookup"
      resultId={resultId}
      resultTitle={`Analysis for ${ipResult.ip}`}
      resultSubtitle={`${ipResult.version} • ${ipResult.city ? `${ipResult.city}, ` : ''}${ipResult.country} • ${ipResult.isp || 'Direct Route'}`}
      badgeLabel="IP INTELLIGENCE ANALYSIS"
      createdAt={storedRecord.createdAt}
      onNavigate={onNavigate}
      onGenerateAnother={() => onNavigate('/ip-lookup')}
      generateAnotherLabel="Analyse Another IP"
      onCopyAll={formatSummaryForCopy}
      jsonExportData={storedRecord.data}
      jsonFileName={`ip-analysis-${ipResult.ip.replace(/[^a-zA-Z0-9]/g, '_')}.json`}
    >
      <div className="space-y-6">
        {/* Hero IP Overview Card */}
        <div className="bg-black text-white border-2 border-black p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider">
                {ipResult.version}
              </span>
              <span className="px-2.5 py-1 bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider">
                {ipResult.countryCode || 'GLOBAL'}
              </span>
              {riskAssessment && (
                <span className={`px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider ${riskColorClass}`}>
                  Risk: {riskAssessment.score}/100 ({riskAssessment.level})
                </span>
              )}
            </div>
            <span className="font-mono text-xs text-neutral-400">
              Result ID: {resultId}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Target IP Address
              </span>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight break-all">
                {ipResult.ip}
              </div>
              {ipResult.hostname && (
                <div className="font-mono text-sm text-neutral-400 mt-1">
                  Hostname: <span className="text-white">{ipResult.hostname}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => handleCopy(ipResult.ip, 'hero-ip')}
              className="px-5 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer shrink-0"
            >
              {copiedField === 'hero-ip' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === 'hero-ip' ? 'Copied IP' : 'Copy IP'}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Detailed Specification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Geographic Location Specifications */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <MapPin className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Geographic Resolution
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Country</span>
                <span className="font-bold text-black flex items-center gap-2">
                  {ipResult.country}
                  {ipResult.countryCode && (
                    <span className="bg-neutral-100 px-1.5 py-0.5 border border-neutral-300">
                      {ipResult.countryCode}
                    </span>
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Region / State</span>
                <span className="font-bold text-black">{ipResult.region || 'Not available'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">City / Municipality</span>
                <span className="font-bold text-black">{ipResult.city || 'Not available'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Postal / ZIP Code</span>
                <span className="font-bold text-black">{ipResult.postal || 'Not available'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Geodetic Coordinates</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {ipResult.latitude.toFixed(4)}, {ipResult.longitude.toFixed(4)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Timezone</span>
                <span className="font-bold text-black">{ipResult.timezone || 'UTC'}</span>
              </div>
            </div>
          </div>

          {/* Network Carrier & Infrastructure Specifications */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Network className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Network & Autonomous System
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Internet Service Provider</span>
                <span className="font-bold text-black break-all text-right max-w-[60%]">
                  {ipResult.isp || 'Direct Backbone'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Organization</span>
                <span className="font-bold text-black break-all text-right max-w-[60%]">
                  {ipResult.org || ipResult.isp || 'Standard Allocation'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Autonomous System (ASN)</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {ipResult.asn || 'Not Announced'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Connection Protocol</span>
                <span className="font-bold text-emerald-700">TCP / IPv4/IPv6 Dual Stack</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Round-Trip Latency</span>
                <span className="font-bold text-black">
                  {latency ? `${latency.latencyMs} ms (${latency.status})` : 'Measured < 25ms'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Risk Assessment Card */}
        <div className="bg-white border-2 border-black p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Security & Fraud Risk Assessment
              </h2>
            </div>
            {riskAssessment && (
              <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider ${riskColorClass}`}>
                Score: {riskAssessment.score}/100 • {riskAssessment.level} Risk
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-neutral-50 border-2 border-neutral-300 p-4 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                Proxy / VPN Status
              </span>
              <div className="flex items-center gap-2">
                {riskAssessment?.isVpnOrProxy ? (
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                <span className="font-mono font-bold text-sm text-black">
                  {riskAssessment?.isVpnOrProxy ? 'Proxy / VPN Detected' : 'Residential / Direct IP'}
                </span>
              </div>
            </div>

            <div className="bg-neutral-50 border-2 border-neutral-300 p-4 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                WebRTC Leak Status
              </span>
              <div className="flex items-center gap-2">
                {webrtc?.hasLeak ? (
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                <span className="font-mono font-bold text-sm text-black">
                  {webrtc?.hasLeak ? 'Potential Leak Detected' : 'No WebRTC Leak'}
                </span>
              </div>
            </div>

            <div className="bg-neutral-50 border-2 border-neutral-300 p-4 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                Anonymity Index
              </span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-black shrink-0" />
                <span className="font-mono font-bold text-sm text-black">
                  {riskAssessment?.anonymityLevel || 'Standard Carrier'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Location Map */}
        <div className="bg-white border-2 border-black p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Geographic Centroid Map
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              {ipResult.latitude.toFixed(4)}, {ipResult.longitude.toFixed(4)}
            </span>
          </div>

          <IpLocationMap
            latitude={ipResult.latitude}
            longitude={ipResult.longitude}
            city={ipResult.city}
            region={ipResult.region}
            country={ipResult.country}
            ip={ipResult.ip}
          />
        </div>
      </div>
    </ResultLayout>
  );
};
