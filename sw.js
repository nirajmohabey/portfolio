// Service Worker for Portfolio Caching
const CACHE_NAME = 'portfolio-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/profile.jpg',
  '/assets/photo1.avif',
  '/assets/photo2.avif',
  '/assets/photo3.avif',
  '/assets/photo5.jpg',
  '/assets/photo6.jpg',
  '/assets/photo7.jpg',
  '/assets/photo8.jpg',
  '/assets/stock.jpg',
  '/assets/trip.jpg',
  '/assets/marketing.avif',
  '/assets/bank.jpg',
  '/assets/photo10.jpg',
  '/assets/Niraj_CV.pdf'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // For HTML files, always try network first
        if (event.request.url.includes('.html') || event.request.url.endsWith('/')) {
          return fetch(event.request).catch(() => response);
        }
        // For other resources, return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
