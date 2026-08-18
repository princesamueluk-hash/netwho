// NETWHO Service Worker - Network-First Strategy with Cache Buster
const CACHE_VERSION = 'netwho-v3-live';
const APP_SHELL = ['/'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  // Immediately purge ALL previous stale cache stores
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_VERSION)
          .map((name) => {
            console.log('[SW] Deleting stale cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // STRICT BYPASS: External scripts, ad networks, intelligence APIs
  if (url.origin !== self.location.origin) {
    return;
  }

  // Never intercept API routes or dynamic queries
  if (url.pathname.startsWith('/api') || url.search) {
    return;
  }

  // NETWORK-FIRST STRATEGY: Always fetch fresh code from network, fallback to cache if offline
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('/') || new Response('NETWHO', { headers: { 'Content-Type': 'text/html' } });
          }
          return new Response('', { status: 204 });
        });
      })
  );
});
