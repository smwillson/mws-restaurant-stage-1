var RESTAURANTS_CACHE = 'restaurantReviewsCache';


self.addEventListener('install', e => {
  console.log('huuray!');
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


self.addEventListener('fetch', event=> {
  console.log(event.request.url);

  event.respondWith(
    caches.open(RESTAURANTS_CACHE)
    .then (cache =>caches.match(event.request))
    .then(=> response) {
      return response || fetch(event.request)
      .catch( => err {
        return caches.match('/offline.html');
      });
    })
  );
});
