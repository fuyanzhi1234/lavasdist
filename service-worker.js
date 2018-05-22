importScripts('/lavasdist/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author yourname(someone@somecompany.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/lavasdist/favicon.ico",
    "revision": "7264d2ec7553bb96307af4acbe697faf"
  },
  {
    "url": "/lavasdist/index.html",
    "revision": "c00b6fc1aff85e060d26ca876a0f5ece"
  },
  {
    "url": "/lavasdist/static/css/index.4e844628.css"
  },
  {
    "url": "/lavasdist/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/lavasdist/static/fonts/MaterialIcons-Regular.570eb838.woff2"
  },
  {
    "url": "/lavasdist/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/lavasdist/static/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "/lavasdist/static/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "/lavasdist/static/fonts/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "/lavasdist/static/img/icons/android-chrome-144x144.png",
    "revision": "5fe3aebf485bcbea49f010cae2ffcc73"
  },
  {
    "url": "/lavasdist/static/img/icons/android-chrome-192x192.png",
    "revision": "b8a42c4a3b00c4f75bc636f2923eaeca"
  },
  {
    "url": "/lavasdist/static/img/icons/android-chrome-512x512.png",
    "revision": "efbe0aa485b3aeaceb8ead9191f0c4c0"
  },
  {
    "url": "/lavasdist/static/img/icons/apple-touch-icon-120x120.png",
    "revision": "b451e38c6ee4b03781b1019c518e7894"
  },
  {
    "url": "/lavasdist/static/img/icons/apple-touch-icon-152x152.png",
    "revision": "83409fb3fe88cb94d7d3df5fe97569c9"
  },
  {
    "url": "/lavasdist/static/img/icons/apple-touch-icon-180x180.png",
    "revision": "0ff69c8fca81469c28f589d5fad0616e"
  },
  {
    "url": "/lavasdist/static/img/icons/apple-touch-icon-60x60.png",
    "revision": "4dc6fdc67611efce36a3c500cbe1c0ec"
  },
  {
    "url": "/lavasdist/static/img/icons/apple-touch-icon-76x76.png",
    "revision": "588079df8f1b8fde3b3cd691ee65bf06"
  },
  {
    "url": "/lavasdist/static/img/icons/favicon-16x16.png",
    "revision": "3742528143340e36915adf388d64060f"
  },
  {
    "url": "/lavasdist/static/img/icons/favicon-32x32.png",
    "revision": "047f3021e153c19951f86dd209904243"
  },
  {
    "url": "/lavasdist/static/img/icons/favicon.ico",
    "revision": "7264d2ec7553bb96307af4acbe697faf"
  },
  {
    "url": "/lavasdist/static/js/index.38053839.js"
  },
  {
    "url": "/lavasdist/static/js/manifest.51866325.js"
  },
  {
    "url": "/lavasdist/static/js/vendor.6414d44e.js"
  },
  {
    "url": "/lavasdist/static/js/vue.353db202.js"
  },
  {
    "url": "/lavasdist/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
workboxSW.router.registerNavigationRoute('/lavasdist/index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
workboxSW.router.registerRoute(new RegExp('https://query\.yahooapis\.com/v1/public/yql'),
    workboxSW.strategies.cacheFirst({
        cacheName: 'lavas-cache-images',
        cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 7 * 24 * 60 * 60
        },
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
);


// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
