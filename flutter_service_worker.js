'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e7e8be24dcdf92e68adb2b23c52794ae",
".git/config": "84e72b663294f0ff9e3fc730109b7b4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b71bc9b31cc6c64454adfcd2db49da0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57cbb7bcb2513fcf452b77eb5111b69b",
".git/logs/refs/heads/main": "57cbb7bcb2513fcf452b77eb5111b69b",
".git/logs/refs/remotes/origin/HEAD": "170ccd437188643a399f90e49d01fe20",
".git/logs/refs/remotes/origin/main": "aaf5a3534487f76deedc01161a00389e",
".git/objects/0f/c70cbb976fa78f3b8f6e0a887758a33ec92400": "d720e3e6b2ad50bbdacef3af9fd31173",
".git/objects/30/ef062f12648912301f7161b52c6c96f36a4354": "22404d1013b354e9525cf91dc6fb07cf",
".git/objects/42/383dc9f077617fbdcd79d487de0d4b2f899f3d": "1865a6b768caf9f4f4d2cbd52ac5f428",
".git/objects/57/c4053df3c068d264ae44b35e3cdcbfdf254d81": "7857888138a3ec78e9759d0573f746d4",
".git/objects/5b/caccfafc793cc89546b20a5dc77fe63f1e2dc2": "5372c4f8587dc5928ba1fcc699777fb9",
".git/objects/62/7d85451fcc36992434582d7e8175bd5a809622": "e86d707b1ea85fad6538d1d42302910a",
".git/objects/89/cd11f40fd8b2b21216356924ac526ca8bb045b": "2599cd1bcd07e749e68cf4fe7058fd09",
".git/objects/9e/713fe2e84d36a8294ebc010919583703ec646b": "13417d6c903756ebaac5466c3e05e496",
".git/objects/ac/11819ce93d1e973e572f5e56b1d954c291bea5": "bd2f52e277046a54ed0027d62ed77da3",
".git/objects/b0/22c6f27f4e44098edb4752bc4bfb1377c304b0": "e8eb907d8f9cfc98718ae410301ad59f",
".git/objects/bc/eed9516d4dafe9632dea18fb5de2490126f4b8": "4c5069533721b1f7d839ea8f451c1f46",
".git/objects/bf/04be618ede30f5ed87b748e1ea0397241b67f2": "6ed3c6fed8dd4d47d54d11cd5031575e",
".git/objects/d4/573a2d70c7459147f20eb88ef41aebb50fad42": "9e4f1983a541f9ea6bd200d4715f2fc0",
".git/objects/e8/c7dcaf9a5a49b7b621d6b4678a06a2bfad1374": "ae17a759c62ff95ede59d23c5aca6e28",
".git/objects/f9/c9001abaf8409eb7c476e07e0721e50183bc9c": "4288fa88fe753485518e1b0a94c4f74f",
".git/objects/pack/pack-14fdb4be3c66b96018b23c89d90db38497652b13.idx": "950b2cb4a00f06a76a91f12cc19dc87a",
".git/objects/pack/pack-14fdb4be3c66b96018b23c89d90db38497652b13.pack": "cfbd1d85254f2a8a230fb8a9161853b9",
".git/packed-refs": "e645bc0557756cb488360cc27e43a01d",
".git/refs/heads/main": "983b7d670ee1a5c9dbbd468ac0376002",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "983b7d670ee1a5c9dbbd468ac0376002",
"assets/AssetManifest.json": "c662dcae3511ba1f0e2529438d371b3a",
"assets/FontManifest.json": "d0f50b02e4cfb583359acb9c3562c257",
"assets/fonts/BubblegumSans-Regular.ttf": "53260708b907e34954e9bc59abc9e521",
"assets/fonts/JosefinSans-Regular.ttf": "d043c7832664506d64199a29bc1848df",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/chibis.jpg": "efb30218775de1ae0e3689fe3422e8ac",
"assets/images/chibis_grey.jpg": "7a855ef767189390f3a067aed2742fff",
"assets/images/demon_slayer1.jpg": "c2e12b969814433e6b3b8ad79874ee20",
"assets/images/demon_slayer_background_flipped.jpg": "356989db4e87e8e5465f0887854c27d5",
"assets/images/demon_slayer_background_no_characters3.png": "4cf244c607741cf8ee31c9a2bb49c326",
"assets/images/demon_slayer_logo.png": "f01295e9af5ad45098c7c83554e09f23",
"assets/images/jujutsu_kaisen.jpg": "53113aa165d2423b481929dc9e0f8122",
"assets/images/jujutsu_kaisen_background2_flipped.jpg": "192a6409401759b8e960b2391d274d3d",
"assets/images/jujutsu_kaisen_background2_no_characters.png": "411fdf8b361030b03f6cae070882af5a",
"assets/images/jujutsu_kaisen_logo.jpg": "71a6367b18bd0971b414b03eb5d6101d",
"assets/images/spy-x-family-background3-no-characters.jpg": "f3f6e77742cceb8537c17ae355508c12",
"assets/images/spy-x-family-background3-no-logo.jpg": "c9271e33178317f58dc3f980cf580eb5",
"assets/images/spy-x-family.webp": "bd32ba5b6cf82eb400ae234ec6d2837b",
"assets/images/Spy_%25C3%2597_Family_logo.png": "0ed5f7747ffb33feeff5985cc9943db2",
"assets/NOTICES": "790da1b79f6f33dc8eeb4ba6e9713612",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "2556c7a0a389efe39748bf8869544837",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b996efbff1324114fcd8d8055148c4d",
"/": "9b996efbff1324114fcd8d8055148c4d",
"main.dart.js": "fca1311183b49ebb520f98168356af34",
"manifest.json": "73dc0ca14c42923f350d78badfbaacc6",
"README.md": "64b07ec9b763aee62a2aae1e1bee7ef1",
"version.json": "f279713e8b28ca4cbd995e0ea2fdfdb3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
