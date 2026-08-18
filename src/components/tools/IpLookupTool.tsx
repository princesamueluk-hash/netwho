import React, { useState } from 'react';
import {
  Search,
  RefreshCw,
  Globe,
  Shield,
  Activity,
  ArrowRight,
  Sparkles,
  Server,
  Zap,
} from 'lucide-react';
import { useIpResult } from '../../context/IpResultContext';
import { saveResult } from '../../utils/resultStore';
import { IpLookupStoredData } from '../results/IpLookupResultView';
import { fetchIpInfo, calculateIpRiskAssessment, measureLatency } from '../../utils/networkService';

interface IpLookupToolProps {
  onNavigate?: (path: string) => void;
}

const PRESET_IPS = [
  { ip: '8.8.8.8', label: 'Google DNS', country: 'US 🇺🇸' },
  { ip: '1.1.1.1', label: 'Cloudflare', country: 'US 🇺🇸' },
  { ip: '212.58.244.20', label: 'BBC London', country: 'GB 🇬🇧' },
  { ip: '139.130.4.5', label: 'Telstra Sydney', country: 'AU 🇦🇺' },
  { ip: '2001:4860:4860::8888', label: 'Google IPv6', country: 'Global 🌐' },
];

export const IpLookupTool: React.FC<IpLookupToolProps> = ({ onNavigate }) => {
  const { webrtc } = useIpResult();
  const [inputIp, setInputIp] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLookup = async (target?: string) => {
    if (isProcessing) return;
    const query = (target !== undefined ? target : inputIp).trim();

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      // 1. Fetch IP Info
      const ipResult = await fetchIpInfo(query || undefined);

      // 2. Risk and Latency evaluation
      const riskAssessment = calculateIpRiskAssessment(ipResult, webrtc);
      const latency = await measureLatency();

      // 3. Prepare payload & result ID
      const resultId = `IP-${ipResult.ip.replace(/[^a-zA-Z0-9]/g, '-').slice(0, 16)}`;
      const payload: IpLookupStoredData = {
        ipResult,
        webrtc,
        riskAssessment,
        latency,
      };

      saveResult('ip-lookup', '/ip-lookup', 'IP Lookup', payload, resultId);

      setIsProcessing(false);

      if (onNavigate) {
        onNavigate(`/ip-lookup/result/${resultId}`);
      } else {
        window.location.hash = `#/ip-lookup/result/${resultId}`;
      }
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage(err?.message || 'Failed to lookup IP information. Please check the address and try again.');
    }
  };

  return (
    <div id="ip-lookup-tool" className="space-y-8">
      {/* Search Input Bar */}
      <div className="bg-white border-2 border-black p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <label htmlFor="ip-lookup-search-input" className="block text-sm font-black uppercase tracking-wider text-black">
            Enter IPv4 or IPv6 Address
          </label>
          <p className="text-xs text-neutral-600">
            Query deep geolocation, Autonomous System (ASN), ISP infrastructure, reverse PTR, and security risk scores.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="ip-lookup-search-input"
              type="text"
              placeholder="e.g. 8.8.8.8, 1.1.1.1, or 2001:4860:4860::8888"
              value={inputIp}
              onChange={(e) => setInputIp(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLookup(inputIp)}
              className="w-full pl-11 pr-4 py-3.5 border-2 border-black font-mono text-sm sm:text-base text-black placeholder:text-neutral-500 focus:outline-none"
            />
          </div>

          <button
            id="ip-lookup-submit-btn"
            onClick={() => handleLookup(inputIp)}
            disabled={isProcessing}
            className="px-8 py-3.5 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center space-x-2 shrink-0 disabled:opacity-50"
          >
            {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            <span>{isProcessing ? 'Analysing IP...' : 'Analyse IP'}</span>
          </button>

          <button
            id="ip-lookup-detect-my-ip-btn"
            onClick={() => handleLookup('')}
            disabled={isProcessing}
            className="px-5 py-3.5 bg-neutral-100 border-2 border-black text-black font-bold text-xs uppercase hover:bg-neutral-200 transition-colors cursor-pointer shrink-0 disabled:opacity-60 flex items-center gap-1.5"
            title="Detect and analyse your active public IP"
          >
            <Zap className="w-3.5 h-3.5 text-black" />
            <span>Check My IP</span>
          </button>
        </div>

        {/* Preset Sample Quick-Pick Buttons */}
        <div className="pt-3 border-t border-neutral-200 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block">
            Or test with a preset public IP:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_IPS.map((preset) => (
              <button
                key={preset.ip}
                onClick={() => {
                  setInputIp(preset.ip);
                  handleLookup(preset.ip);
                }}
                disabled={isProcessing}
                className="px-3 py-1.5 bg-neutral-50 border border-neutral-300 hover:border-black font-mono text-xs text-black transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="font-bold">{preset.ip}</span>
                <span className="text-neutral-500 text-[10px]">({preset.label})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {isProcessing && (
        <div className="border-2 border-black bg-neutral-50 p-8 text-center space-y-3">
          <RefreshCw className="w-6 h-6 animate-spin mx-auto text-black" />
          <p className="font-mono text-sm font-bold uppercase tracking-wider text-black">
            Analysing IP & Resolving Geographic Intelligence...
          </p>
          <p className="text-xs text-neutral-600">
            Querying network routing registries, Autonomous System topology, and risk indicators.
          </p>
        </div>
      )}

      {errorMessage && !isProcessing && (
        <div className="p-4 bg-red-50 border-2 border-red-700 text-red-900 font-bold text-sm font-mono">
          {errorMessage}
        </div>
      )}

      {/* Feature Capabilities Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-black p-6 space-y-2">
          <Globe className="w-6 h-6 text-black" />
          <h2 className="font-black text-sm uppercase tracking-wide text-black">
            Geographic Accuracy
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Real-time resolution of Country, State/Province, City, Postal Code, and coordinates with OpenStreetMap rendering.
          </p>
        </div>

        <div className="bg-white border-2 border-black p-6 space-y-2">
          <Server className="w-6 h-6 text-black" />
          <h2 className="font-black text-sm uppercase tracking-wide text-black">
            Carrier & ASN Routing
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Autonomous System Numbers (ASN), ISP carrier identification, reverse PTR records, and connection dual-stack metrics.
          </p>
        </div>

        <div className="bg-white border-2 border-black p-6 space-y-2">
          <Shield className="w-6 h-6 text-black" />
          <h2 className="font-black text-sm uppercase tracking-wide text-black">
            Security & Risk Scoring
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Detect proxy, VPN, TOR nodes, WebRTC leaks, and calculate real-time fraud risk indices from 0 to 100.
          </p>
        </div>
      </div>
    </div>
  );
};
