import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  Globe,
  Network,
  Shield,
  Layers,
  Terminal,
  Server,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  List,
} from 'lucide-react';
import { ResultLayout } from './ResultLayout';
import { getResult, StoredResult } from '../../utils/resultStore';

export interface GeneratedIpItem {
  id: string;
  ip: string;
  version: 'IPv4' | 'IPv6';
  type: string;
  classType: string;
  cidr: string;
  subnetMask: string;
  simulatedRegion: string;
  simulatedCountry: string;
  simulatedAsn: string;
  simulatedIsp: string;
  reversePtr: string;
  binary: string;
  decimal: number | string;
  timestamp: string;
}

export interface GeneratedIpBatchData {
  items: GeneratedIpItem[];
  selectedIndex?: number;
  params: {
    addressVersion: string;
    addressCategory: string;
    selectedRegion: string;
    batchCount: number;
    cidrPrefix: number;
  };
}

interface GenerateIpResultViewProps {
  resultId: string;
  onNavigate: (path: string) => void;
}

export const GenerateIpResultView: React.FC<GenerateIpResultViewProps> = ({
  resultId,
  onNavigate,
}) => {
  const [storedRecord, setStoredRecord] = useState<StoredResult<GeneratedIpBatchData> | null>(() => {
    return getResult<GeneratedIpBatchData>('generate-ip', resultId);
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const rec = getResult<GeneratedIpBatchData>('generate-ip', resultId);
    setStoredRecord(rec);
  }, [resultId]);

  if (!storedRecord || !storedRecord.data || !storedRecord.data.items || storedRecord.data.items.length === 0) {
    return (
      <ResultLayout
        toolName="Generate IP"
        toolSlug="/generate-ip"
        resultId={resultId}
        resultTitle="Generated IP Result"
        notFound={true}
        onNavigate={onNavigate}
      />
    );
  }

  const items = storedRecord.data.items;
  const currentItem = items[selectedIndex] || items[0];

  const handleCopyText = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatAllForCopy = () => {
    return [
      `=== NETWHO GENERATED IP RESULT (${currentItem.id}) ===`,
      `IP Address: ${currentItem.ip} (${currentItem.version})`,
      `Category / Type: ${currentItem.type}`,
      `Address Class: ${currentItem.classType}`,
      `CIDR Notation: ${currentItem.cidr}`,
      `Subnet Mask: ${currentItem.subnetMask}`,
      `Simulated ISP: ${currentItem.simulatedIsp}`,
      `Simulated ASN: ${currentItem.simulatedAsn}`,
      `Geographic Region: ${currentItem.simulatedRegion}, ${currentItem.simulatedCountry}`,
      `Reverse PTR DNS: ${currentItem.reversePtr}`,
      `Binary Encoding: ${currentItem.binary}`,
      `Decimal Value: ${currentItem.decimal}`,
      `Timestamp: ${currentItem.timestamp}`,
    ].join('\n');
  };

  return (
    <ResultLayout
      toolName="Generate IP"
      toolSlug="/generate-ip"
      resultId={resultId}
      resultTitle={items.length === 1 ? currentItem.ip : `${items.length} Generated IP Addresses`}
      resultSubtitle={`${currentItem.version} • ${currentItem.type} • ${currentItem.simulatedRegion}`}
      badgeLabel="GENERATED IP INTELLIGENCE"
      createdAt={storedRecord.createdAt}
      onNavigate={onNavigate}
      onGenerateAnother={() => onNavigate('/generate-ip')}
      generateAnotherLabel="Generate Another IP"
      onCopyAll={formatAllForCopy}
      jsonExportData={storedRecord.data}
      jsonFileName={`generated-ip-${resultId.toLowerCase()}.json`}
    >
      <div className="space-y-6">
        {/* Batch Selector if multiple IPs were generated */}
        {items.length > 1 && (
          <div className="bg-neutral-50 border-2 border-black p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2">
                <List className="w-4 h-4" />
                Batch Generated List ({items.length} IPs)
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                Click an IP to inspect its details
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-2.5 text-left border-2 font-mono text-xs transition-colors flex items-center justify-between ${
                    selectedIndex === idx
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white text-black border-neutral-300 hover:border-black'
                  }`}
                >
                  <span className="font-bold">{item.ip}</span>
                  <span className="text-[10px] opacity-75">{item.cidr}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Hero Generated IP Display Banner */}
        <div className="bg-black text-white border-2 border-black p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider">
                {currentItem.version}
              </span>
              <span className="px-2.5 py-1 bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider">
                {currentItem.type}
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              ID: {currentItem.id}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Generated IP Address
              </span>
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight break-all">
                {currentItem.ip}
              </div>
            </div>

            <button
              onClick={() => handleCopyText(currentItem.ip, 'hero-ip')}
              className="px-5 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer shrink-0"
            >
              {copiedField === 'hero-ip' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === 'hero-ip' ? 'Copied IP' : 'Copy IP Address'}</span>
            </button>
          </div>
        </div>

        {/* Structured Technical & Routing Specification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Network & Subnet Topology */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Network className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Network & Subnet Topology
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Address Class</span>
                <span className="font-bold text-black">{currentItem.classType}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">CIDR Block</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {currentItem.cidr}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Subnet Mask</span>
                <span className="font-bold text-black">{currentItem.subnetMask}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Address Scope</span>
                <span className="font-bold text-emerald-700">{currentItem.type}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">Decimal (Base 10)</span>
                <span className="font-bold text-black break-all">{currentItem.decimal}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Routing & Carrier Telemetry */}
          <div className="bg-white border-2 border-black p-6 space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-3">
              <Globe className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Routing & Carrier Telemetry
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Simulated Region</span>
                <span className="font-bold text-black">{currentItem.simulatedRegion}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Country</span>
                <span className="font-bold text-black">{currentItem.simulatedCountry}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Autonomous System</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 border border-neutral-300">
                  {currentItem.simulatedAsn}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                <span className="text-neutral-500 uppercase">Simulated ISP</span>
                <span className="font-bold text-black">{currentItem.simulatedIsp}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-500 uppercase">PTR Reverse DNS</span>
                <span className="font-bold text-neutral-800 break-all">{currentItem.reversePtr}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Binary Bitstream Representation */}
        <div className="bg-white border-2 border-black p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-black" />
              <h2 className="text-base font-black text-black uppercase tracking-wide">
                Bitwise Binary Encoding (Base 2)
              </h2>
            </div>
            <button
              onClick={() => handleCopyText(currentItem.binary, 'binary')}
              className="text-xs font-mono font-bold uppercase text-neutral-700 hover:text-black hover:underline cursor-pointer flex items-center gap-1"
            >
              {copiedField === 'binary' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === 'binary' ? 'Copied' : 'Copy Bits'}</span>
            </button>
          </div>

          <div className="p-4 bg-neutral-900 text-emerald-400 font-mono text-xs sm:text-sm tracking-widest break-all border border-black">
            {currentItem.binary}
          </div>
          <p className="text-xs text-neutral-500">
            Raw bitstream formatted into octet boundaries for network stack verification and CIDR bitmask calculations.
          </p>
        </div>

        {/* Quick Diagnostic Actions */}
        <div className="bg-neutral-100 border-2 border-black p-6 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black block">
            Run Secondary Diagnostics on Generated IP
          </span>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate(`/ip-lookup`)}
              className="px-4 py-2.5 bg-white border-2 border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Test in IP Lookup Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate(`/vpn-detection`)}
              className="px-4 py-2.5 bg-white border-2 border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Run VPN & Proxy Check</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate(`/dns-lookup`)}
              className="px-4 py-2.5 bg-white border-2 border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Query DNS Records</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </ResultLayout>
  );
};
