'use strict';
const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/main.bundle.js',
  '/service-worker.js'
];

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim()).catch(() => {})
  );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, resClone))
            .catch(() => {});
          return res;
        })
        .catch(() => {
          return caches.match(event.request)
        })
    );

  const url = new URL(event.request.url);
});
