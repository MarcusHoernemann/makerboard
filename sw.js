const CACHE_NAME = 'makerboard-v1';

// Install Event
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installiert');
});

// Fetch Event (Minimal-Setup für PWA-Validierung)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
