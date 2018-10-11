/* service worker in depth: https://github.com/GoogleChromeLabs/airhorn/blob/master/app/index.html*/

var RESTAURANTS_CACHE = 'restaurantReviewsCache';


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(RESTAURANTS_CACHE).then(cache => {

      return cache.addAll([
          `/`,
          `/index.html`,
          `/css/styles.css`,
          `/js/main.js`,
          `/js/restaurant_info.js`,
          `/js/dbhelper.js`,
          `/offline.html`,
          `/js/offline.js`,
          `/img/errpic1.jpg`,
          `/img/errpic2.jpg`,
          `/img/errpic3.jpg`,
          `/img/errpic4.jpg`,
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

//fetch from cache or network

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(RESTAURANTS_CACHE)
      .then(cache => cache.match(event.request))
      .then(response => {
      return response || fetch(event.request).catch(err=> {
        return caches.match('/offline.html');
      });
    })
  );
});
