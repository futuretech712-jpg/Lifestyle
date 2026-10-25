/* Lifestyle service worker: keeps the whole app available offline.
 * Bump VERSION whenever you change any file, so phones pick up the update. */
const VERSION = 'lifestyle-v1.0.0';
const SHELL = [
  './', 'index.html', 'app.js', 'ai.js', 'llm-worker.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/icon-maskable-512.png',
  'fonts/bricolage-grotesque-latin-wght-normal.woff2', 'fonts/bricolage-grotesque-latin-ext-wght-normal.woff2',
  'fonts/manrope-latin-wght-normal.woff2', 'fonts/manrope-latin-ext-wght-normal.woff2',
  'fonts/jetbrains-mono-latin-500-normal.woff2', 'fonts/jetbrains-mono-latin-ext-500-normal.woff2',
  'fonts/jetbrains-mono-latin-600-normal.woff2', 'fonts/jetbrains-mono-latin-ext-600-normal.woff2',
  'vendor/jszip.min.js', 'vendor/zxing.min.js', 'vendor/web-llm.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('lifestyle-') && k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting() });

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // AI models, APIs: handled by the browser/WebLLM cache
  if (e.request.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      try { const fresh = await fetch(e.request); cache.put('index.html', fresh.clone()); return fresh }
      catch (err) { return (await cache.match('index.html')) || (await cache.match('./')) }
    })());
    return;
  }
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) cache.put(e.request, r.clone()); return r }).catch(() => null);
    return hit || (await net) || new Response('Offline', { status: 503 });
  })());
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(cs => cs[0] ? cs[0].focus() : self.clients.openWindow('./')));
});
