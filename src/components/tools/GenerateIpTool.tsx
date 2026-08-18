import React, { useState } from 'react';
import {
  Sparkles,
  RefreshCw,
  Globe,
  Network,
  Shield,
  Layers,
  ArrowRight,
  Terminal,
  Server,
  Cpu,
  Check,
  Search,
} from 'lucide-react';
import { saveResult } from '../../utils/resultStore';
import { GeneratedIpItem, GeneratedIpBatchData } from '../results/GenerateIpResultView';

interface GenerateIpToolProps {
  onNavigate?: (path: string) => void;
}

const REGION_POOLS = [
  { region: 'United Kingdom (London)', country: 'United Kingdom', flag: '🇬🇧', asn: 'AS2856', isp: 'BT Group plc', prefix: '51.140.' },
  { region: 'United Kingdom (Manchester)', country: 'United Kingdom', flag: '🇬🇧', asn: 'AS5089', isp: 'Virgin Media UK', prefix: '82.132.' },
  { region: 'United Kingdom (Edinburgh)', country: 'United Kingdom', flag: '🇬🇧', asn: 'AS13037', isp: 'Zen Internet Ltd', prefix: '185.73.' },
  { region: 'United States (East / NY)', country: 'United States', flag: '🇺🇸', asn: 'AS7018', isp: 'AT&T Services', prefix: '12.180.' },
  { region: 'United States (West / CA)', country: 'United States', flag: '🇺🇸', asn: 'AS15169', isp: 'Google Cloud LLC', prefix: '35.247.' },
  { region: 'Germany (Frankfurt)', country: 'Germany', flag: '🇩🇪', asn: 'AS3320', isp: 'Deutsche Telekom AG', prefix: '80.187.' },
  { region: 'Ireland (Dublin)', country: 'Ireland', flag: '🇮🇪', asn: 'AS16509', isp: 'Amazon Data Services', prefix: '54.246.' },
  { region: 'Japan (Tokyo)', country: 'Japan', flag: '🇯🇵', asn: 'AS2514', isp: 'NTT Communications', prefix: '153.120.' },
  { region: 'Singapore', country: 'Singapore', flag: '🇸🇬', asn: 'AS4657', isp: 'StarHub Ltd', prefix: '116.14.' },
];

export const GenerateIpTool: React.FC<GenerateIpToolProps> = ({ onNavigate }) => {
  const [addressVersion, setAddressVersion] = useState<'IPv4' | 'IPv6'>('IPv4');
  const [addressCategory, setAddressCategory] = useState<'public' | 'private' | 'carrier' | 'all'>('public');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [batchCount, setBatchCount] = useState<number>(1);
  const [cidrPrefix, setCidrPrefix] = useState<number>(24);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'generator' | 'cidr-calculator'>('generator');

  // CIDR Calculator State
  const [calcBaseIp, setCalcBaseIp] = useState<string>('192.168.1.0');
  const [calcPrefix, setCalcPrefix] = useState<number>(24);

  const ipv4ToBinary = (octets: number[]) => {
    return octets.map((o) => o.toString(2).padStart(8, '0')).join('.');
  };

  const getSubnetMaskFromPrefix = (prefix: number): string => {
    const mask = [];
    for (let i = 0; i < 4; i++) {
      const n = Math.min(prefix, 8);
      mask.push(256 - Math.pow(2, 8 - n));
      prefix -= n;
    }
    return mask.join('.');
  };

  const generateSingleIp = (): GeneratedIpItem => {
    const timestamp = new Date().toISOString();
    const id = `GEN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    if (addressVersion === 'IPv6') {
      const randomHexGroup = () => Math.floor(Math.random() * 0x10000).toString(16).padStart(4, '0');
      const isDocumentation = addressCategory === 'private';
      const prefix = isDocumentation ? '2001:db8' : '2a00:23c5';
      const ip = `${prefix}:${randomHexGroup()}:${randomHexGroup()}:${randomHexGroup()}:${randomHexGroup()}:${randomHexGroup()}`;

      return {
        id,
        ip,
        version: 'IPv6',
        type: isDocumentation ? 'Documentation' : 'Public',
        classType: 'Global Unicast',
        cidr: '/64',
        subnetMask: 'ffff:ffff:ffff:ffff::',
        simulatedRegion: 'Global Anycast',
        simulatedCountry: 'United Kingdom',
        simulatedAsn: 'AS2856',
        simulatedIsp: 'BT IPv6 Core Routing',
        reversePtr: `${ip.split(':').reverse().join('.')}.ip6.arpa`,
        binary: '0010101000000000.0010001111000101...',
        decimal: '3.4028236692e+38',
        timestamp,
      };
    }

    // IPv4 Generation Logic
    let octet1 = 0;
    let octet2 = 0;
    let octet3 = 0;
    let octet4 = 0;
    let type: GeneratedIpItem['type'] = 'Public';
    let classType = 'Class A';
    let reg = REGION_POOLS[Math.floor(Math.random() * REGION_POOLS.length)];

    if (selectedRegion !== 'all') {
      const found = REGION_POOLS.find((r) => r.region === selectedRegion);
      if (found) reg = found;
    }

    if (addressCategory === 'private') {
      type = 'Private (RFC 1918)';
      const privatePool = Math.floor(Math.random() * 3);
      if (privatePool === 0) {
        octet1 = 10;
        octet2 = Math.floor(Math.random() * 256);
        octet3 = Math.floor(Math.random() * 256);
        octet4 = Math.floor(Math.random() * 254) + 1;
        classType = 'Class A Private (10.0.0.0/8)';
      } else if (privatePool === 1) {
        octet1 = 172;
        octet2 = Math.floor(Math.random() * 16) + 16;
        octet3 = Math.floor(Math.random() * 256);
        octet4 = Math.floor(Math.random() * 254) + 1;
        classType = 'Class B Private (172.16.0.0/12)';
      } else {
        octet1 = 192;
        octet2 = 168;
        octet3 = Math.floor(Math.random() * 256);
        octet4 = Math.floor(Math.random() * 254) + 1;
        classType = 'Class C Private (192.168.0.0/16)';
      }
      reg = { region: 'Local Area Network', country: 'Private / RFC1918', flag: '🔒', asn: 'N/A', isp: 'Private Intranet', prefix: '' };
    } else if (addressCategory === 'carrier') {
      type = 'Carrier NAT (RFC 6598)';
      octet1 = 100;
      octet2 = Math.floor(Math.random() * 64) + 64;
      octet3 = Math.floor(Math.random() * 256);
      octet4 = Math.floor(Math.random() * 254) + 1;
      classType = 'Shared Address Space (100.64.0.0/10)';
      reg = { region: 'Carrier-Grade CGNAT', country: 'ISP Infrastructure', flag: '📡', asn: 'AS-CGNAT', isp: 'ISP Middlebox Pool', prefix: '' };
    } else {
      type = 'Public';
      const parts = reg.prefix.split('.').filter(Boolean);
      octet1 = parseInt(parts[0], 10);
      octet2 = parseInt(parts[1], 10);
      octet3 = Math.floor(Math.random() * 254) + 1;
      octet4 = Math.floor(Math.random() * 254) + 1;

      if (octet1 <= 126) classType = 'Class A (Public)';
      else if (octet1 <= 191) classType = 'Class B (Public)';
      else classType = 'Class C (Public)';
    }

    const ip = `${octet1}.${octet2}.${octet3}.${octet4}`;
    const decimal = (octet1 * 16777216) + (octet2 * 65536) + (octet3 * 256) + octet4;
    const binary = ipv4ToBinary([octet1, octet2, octet3, octet4]);

    return {
      id,
      ip,
      version: 'IPv4',
      type,
      classType,
      cidr: `/${cidrPrefix}`,
      subnetMask: getSubnetMaskFromPrefix(cidrPrefix),
      simulatedRegion: reg.region,
      simulatedCountry: reg.country,
      simulatedAsn: reg.asn,
      simulatedIsp: reg.isp,
      reversePtr: `${octet4}.${octet3}.${octet2}.${octet1}.in-addr.arpa`,
      binary,
      decimal,
      timestamp,
    };
  };

  const handleExecuteGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);

    // Natural processing animation
    setTimeout(() => {
      const items: GeneratedIpItem[] = [];
      for (let i = 0; i < batchCount; i++) {
        items.push(generateSingleIp());
      }

      const payload: GeneratedIpBatchData = {
        items,
        selectedIndex: 0,
        params: {
          addressVersion,
          addressCategory,
          selectedRegion,
          batchCount,
          cidrPrefix,
        },
      };

      const resultId = items[0].id;
      saveResult('generate-ip', '/generate-ip', 'Generate IP', payload, resultId);

      setIsGenerating(false);

      if (onNavigate) {
        onNavigate(`/generate-ip/result/${resultId}`);
      } else {
        window.location.hash = `#/generate-ip/result/${resultId}`;
      }
    }, 450);
  };

  return (
    <div id="generate-ip-tool-container" className="space-y-8">
      {/* Sub-Tabs: Generator vs CIDR Calculator */}
      <div className="flex border-b-2 border-black gap-2">
        <button
          onClick={() => setActiveTab('generator')}
          className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-t-2 border-l-2 border-r-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'generator'
              ? 'bg-black text-white border-black z-10'
              : 'bg-neutral-100 text-black border-neutral-300 hover:bg-neutral-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>IP Address Generator</span>
        </button>

        <button
          onClick={() => setActiveTab('cidr-calculator')}
          className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-t-2 border-l-2 border-r-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'cidr-calculator'
              ? 'bg-black text-white border-black z-10'
              : 'bg-neutral-100 text-black border-neutral-300 hover:bg-neutral-200'
          }`}
        >
          <Network className="w-4 h-4" />
          <span>Subnet & CIDR Inspector</span>
        </button>
      </div>

      {activeTab === 'generator' ? (
        <div className="space-y-8">
          {/* Generation Configuration Controls Panel */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 space-y-6">
            <h2 className="text-base font-bold uppercase tracking-wider text-black border-b border-neutral-200 pb-3 flex items-center justify-between">
              <span>Configuration & Synthesis Parameters</span>
              <span className="text-xs font-mono font-normal text-neutral-500 lowercase">
                ready to generate
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Protocol Version */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Address Family
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAddressVersion('IPv4')}
                    className={`py-2.5 px-3 text-xs font-mono font-bold uppercase border-2 transition-colors cursor-pointer ${
                      addressVersion === 'IPv4'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-neutral-300 hover:border-black'
                    }`}
                  >
                    IPv4 (32-bit)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddressVersion('IPv6')}
                    className={`py-2.5 px-3 text-xs font-mono font-bold uppercase border-2 transition-colors cursor-pointer ${
                      addressVersion === 'IPv6'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-neutral-300 hover:border-black'
                    }`}
                  >
                    IPv6 (128-bit)
                  </button>
                </div>
              </div>

              {/* Address Scope */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Network Scope
                </label>
                <select
                  value={addressCategory}
                  onChange={(e) => setAddressCategory(e.target.value as any)}
                  className="w-full py-2.5 px-3 border-2 border-black bg-white font-mono text-xs font-bold text-black focus:outline-none"
                >
                  <option value="public">Public Routable IP</option>
                  <option value="private">Private LAN (RFC 1918)</option>
                  <option value="carrier">Carrier-Grade NAT (RFC 6598)</option>
                  <option value="all">Random Mixed Pool</option>
                </select>
              </div>

              {/* Geographic Simulation */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Target Region / Origin
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  disabled={addressCategory === 'private' || addressCategory === 'carrier'}
                  className="w-full py-2.5 px-3 border-2 border-black bg-white font-mono text-xs font-bold text-black focus:outline-none disabled:opacity-50"
                >
                  <option value="all">Global Multi-Region (All)</option>
                  {REGION_POOLS.map((r) => (
                    <option key={r.region} value={r.region}>
                      {r.flag} {r.region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Batch Quantity */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                  Batch Output Count
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 5, 10, 25].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setBatchCount(cnt)}
                      className={`py-2 text-xs font-mono font-bold border-2 transition-colors cursor-pointer ${
                        batchCount === cnt
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-neutral-300 hover:border-black'
                      }`}
                    >
                      {cnt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CIDR Mask Prefix */}
            {addressVersion === 'IPv4' && (
              <div className="pt-2 border-t border-neutral-100 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold uppercase text-neutral-700">CIDR Subnet Prefix</span>
                  <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                    /{cidrPrefix} (Mask: {getSubnetMaskFromPrefix(cidrPrefix)})
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={cidrPrefix}
                  onChange={(e) => setCidrPrefix(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-neutral-200 appearance-none cursor-pointer accent-black"
                />
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200">
              <button
                id="generate-ip-action-btn"
                onClick={handleExecuteGenerate}
                disabled={isGenerating}
                className="px-8 py-4 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer flex items-center space-x-2 disabled:opacity-60"
              >
                {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{isGenerating ? 'Generating IP & Subnet...' : 'Generate IP Address'}</span>
              </button>

              <span className="text-xs font-mono text-neutral-500">
                Will open dedicated result page upon generation.
              </span>
            </div>
          </div>

          {isGenerating && (
            <div className="border-2 border-black bg-neutral-50 p-8 text-center space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-black" />
              <p className="font-mono text-sm font-bold uppercase tracking-wider text-black">
                Generating Synthesized IP Intelligence...
              </p>
              <p className="text-xs text-neutral-600">
                Computing CIDR prefixes, reverse PTR records, and routing telemetry.
              </p>
            </div>
          )}
        </div>
      ) : (
        /* CIDR Inspector Sub-Tab */
        <div className="bg-white border-2 border-black p-6 sm:p-8 space-y-6">
          <h2 className="text-base font-bold uppercase tracking-wider text-black border-b border-neutral-200 pb-3">
            Subnet & CIDR Mask Calculator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase mb-1 text-neutral-700">
                Base Network IP
              </label>
              <input
                type="text"
                value={calcBaseIp}
                onChange={(e) => setCalcBaseIp(e.target.value)}
                className="w-full py-2.5 px-3 border-2 border-black font-mono text-xs text-black"
                placeholder="192.168.1.0"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase mb-1 text-neutral-700">
                Prefix Length: /{calcPrefix}
              </label>
              <input
                type="number"
                min="1"
                max="32"
                value={calcPrefix}
                onChange={(e) => setCalcPrefix(parseInt(e.target.value, 10) || 24)}
                className="w-full py-2.5 px-3 border-2 border-black font-mono text-xs text-black"
              />
            </div>
          </div>

          <div className="bg-neutral-50 border-2 border-black p-4 space-y-2 font-mono text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500">Subnet Mask:</span>
              <span className="font-bold text-black">{getSubnetMaskFromPrefix(calcPrefix)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span className="text-neutral-500">Total Host Addresses:</span>
              <span className="font-bold text-black">{Math.pow(2, 32 - calcPrefix).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Usable Host Capacity:</span>
              <span className="font-bold text-emerald-700">
                {Math.max(0, Math.pow(2, 32 - calcPrefix) - 2).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
