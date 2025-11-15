// Service Worker for The Care Ranch Audio Player
// Enables offline functionality for use on planes

const CACHE_NAME = 'care-ranch-audio-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/images/care-ranch-logo.png',
  '/images/horses-companion.png',
  '/images/horses-triptych.png',
  '/audio/Audio - TCR Arriving in the Dessert.mp3',
  '/audio/Audio - TCR Daily checkout information.mp3',
  '/audio/Audio - TCR Learning Edge, Staying Present.mp3',
  '/audio/Audio - TCR Meeting and Mapping your Inner Pa.mp3',
  '/audio/Audio - TCR Preparing for the Day.mp3',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install event - cache all files with progress tracking
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        console.log('Opened cache');

        // Cache files one by one to track progress
        const total = urlsToCache.length;
        let completed = 0;

        for (const url of urlsToCache) {
          try {
            await cache.add(url);
            completed++;

            // Send progress update to all clients
            const clients = await self.clients.matchAll();
            clients.forEach(client => {
              client.postMessage({
                type: 'CACHE_PROGRESS',
                completed,
                total,
                percentage: Math.round((completed / total) * 100)
              });
            });

            console.log(`Cached ${completed}/${total}: ${url}`);
          } catch (error) {
            console.error(`Failed to cache ${url}:`, error);
            // Continue caching other files even if one fails
          }
        }

        // Send completion message
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'CACHE_COMPLETE',
            total
          });
        });
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
