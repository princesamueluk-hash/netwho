import React, { useState } from 'react';
import {
  ArrowLeft,
  Copy,
  Check,
  Download,
  Share2,
  Printer,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Clock,
  AlertCircle,
  Hash,
} from 'lucide-react';
import { SeoManager } from '../SeoManager';

export interface ResultLayoutProps {
  toolName: string;
  toolSlug: string;
  resultId: string;
  resultTitle: string;
  resultSubtitle?: string;
  badgeLabel?: string;
  createdAt?: string;
  onNavigate: (path: string) => void;
  onGenerateAnother?: () => void;
  generateAnotherLabel?: string;
  onCopyAll?: () => string | void;
  jsonExportData?: any;
  jsonFileName?: string;
  notFound?: boolean;
  children?: React.ReactNode;
}

export const ResultLayout: React.FC<ResultLayoutProps> = ({
  toolName,
  toolSlug,
  resultId,
  resultTitle,
  resultSubtitle,
  badgeLabel = 'GENERATED RESULT',
  createdAt,
  onNavigate,
  onGenerateAnother,
  generateAnotherLabel = 'Generate Another',
  onCopyAll,
  jsonExportData,
  jsonFileName = 'netwho-result.json',
  notFound = false,
  children,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

  const handleCopy = () => {
    let textToCopy = '';
    if (onCopyAll) {
      const res = onCopyAll();
      if (typeof res === 'string') {
        textToCopy = res;
      }
    } else if (jsonExportData) {
      textToCopy = JSON.stringify(jsonExportData, null, 2);
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadJson = () => {
    if (!jsonExportData) return;
    const blob = new Blob([JSON.stringify(jsonExportData, null, 2)], {
      type: 'application/json;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = jsonFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${resultTitle} | NETWHO`,
          text: `NETWHO Result: ${resultTitle}`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (notFound) {
    return (
      <div className="w-full max-w-4xl mx-auto py-12 space-y-6">
        <SeoManager
          title={`Result Not Found | ${toolName} – NETWHO`}
          description={`The requested ${toolName} result could not be retrieved or has expired.`}
          canonicalPath={`${toolSlug}/result/${resultId}`}
        />

        <div className="bg-white border-2 border-black p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 bg-neutral-100 border-2 border-black mx-auto flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-neutral-700" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
              Session Notice
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Result Not Found or Expired
            </h1>
            <p className="text-sm text-neutral-700 max-w-lg mx-auto">
              The result for ID <code className="font-mono bg-neutral-100 px-2 py-0.5 border border-neutral-300">{resultId}</code> is no longer cached in memory or has expired.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate(toolSlug)}
              className="px-6 py-3.5 bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to {toolName}</span>
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="px-6 py-3.5 bg-neutral-100 border-2 border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              All Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="netwho-result-workspace" className="w-full max-w-5xl mx-auto space-y-6">
      <SeoManager
        title={`${resultTitle} | ${toolName} Result – NETWHO`}
        description={`${resultTitle} – Dedicated focused intelligence result workspace generated by NETWHO ${toolName}.`}
        canonicalPath={`${toolSlug}/result/${resultId}`}
      />

      {/* Top Workspace Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border-2 border-black p-4">
        {/* Back Link */}
        <button
          id="result-back-to-tool-btn"
          onClick={() => onNavigate(toolSlug)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-black hover:underline cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to {toolName}</span>
        </button>

        {/* Telemetry Metadata */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[11px] text-neutral-600">
          <span className="flex items-center gap-1 bg-neutral-100 px-2 py-1 border border-neutral-300">
            <Hash className="w-3 h-3 text-neutral-500" />
            <strong className="text-black">{resultId}</strong>
          </span>
          <span className="hidden sm:flex items-center gap-1 bg-neutral-100 px-2 py-1 border border-neutral-300">
            <Clock className="w-3 h-3 text-neutral-500" />
            <span>{formattedDate}</span>
          </span>
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-300 font-bold">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>VERIFIED</span>
          </span>
        </div>
      </div>

      {/* Main Result Workspace Header Card */}
      <div className="bg-white border-2 border-black p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-neutral-200 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                {badgeLabel}
              </span>
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase">
                {toolName} Workspace
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight uppercase">
              {resultTitle}
            </h1>
            {resultSubtitle && (
              <p className="text-sm text-neutral-600 font-medium">{resultSubtitle}</p>
            )}
          </div>

          {/* Core Result Actions Toolbar */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onGenerateAnother && (
              <button
                id="result-generate-another-btn"
                onClick={onGenerateAnother}
                className="px-4 py-2.5 bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{generateAnotherLabel}</span>
              </button>
            )}

            {onCopyAll && (
              <button
                id="result-copy-btn"
                onClick={handleCopy}
                className="px-4 py-2.5 bg-neutral-100 border-2 border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
                title="Copy Result Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            )}

            {jsonExportData && (
              <button
                id="result-export-json-btn"
                onClick={handleDownloadJson}
                className="p-2.5 bg-white border-2 border-black text-black hover:bg-neutral-100 transition-colors cursor-pointer"
                title="Download JSON Payload"
              >
                <Download className="w-4 h-4" />
              </button>
            )}

            <button
              id="result-share-btn"
              onClick={handleShare}
              className="p-2.5 bg-white border-2 border-black text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Share Result"
            >
              {shareFeedback ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              id="result-print-btn"
              onClick={handlePrint}
              className="hidden sm:inline-flex p-2.5 bg-white border-2 border-black text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dedicated Focused Result Content (No Unrelated Tools or Generic Dashboards) */}
        <div id="focused-result-content" className="w-full">
          {children}
        </div>
      </div>

      {/* Bottom Action Footer for Fast Iteration */}
      <div className="bg-neutral-50 border-2 border-black p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black">
            Focused Result Mode
          </span>
          <p className="text-xs text-neutral-600">
            This workspace displays only data resolved for this execution. Return to {toolName} to refine parameters.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate(toolSlug)}
            className="px-4 py-2 bg-white border-2 border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 cursor-pointer"
          >
            ← Back to Tool
          </button>
          {onGenerateAnother && (
            <button
              onClick={onGenerateAnother}
              className="px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
            >
              {generateAnotherLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
