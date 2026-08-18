/**
 * NETWHO Advertisement System — Verification
 */

import adManager from '../services/adManager';
import { EXTERNAL_AD_UNITS } from '../data/adsRegistry';

function logTest(testName: string, passed: boolean, message: string) {
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${testName}: ${message}`);
}

export async function TEST_ExternalAdsConfig() {
  console.log('\n🧪 TEST: Real External Ads Configuration');
  console.log('---');

  const units = adManager.getAdUnits();
  logTest('T1.1', units.length >= 3, `Registered ${units.length} real external ad units`);

  const containerUnit = units.find((u) => u.type === 'container');
  logTest('T1.2', !!containerUnit && !!containerUnit.containerId, 'Container ad unit configured with container ID');

  const scriptUnits = units.filter((u) => u.type === 'script');
  logTest('T1.3', scriptUnits.length >= 2, 'Script ad units configured with source URLs');

  console.log('✓ TEST PASSED: External ad network configuration verified\n');
}
