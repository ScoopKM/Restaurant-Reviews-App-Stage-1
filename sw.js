let staticCache = "app-v1";

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('staticCache').then(function(cache) {
      return cache.addAll([
<<<<<<< HEAD
        './',
        'css/styles.css',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant-info.js',
        'index.html',
        'restaurant.html'
||||||| merged common ancestors
        './',
        '.css/styles.css',
        '.data/restaurants.json',
        '.img/1.jpg',
        '.img/2.jpg',
        '.img/3.jpg',
        '.img/4.jpg',
        '.img/5.jpg',
        '.img/6.jpg',
        '.img/7.jpg',
        '.img/8.jpg',
        '.img/9.jpg',
        '.img/10.jpg',
        '.js/dbhelper.js',
        '.js/main.js',
        '.js/restaurant-info.js',
        '.index.html',
        '.restaurant.html'
=======
        '/',
        'css/styles.css',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant-info.js',
        'index.html',
        'restaurant.html'
>>>>>>> 691eb1c605b155d564e53b8349ffac42869ecd1c
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
     caches.match(event.request).then(function(response) {
       if (response) return response;
       return fetch(event.request);
    })
  );
});

// This Part here works
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if(response.status === 404) {
        return new Response('Whoops, not found.');
      }
      return response;
    }).catch(function() {
      return new Response();
    })
  );
});
