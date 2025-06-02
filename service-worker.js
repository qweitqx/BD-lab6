/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa6eddc5d346f8097f9fe762177c9de5"
  },
  {
    "url": "assets/css/0.styles.0784fdd9.css",
    "revision": "a4ab8c9a796620309ea9fd70287184b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9bd71ba.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.df6d0676.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.aa20a373.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.b5784633.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.31a49922.js",
    "revision": "830c76fb3840a1cef3aaa84985c33ebd"
  },
  {
    "url": "assets/js/16.f4a77444.js",
    "revision": "c4198733324dbed8797b6c14c8c0fb70"
  },
  {
    "url": "assets/js/17.858f3925.js",
    "revision": "19e2239523e6f3109bd83b595bc2c29a"
  },
  {
    "url": "assets/js/18.af358188.js",
    "revision": "73f50f17f81641c6383721d2e7e3d8e1"
  },
  {
    "url": "assets/js/19.a7baef93.js",
    "revision": "69183e74e1240e02d805b0978db4dfb8"
  },
  {
    "url": "assets/js/2.15062954.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.05237316.js",
    "revision": "b762a04ab32c474f826fda1f9616ab6c"
  },
  {
    "url": "assets/js/21.9ea1c367.js",
    "revision": "06383b8c260f2af309fcc6a539b442c5"
  },
  {
    "url": "assets/js/22.27a78a1d.js",
    "revision": "85b29f385106344c418bc440bca0eda5"
  },
  {
    "url": "assets/js/23.03b2c9bd.js",
    "revision": "a471a3b90e2f190c7c214ddd656c5866"
  },
  {
    "url": "assets/js/24.db9e2327.js",
    "revision": "a5e8b6c481bc9f408807d1cc8c5d01c5"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.630a2dd6.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.68feb87f.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.9e40fe03.js",
    "revision": "34e4dc8308467d77a9dc5318911ce920"
  },
  {
    "url": "assets/js/7.9b07c886.js",
    "revision": "dbf3fe1c5b38157ad795d49e2c42bfcd"
  },
  {
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.fcebc8bf.js",
    "revision": "5964fbbc64ea8ec4f0f20f2e7a03563e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "bd50df899e23223aa42c184e30fb3441"
  },
  {
    "url": "design/index.html",
    "revision": "f1aeb7cad2e9bbbf4d93bd49b65cc955"
  },
  {
    "url": "index.html",
    "revision": "70ea9cf584fac828163d8235767f2752"
  },
  {
    "url": "intro/index.html",
    "revision": "56ee933568836c80b131c26be0f3dee6"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5ff60aac9fb5b68954ce877af5d7eb35"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ca3742ce52c8cdefc0b9e7fb14e89212"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7526f7d685a9cf60fa506a63cb9095e9"
  },
  {
    "url": "software/index.html",
    "revision": "dbd71805650e916ae75d203448a8d51f"
  },
  {
    "url": "test/index.html",
    "revision": "00076fbb92afb0970eee2b02e71d5aef"
  },
  {
    "url": "use cases/index.html",
    "revision": "b4926588388414f15b485e6e9da12f32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
