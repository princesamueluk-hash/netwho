/**
 * NETWHO Advertisement Manager
 * Centralized system for managing external advertisement readiness and state
 */

import { EXTERNAL_AD_UNITS, type ExternalAdUnit } from '../data/adsRegistry';

export type AdState = 'IDLE' | 'AD_ACTIVE' | 'COOLDOWN';

export interface AdConfig {
  minimumViewTime: number;
  cooldownAfterDismiss: number;
  maximumActiveAds: number;
}

const DEFAULT_CONFIG: AdConfig = {
  minimumViewTime: 5000,
  cooldownAfterDismiss: 20000,
  maximumActiveAds: 1,
};

export class AdManager {
  private state: AdState = 'IDLE';
  private config: AdConfig;
  private stateChangeListeners: ((state: AdState) => void)[] = [];
  private adUnits: ExternalAdUnit[] = [...EXTERNAL_AD_UNITS];

  constructor(config: Partial<AdConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  private setState(newState: AdState): void {
    if (this.state !== newState) {
      this.state = newState;
      this.notifyStateChange();
    }
  }

  private notifyStateChange(): void {
    this.stateChangeListeners.forEach((listener) => listener(this.state));
  }

  onStateChange(listener: (state: AdState) => void): () => void {
    this.stateChangeListeners.push(listener);
    return () => {
      this.stateChangeListeners = this.stateChangeListeners.filter((l) => l !== listener);
    };
  }

  getState(): AdState {
    return this.state;
  }

  getAdUnits(): ExternalAdUnit[] {
    return this.adUnits;
  }

  canDisplayAd(): boolean {
    return this.state === 'IDLE';
  }

  isAdActive(): boolean {
    return this.state === 'AD_ACTIVE';
  }

  reset(): void {
    this.setState('IDLE');
  }

  // Backwards compatibility helpers
  getCurrentAd() {
    return null;
  }

  canDismissCurrentAd(): boolean {
    return true;
  }

  getTimeUntilDismissible(): number {
    return 0;
  }

  dismissAd(): void {
    this.setState('IDLE');
  }

  registerAds(_ads: any[]): void {
    // No-op for legacy fake ads
  }

  displayAd(_ad?: any): boolean {
    this.setState('AD_ACTIVE');
    return true;
  }

  displayNextEligibleAd(_pagePath: string): boolean {
    return false;
  }
}

export const adManager = new AdManager();
export default adManager;
