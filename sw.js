self.addEventListener('fetch', function(event) {
  // Ce code permet simplement de valider les critères PWA de Chrome
  event.respondWith(fetch(event.request));
});
