self.addEventListener('install', (e) => {
  console.log('NamasteOtaku SW Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});