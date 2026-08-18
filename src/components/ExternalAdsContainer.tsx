/**
 * ExternalAdsContainer Component
 * 
 * Manages external advertisement network rendering within a dedicated in-page Sponsored container.
 * 
 * Features:
 * - Visually contained in-page ad unit
 * - Strictly no floating overlays or fixed position elements
 * - No fake ad fallback or placeholder cards
 * - Single script injection tracking
 */

import React from 'react';
import { AdSlot } from './AdSlot';

interface ExternalAdsContainerProps {
  placement?: 'global' | 'result' | 'content' | 'bottom';
  className?: string;
  enabled?: boolean;
}

export const ExternalAdsContainer: React.FC<ExternalAdsContainerProps> = ({
  placement = 'global',
  className = '',
  enabled = true,
}) => {
  if (!enabled) {
    return null;
  }

  return (
    <div
      id="external-ads-container-wrapper"
      data-placement={placement}
      className={`w-full ${className}`}
    >
      <AdSlot
        containerId="container-487b249ab83f6aa8203efe13fa4ee6d6"
        scriptSrc="https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js"
        scriptId="external-ad-network-487b249ab83f6aa8203efe13fa4ee6d6"
        label="SPONSORED"
        enabled={enabled}
      />
    </div>
  );
};

export default ExternalAdsContainer;
