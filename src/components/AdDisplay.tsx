/**
 * AdDisplay Component
 * 
 * Re-routed to the in-page real external AdSlot component.
 * Application-generated fake modal popups, countdowns, and fake promotional cards have been removed.
 */

import React from 'react';
import { AdSlot } from './AdSlot';

interface AdDisplayProps {
  className?: string;
  variant?: 'banner' | 'modal' | 'inline';
  position?: 'top' | 'bottom';
  enabled?: boolean;
}

export const AdDisplay: React.FC<AdDisplayProps> = ({
  className = '',
  enabled = true,
}) => {
  // If explicitly disabled or if variant was a floating modal, do not show floating popups
  if (!enabled) {
    return null;
  }

  // Render purely as an in-page, contained ad slot
  return (
    <AdSlot
      label="SPONSORED"
      className={className}
      enabled={enabled}
    />
  );
};

export default AdDisplay;
