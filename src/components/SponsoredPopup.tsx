import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface SponsoredPopupProps {
  /**
   * Whether the popup is eligible to open (after app readiness and delay)
   */
  isOpen: boolean;
  /**
   * Callback to close the popup
   */
  onClose: () => void;
  /**
   * Required external ad container ID
   */
  containerId?: string;
  /**
   * External ad script source URL
   */
  scriptSrc?: string;
  /**
   * Unique script element ID
   */
  scriptId?: string;
}

const DEFAULT_CONTAINER_ID = 'container-487b249ab83f6aa8203efe13fa4ee6d6';
const DEFAULT_SCRIPT_SRC = 'https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js';
const DEFAULT_SCRIPT_ID = 'external-ad-network-487b249ab83f6aa8203efe13fa4ee6d6';

// Global tracker to ensure the script is not injected multiple times
const injectedScripts = new Set<string>();

export const SponsoredPopup: React.FC<SponsoredPopupProps> = ({
  isOpen,
  onClose,
  containerId = DEFAULT_CONTAINER_ID,
  scriptSrc = DEFAULT_SCRIPT_SRC,
  scriptId = DEFAULT_SCRIPT_ID,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [adScriptLoaded, setAdScriptLoaded] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Inject external ad script once the popup opens and container is in the DOM
  useEffect(() => {
    if (!isOpen) return;

    if (document.getElementById(scriptId)) {
      setAdScriptLoaded(true);
      return;
    }

    if (injectedScripts.has(scriptId)) {
      return;
    }

    const checkContainerAndInject = () => {
      const containerEl = document.getElementById(containerId);
      if (!containerEl) {
        setTimeout(checkContainerAndInject, 150);
        return;
      }

      try {
        injectedScripts.add(scriptId);
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptSrc;
        script.async = true;
        script.setAttribute('data-cfasync', 'false');

        script.onload = () => {
          setAdScriptLoaded(true);
        };

        script.onerror = () => {
          console.warn('[SponsoredPopup] External ad script failed to load');
          injectedScripts.delete(scriptId);
        };

        // Insert right adjacent to the container for invoke.js
        if (containerEl.parentNode) {
          containerEl.parentNode.insertBefore(script, containerEl);
        } else {
          document.head.appendChild(script);
        }
      } catch (err) {
        console.error('[SponsoredPopup] Error injecting ad script:', err);
        injectedScripts.delete(scriptId);
      }
    };

    checkContainerAndInject();
  }, [isOpen, containerId, scriptSrc, scriptId]);

  if (!isOpen) {
    return null;
  }

  const handleSafeClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sponsored-popup-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 select-none animate-in fade-in"
      onClick={handleBackdropClick}
    >
      {/* Centered Sponsored Modal Card */}
      <div
        className="relative w-full max-w-lg sm:max-w-xl bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 shadow-2xl rounded-sm overflow-hidden flex flex-col transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: SPONSORED + Close Button */}
        <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2.5 border-b border-neutral-300 dark:border-neutral-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              id="sponsored-popup-title"
              className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-800 dark:text-neutral-200"
            >
              SPONSORED
            </span>
            <span className="font-mono text-[9px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider hidden sm:inline">
              External Partner
            </span>
          </div>

          <button
            type="button"
            onClick={handleSafeClose}
            aria-label="Close Advertisement"
            className="p-1.5 rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real External Advertisement Mount Point */}
        <div className="p-3 sm:p-6 flex items-center justify-center min-h-[160px] sm:min-h-[260px] max-h-[75vh] overflow-y-auto bg-white dark:bg-neutral-950">
          <div
            id={containerId}
            ref={containerRef}
            className="w-full flex items-center justify-center overflow-hidden min-h-[120px]"
          >
            {/* Real external ad script renders its content directly inside this container */}
          </div>
        </div>

        {/* Footer: Safe Dismiss Action */}
        <div className="bg-neutral-50 dark:bg-neutral-900/90 px-4 py-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-[10px] text-neutral-400 font-mono">
            Advertisement will close safely
          </span>
          <button
            type="button"
            onClick={handleSafeClose}
            className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:underline cursor-pointer py-1 px-2"
          >
            Close ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsoredPopup;
