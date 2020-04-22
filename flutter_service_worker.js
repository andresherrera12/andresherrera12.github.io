'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "b394ffc2ca432b8873e4d96491bc007a",
"/main.dart.js": "ec13312c24498af53db68fcd9bd18b02",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "51c4fd5b6bf186fb5f8902aa9e7ce16b",
"/.git/config": "ff88a01377b5f2ab10df77646c09ec1a",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/60/9b2c4b21827cd4099902e028db20ef4a97e74a": "0ebf3ed866f5addae4514308fc0a5486",
"/.git/objects/d9/2037655d22a5f5c7ac7248106f2caaa3077f10": "d64151073bc5e72d51b35f8fc219b29f",
"/.git/objects/ac/5e6f01f7fb948aaa512f67fb8ccadc94adb327": "43b31ec0045009340b7d1a8d23065bf6",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/fe/f1b99f3c273ac476ce2f91cc34112711fa4adb": "d2c39b321a22322cd22ed09662493159",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/1f/d5b7c9168b3c10990bf3bc95cc2312ddbb7e58": "d9fd7af50a9f075157231cbb7e52e190",
"/.git/objects/28/bebe910d6cfc7944eab1cf0b0a30668c2b57d9": "d10b53b96e9cc6765efe988f1b31a9f4",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/21/03dc994359050356d0310e75ea180a6e29014f": "deb5a3e5f89ddcdc00b4237093a96f34",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/44/37696d0f7b0041878456b08f1b327be1c4d934": "54da85bc9b2e2de07c4905dc00a4fc7b",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/99/7b44258f8c90f6f0b460c625b80d9e891e236e": "ee8b95bb3513138c13a6d46006c06392",
"/.git/objects/99/361ff57a392930506e00e8d4a936b3b1f9ab6a": "e445a5eb1ccae73f44f4ceeffeba876e",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/90/d86c5298891703a85c2037e31d801d59b78151": "cbef4f16081e51b8d88f864b0aa19b5a",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c2/0589df063aa5f19ffc2a7811a57bced37ae202": "9efb8502ba0dc955c4cc89862b84a7c7",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "9ed1b1bcf0441be83a96b5a5cfe7b9d5",
"/.git/logs/refs/heads/master": "9ed1b1bcf0441be83a96b5a5cfe7b9d5",
"/.git/logs/refs/remotes/origin/master": "e20ca73b2c66821ee265bed4cb4a7a53",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "1c939a6ec368ae0cf51139a5023d1bb2",
"/.git/refs/remotes/origin/master": "1c939a6ec368ae0cf51139a5023d1bb2",
"/.git/index": "0df7639339f42fbb6882413fabfea7fd",
"/.git/COMMIT_EDITMSG": "1245c6589db50c4b38ca9a5bd0dcf902",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
