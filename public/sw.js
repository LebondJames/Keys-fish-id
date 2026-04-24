const CACHE = 'keys-fish-id-v2';

const PRECACHE = [
  '/',
  '/index.html',
  '/species.js',
  '/manifest.json',
  '/model/model.json',
  '/model/group1-shard1of3.bin',
  '/model/group1-shard2of3.bin',
  '/model/group1-shard3of3.bin',
];

// Install — cache everything including model files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate — clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache first for app assets, network first for everything else
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Always serve app assets from cache
  const isAppAsset = PRECACHE.some(p => url.pathname === p) ||
                     url.pathname.startsWith('/model/');

  if (isAppAsset) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
          return response;
        });
      })
    );
    return;
  }

  // For other requests try network, fall back to cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
/* cache bust Fri Apr 24 11:11:42 EDT 2026 */
