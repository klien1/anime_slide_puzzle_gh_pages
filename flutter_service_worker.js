'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "57215ecf86640296b3eadcddef9361d7",
".git/config": "9eeb981ed9b488652e44bef49e3ba3bd",
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
".git/index": "c764f7ea83b6164198aed54b8a8cacaa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "01c051ba0285576a3b065e711c304ed0",
".git/logs/refs/heads/main": "170effe99a090e049b0cda7f75fd223c",
".git/logs/refs/remotes/origin/main": "bd3729156f3276769dabcaa33cad1db1",
".git/objects/00/f69dd08d7a366665eca38b1729b1fd4170539e": "0fb60f0a3b9543b81e59df3585578a3f",
".git/objects/01/8985122a3db90fc9a30422cce37c357c63dbe5": "a2b55ec5574c8c6024dd41d27f8ff4b3",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/1d5a802e7b6f1a6fbbb02cbc9e59a65679547d": "40d6d806136231057a464b087d544a5e",
".git/objects/09/84615c57f27ec8d9524630206d8bcf98f3ca0f": "fb162d33ba3f9a33e8b592dc43fe9bb3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/1900d792d99ec4ebb96c8318ab497f0a0c47f8": "7b1a34bd2d3039c5c2187740feed89dc",
".git/objects/0e/dd52c230a6d354bbad6a66c852ea875e82e119": "d449f5913e9b6394aed7b188abd30687",
".git/objects/13/017528f04cd7587b77d3fd1be2bb2dcbe28065": "0db61afc39664cc90be37ca12510eae4",
".git/objects/15/e9d8fd1ec7719b7840a3113ea00dc3a97c5467": "14a8b09da1d6c9175e5e4afbf93e2094",
".git/objects/1a/562da5777ba36a1112271cac3b39f6fac061e1": "29e173c0b74c47e40f8a96032a948925",
".git/objects/1a/c86ec8795cf5a7d4ef89d0076b5df999fa664e": "fb7b1f06d53889975677ce87de85e17e",
".git/objects/1c/a05a5ccb5419b3cb046bc2133c00f1c8ff539e": "d4e21e344491eb845a74c184d573492c",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/77d26791474889408554330d7d410e069b510a": "a37c0e0a583c74fcd925aec8634e2f4c",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/cf7cd4859fad4552943bb4966cfd5d7c8f6831": "0ce14551066477c0d29f24fc1ed1b988",
".git/objects/2e/79657d3a19c5890a2e3522748c834d0370d137": "0cfcc55b425ea8de7edc99db0b5748cc",
".git/objects/38/35a8f8b77c07086a921892bb1cba02019a76bb": "c9ffa12b97c260249dcfc69353d2f205",
".git/objects/3c/8a7460e0f79b2803bb09075f5fc2c72f51e04c": "0873fc528c66759dcb40aafbecb15bd9",
".git/objects/3f/921dd85fa0219c5187e098d33e8504a8a69152": "cca3a3620244cb4e404a0e26ce9dcdb4",
".git/objects/3f/fbbcab42c1ea8c4a301c6dc4a312854b348962": "c3916f1d0337ab52c4758e93a82feafa",
".git/objects/41/f8f9a31e58c46c484f3203916d0ee24043d83c": "192e46ebffc6526a4c3fb420c5c2fd30",
".git/objects/43/b8b8b46a3f0343fec2aede688049212994e7e1": "55f3da4e06ae7f26eb9f52d8e1c4745e",
".git/objects/44/7718dcf96098bc34d695189c42632bf78531a6": "1ab4dd5eabb4e0d067d0d0c2c0cb8f8a",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/9926fff2739e1bac0366f493edd731f57cf789": "dee97159180d9725b32dceb4961c2930",
".git/objects/54/a10e54df4ea50e50959242a47a2e5e5f74342b": "cb2b1a6b8ccb9d7ba0de57bc00344015",
".git/objects/57/8fbdee104bfb1ba52552c52a189aeab968bc09": "3a00ab3583a0c2140d76b0fbd5aa17fd",
".git/objects/58/0bbbec94a2c49f6d7c65193c934c8f5f59b803": "83f39ba5e757a107b4c9adafc89c8994",
".git/objects/5f/924e8a6e6268c77d0a7bd898568cbe2a35ead8": "1e76d96eb772ba9dc445b2ec4a00f6c3",
".git/objects/65/145428bde1c9b2866f4d9163a184c3d1739a51": "d583147119787d94a22526525e2c7c2d",
".git/objects/65/962d48f5b72351730ff2e1bba42b38148db624": "710f78d50f94c03077d455b012d97c57",
".git/objects/66/f7eed8c0cee55f2d4a16e8ccdc9b1eeb25265d": "8cb51c1f6ea7b93a50c59db78267c5eb",
".git/objects/68/cbebdafe9ca0bf1a58014e4af1978f2f8651b0": "e186eb7f6d953aad9d9eb6294b8fb879",
".git/objects/6d/2c58e1ba26deff6b41159fee08e17d5a34119b": "d70a1f6d1533beb854d569bacee1fb15",
".git/objects/6e/a18231e7a6578b5d799d137493e086141bda75": "b8651dafcb88bae0fd24423ad21367a8",
".git/objects/70/a7efadd9eb77a4ec44ace66f8e20819e2d0957": "fc72361aaa13b237df5c0e753af5d27d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/70297cf26714c7af631d7db71533c6b49a8004": "9d0ccf747376763541ec2a75837dd1ee",
".git/objects/87/7a4d9e64e9803a0d89edd086af004a95443162": "c4eb24bc4d9052d8581e7980a6b959d8",
".git/objects/88/19e69dc296183c9bfdddeafbd2f8d8b499dd31": "296a17b0725dbbb73a105a4371f44825",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8e/e28384ca0b40ad1638a1ecf665d52cd4020e04": "a4136b82753387f4368d145f9d07acd4",
".git/objects/92/2db06a922277c23472aab9bee90def57468eec": "ad13e92a333db7b0076222e23ebbb1c3",
".git/objects/92/71685dafd1db1af999435826dff1e0ef5936d1": "5b2666bb814a93d259ebcc0f6d8a38bd",
".git/objects/9c/a8e9fb656a36d317e2fd65529a51afcb6ee238": "61ba71dcf6665b8d667aca05158378f7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/a1f26b31b1b80cdfffcc68f5756a21945d3d53": "1b3dcc817590ed86f8e9ed9f6c527149",
".git/objects/ac/99dd70d2f557c104a7dd612fb7b15816492e1b": "4fcd96fd009e655e0e3370cae214c126",
".git/objects/ad/018e8b3b06d05eb3fc5ff272b3e65aea318653": "fce744c04d4a84c056479cefa902f3ca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a17c8692efe5c19948f621fa9607413d8c5e3e": "3032e3f6043761d65a0e09c8d6c6f345",
".git/objects/bd/9087b7e993f47062d26599ba3101c640ad5c17": "1d9abd3d03d8205f54ad641cb205d0c7",
".git/objects/c1/39dc20425b7681682ab2f150964eb61436139e": "33f416483438ecc536f3946e3c2c7cf5",
".git/objects/c6/f996ba2812e0b9037a8142b87bd40c1fe76d26": "94116b6619d0a0df75607eac7b28416f",
".git/objects/cc/d3a9df424f3d98277b25a53ab19ec78d2915db": "0c4f39b4c2e9be4738781bc11ab34b2a",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d5/305fb07325877342bf8f87503515ae345fc502": "1c6fde032d6de426488278a4d99158d9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/6c35dd86b7463cfa2c9b784a7a84b18417fcf0": "babb32ec514429a3c5d4bec8d964540d",
".git/objects/da/eeaf2a2afb1dd0e8acb40b7640e0931c7f6bd5": "b48b6dd843baf1df70e23bb8389f7583",
".git/objects/dd/fce4383c402f125f8700b75fb16d95c7748a92": "b1274d6eaf726aab77929ca4097031f1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e73cf0de3063f22ed7125e29ff2ee243578e25": "787e1f0ef8090d9c6f0750903117d2b5",
".git/objects/e0/95f5622154706c05a1762e9507dacffad48d5b": "de197224a905826b06090d274aa6d2a7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/1ff8e959015dcde064478147560cbaa7c7f8ec": "bb0db44be2e6b781a85f62706f3ea43f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d1cc01d598a3100d79a21ad7be744b1c35431d": "3655b98c53efcbd2fcc79ec2ed6137b1",
".git/objects/ec/13d1c5ea0b1a8216d31e941d043362eb83cdaf": "9f81194065bf3af58fccba93e24f3bb9",
".git/objects/ef/0b651c6fbc820e41dfaee1e7b7170c99956872": "6a7b65a9c0f951560c85fcf3e8a6fa38",
".git/objects/fe/3c9d11daae74528de95e38bcf87021deb7dc05": "fe098a695aded0109242580e96c408ba",
".git/refs/heads/main": "b3d94d88c77395e0d07a964c048c22c7",
".git/refs/remotes/origin/main": "b3d94d88c77395e0d07a964c048c22c7",
"assets/AssetManifest.json": "04305c88cf6bfb9298f3adf13f531874",
"assets/FontManifest.json": "d0f50b02e4cfb583359acb9c3562c257",
"assets/fonts/BubblegumSans-Regular.ttf": "53260708b907e34954e9bc59abc9e521",
"assets/fonts/JosefinSans-Regular.ttf": "d043c7832664506d64199a29bc1848df",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/chibis.jpg": "efb30218775de1ae0e3689fe3422e8ac",
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
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a78e1dbc289f1d7fcb44ec9d62c8111",
"/": "0a78e1dbc289f1d7fcb44ec9d62c8111",
"main.dart.js": "8622295b1233d4378c21b47bae215026",
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
