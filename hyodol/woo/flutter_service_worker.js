'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8240054fb51791c5d955a6cb520c8823",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"hyodol/version.json": "8240054fb51791c5d955a6cb520c8823",
"hyodol/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"hyodol/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"hyodol/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"hyodol/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"hyodol/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"hyodol/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b392c64816c3c79d6e4b75fcf7396761",
"hyodol/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"hyodol/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"hyodol/assets/NOTICES": "763a44d9e4f3458f6ac908127fc1045e",
"hyodol/assets/fonts/MaterialIcons-Regular.otf": "6d3a24e928d563f876eca7eb87466be4",
"hyodol/assets/AssetManifest.bin": "32f2600717bb59eb1c3947a3f4424dac",
"hyodol/assets/assets/hyodol_login.png": "97dc45702bf0e6f84b83bb6ca41c7f7b",
"hyodol/assets/assets/patrikbc-code.svg": "e6eb8afb4eeedb31cbb0edec79d8ca35",
"hyodol/assets/assets/backside.jpg": "f8564d7f95dfe41f1f509373b6ee4e76",
"hyodol/assets/AssetManifest.bin.json": "a0b61513d003e0345cdc452a815b955e",
"hyodol/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"hyodol/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"hyodol/assets/AssetManifest.json": "c11fa8d79b7b33a0ba00d81cb039313a",
"hyodol/manifest.json": "3e6ed485428c49e10b523596734a41b8",
"hyodol/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"hyodol/main.dart.js": "1be54cc14569179fc4ddaac11184ed64",
"hyodol/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"hyodol/index.html": "71177534923969c82914c9738984c9fd",
"hyodol/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"hyodol/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"hyodol/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"hyodol/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"hyodol/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"hyodol/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"hyodol/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"hyodol/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"hyodol/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"hyodol/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b392c64816c3c79d6e4b75fcf7396761",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/NOTICES": "763a44d9e4f3458f6ac908127fc1045e",
"assets/fonts/MaterialIcons-Regular.otf": "6d3a24e928d563f876eca7eb87466be4",
"assets/AssetManifest.bin": "3eb531b402469e2772a38e352507ff2c",
"assets/assets/wooqr.svg": "e68b2f0af6c147047173171ef560f775",
"assets/assets/hyodol_login.png": "97dc45702bf0e6f84b83bb6ca41c7f7b",
"assets/assets/patrikbc-code.svg": "e6eb8afb4eeedb31cbb0edec79d8ca35",
"assets/assets/woo1.png": "f81ae1201703a8827776a5afd8cbf5a9",
"assets/assets/woo2.png": "b4afd10b5d79380af848434a510d054a",
"assets/assets/backside.jpg": "f8564d7f95dfe41f1f509373b6ee4e76",
"assets/AssetManifest.bin.json": "dd930387a7a6d7436608e1afd296d5b1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "78558394b193e19fd9c199f8cd6a378d",
"manifest.json": "3e6ed485428c49e10b523596734a41b8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "9c6eada7b1f21f4de0176bbdeeb03b38",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "d7328b8b2595e7db6bebdefa1c015596",
"/": "d7328b8b2595e7db6bebdefa1c015596",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
