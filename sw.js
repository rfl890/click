self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('offlineAccess').then((cache) => {
            return cache.addAll([
                '/',
                '/favicon.ico'
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
