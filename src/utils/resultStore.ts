/**
 * NETWHO Result Store
 * Robust centralized persistence for dedicated result pages across all tools.
 * Supports session persistence, local storage backup, and instant recovery on page refresh.
 */

export interface StoredResult<T = any> {
  id: string;
  toolType: string;
  toolSlug: string;
  toolName: string;
  createdAt: string;
  data: T;
}

const STORAGE_PREFIX = 'netwho_result_';
const MAX_STORED_RESULTS = 50;

/**
 * Generate a clean, URL-safe result identifier
 */
export function generateResultId(prefix = 'RES'): string {
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  const timePart = Date.now().toString(36).slice(-3).toUpperCase();
  return `${prefix}-${randomPart}${timePart}`;
}

/**
 * Save a generated/analysed result to storage and return its result ID
 */
export function saveResult<T>(
  toolType: string,
  toolSlug: string,
  toolName: string,
  data: T,
  customId?: string
): string {
  const resultId = customId || generateResultId(getPrefixForTool(toolType));
  const record: StoredResult<T> = {
    id: resultId,
    toolType,
    toolSlug,
    toolName,
    createdAt: new Date().toISOString(),
    data,
  };

  try {
    if (typeof window !== 'undefined') {
      // 1. Save specific result
      const key = `${STORAGE_PREFIX}${toolType}_${resultId}`;
      const payload = JSON.stringify(record);
      
      window.sessionStorage.setItem(key, payload);
      window.localStorage.setItem(key, payload);

      // 2. Update recent index
      updateRecentIndex(toolType, resultId);
    }
  } catch (e) {
    console.warn('[resultStore] Failed to write result to storage:', e);
  }

  return resultId;
}

/**
 * Retrieve a result by tool type and result ID
 */
export function getResult<T>(toolType: string, resultId: string): StoredResult<T> | null {
  if (typeof window === 'undefined' || !resultId) return null;

  try {
    const key = `${STORAGE_PREFIX}${toolType}_${resultId}`;
    
    // Check sessionStorage first
    let raw = window.sessionStorage.getItem(key);
    if (!raw) {
      // Fallback to localStorage
      raw = window.localStorage.getItem(key);
    }

    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.data) {
        return parsed as StoredResult<T>;
      }
    }

    // Try finding by ID directly across all tools in case toolType is ambiguous
    for (let i = 0; i < window.sessionStorage.length; i++) {
      const k = window.sessionStorage.key(i);
      if (k && k.startsWith(STORAGE_PREFIX) && k.endsWith(`_${resultId}`)) {
        const item = window.sessionStorage.getItem(k);
        if (item) return JSON.parse(item) as StoredResult<T>;
      }
    }

    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(STORAGE_PREFIX) && k.endsWith(`_${resultId}`)) {
        const item = window.localStorage.getItem(k);
        if (item) return JSON.parse(item) as StoredResult<T>;
      }
    }
  } catch (e) {
    console.error('[resultStore] Failed to read result from storage:', e);
  }

  return null;
}

/**
 * Get latest result for a tool
 */
export function getLatestResult<T>(toolType: string): StoredResult<T> | null {
  if (typeof window === 'undefined') return null;

  try {
    const indexKey = `${STORAGE_PREFIX}${toolType}_index`;
    const rawIndex = window.sessionStorage.getItem(indexKey) || window.localStorage.getItem(indexKey);
    if (rawIndex) {
      const ids: string[] = JSON.parse(rawIndex);
      if (ids.length > 0) {
        return getResult<T>(toolType, ids[0]);
      }
    }
  } catch {}

  return null;
}

function getPrefixForTool(toolType: string): string {
  switch (toolType) {
    case 'generate-ip':
      return 'GEN';
    case 'ip-lookup':
      return 'IP';
    case 'uk-profile':
      return 'UKP';
    case 'location-generator':
      return 'LOC';
    case 'address-generator':
      return 'ADDR';
    case 'my-ip':
      return 'MYIP';
    case 'vpn-detection':
      return 'VPN';
    case 'dns-lookup':
      return 'DNS';
    default:
      return 'RES';
  }
}

function updateRecentIndex(toolType: string, resultId: string) {
  try {
    const indexKey = `${STORAGE_PREFIX}${toolType}_index`;
    const raw = window.sessionStorage.getItem(indexKey) || window.localStorage.getItem(indexKey);
    let ids: string[] = raw ? JSON.parse(raw) : [];
    
    ids = [resultId, ...ids.filter((id) => id !== resultId)].slice(0, MAX_STORED_RESULTS);
    
    const serialized = JSON.stringify(ids);
    window.sessionStorage.setItem(indexKey, serialized);
    window.localStorage.setItem(indexKey, serialized);
  } catch {}
}
