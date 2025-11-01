self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('syncfuel-v1').then(cache => {
      return cache.addAll([
        './',
        './dashboard.html',
        './style.css',
        './script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
