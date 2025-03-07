self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    return self.clients.claim();
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
});
