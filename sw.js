/* service worker in depth: https://github.com/GoogleChromeLabs/airhorn/blob/master/app/index.html*/

var RESTAURANTS_CACHE = 'restaurantReviewsCache';

/*
* This is the first event in the life cycle of the service worker. This process caches the desired content in the scope
* of the service worker. However, the caching is dependent on the availability of the files and the
* fulfillment of the promise. If the promise fails, service is unable to install and resources arent cached.
*
*/
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
          `/data/restaurants.json`,
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

/*
*
*After a service worker is successfully registered and install, we either try to fetch content from cache or the network.
*If both of those actions fails, the user is redirected to an offline page which displays some pertinent information.
*
*/


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(RESTAURANTS_CACHE)
    .then(cache => cache.match(event.request))
    .then(response => {
      return response || fetch(event.request).catch(err => {
        return caches.match('/offline.html');
      });
    })
  );
});
