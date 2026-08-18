/**
 * NETWHO Advertisement Registry
 * Configuration for real external advertisement networks
 * 
 * EXTERNAL AD NETWORK CONFIGURATION:
 * 
 * AD 1 - Container-Based Advertisement:
 * - Script: https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js
 * - Container ID: container-487b249ab83f6aa8203efe13fa4ee6d6
 * - Managed by: src/components/ExternalAdsContainer.tsx / AdSlot.tsx
 * - Placement: Dedicated in-page Sponsored container between content and footer
 * 
 * AD 2 - Script-Based Advertisement:
 * - Script: https://pl30885738.effectivecpmnetwork.com/50/b6/fc/50b6fc8dcb4d46f0e4ec4f7a48984c97.js
 * - Managed by: src/components/ScriptAdsManager.tsx
 * 
 * AD 3 - Script-Based Advertisement:
 * - Script: https://pl30885741.effectivecpmnetwork.com/d8/e7/66/d8e7667a985e60d3761ebb99b34e858b.js
 * - Managed by: src/components/ScriptAdsManager.tsx
 */

export interface ExternalAdUnit {
  id: string;
  type: 'container' | 'script';
  scriptUrl: string;
  containerId?: string;
  enabled: boolean;
}

export const EXTERNAL_AD_UNITS: ExternalAdUnit[] = [
  {
    id: 'external-ad-1',
    type: 'container',
    scriptUrl: 'https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js',
    containerId: 'container-487b249ab83f6aa8203efe13fa4ee6d6',
    enabled: true,
  },
  {
    id: 'external-ad-2',
    type: 'script',
    scriptUrl: 'https://pl30885738.effectivecpmnetwork.com/50/b6/fc/50b6fc8dcb4d46f0e4ec4f7a48984c97.js',
    enabled: true,
  },
  {
    id: 'external-ad-3',
    type: 'script',
    scriptUrl: 'https://pl30885741.effectivecpmnetwork.com/d8/e7/66/d8e7667a985e60d3761ebb99b34e858b.js',
    enabled: true,
  },
];

export default EXTERNAL_AD_UNITS;
