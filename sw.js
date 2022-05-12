self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('offline').then((cache) => {
            return cache.addAll([
                '/'
            ]);
        })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});