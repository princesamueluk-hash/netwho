import React, { useEffect, useRef, useState } from 'react';

interface AdSlotProps {
  /**
   * Container ID required by the external ad network
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
  /**
   * Label shown above the ad container
   */
  label?: string;
  /**
   * Whether ads are allowed to load (after app readiness and post-load delay)
   */
  enabled?: boolean;
  /**
   * Optional custom CSS class
   */
  className?: string;
}

const DEFAULT_CONTAINER_ID = 'container-487b249ab83f6aa8203efe13fa4ee6d6';
const DEFAULT_SCRIPT_SRC = 'https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js';
const DEFAULT_SCRIPT_ID = 'external-ad-network-487b249ab83f6aa8203efe13fa4ee6d6';

// Global tracker to avoid duplicate script injection
const injectedScripts = new Set<string>();

export const AdSlot: React.FC<AdSlotProps> = ({
  containerId = DEFAULT_CONTAINER_ID,
  scriptSrc = DEFAULT_SCRIPT_SRC,
  scriptId = DEFAULT_SCRIPT_ID,
  label = 'SPONSORED',
  enabled = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Check if script is already in DOM
    if (document.getElementById(scriptId)) {
      setIsLoaded(true);
      return;
    }

    if (injectedScripts.has(scriptId)) {
      return;
    }

    const injectScript = () => {
      const containerEl = document.getElementById(containerId);
      if (!containerEl) {
        setTimeout(injectScript, 200);
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
          setIsLoaded(true);
        };

        script.onerror = () => {
          console.warn('[AdSlot] External advertisement script failed to load');
          injectedScripts.delete(scriptId);
        };

        // Insert right adjacent to container so invoke.js locates the container immediately
        if (containerEl.parentNode) {
          containerEl.parentNode.insertBefore(script, containerEl);
        } else {
          document.head.appendChild(script);
        }
      } catch (err) {
        console.error('[AdSlot] Error injecting advertisement script:', err);
        injectedScripts.delete(scriptId);
      }
    };

    injectScript();
  }, [enabled, containerId, scriptSrc, scriptId]);

  if (!enabled) {
    return null;
  }

  return (
    <section
      aria-label="Advertisement"
      className={`sponsored-ad-slot-wrapper w-full max-w-5xl mx-auto my-8 px-4 select-none ${className}`}
    >
      <div className="sponsored-ad-card border-2 border-neutral-300 bg-neutral-50/50 rounded-sm overflow-hidden transition-all">
        {/* Clear Sponsored Label Header */}
        <div className="bg-neutral-200/80 px-3 py-1.5 border-b border-neutral-300 flex items-center justify-between">
          <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-neutral-700">
            {label}
          </span>
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            External Partner
          </span>
        </div>

        {/* Dedicated In-Page Ad Container */}
        <div className="p-2 sm:p-4 flex items-center justify-center min-h-[140px] sm:min-h-[250px] bg-white relative overflow-hidden">
          <div
            id={containerId}
            ref={containerRef}
            className="w-full max-w-full flex items-center justify-center overflow-hidden"
            style={{
              maxHeight: '400px',
            }}
          >
            {/* Real external advertisement renders here directly */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSlot;
