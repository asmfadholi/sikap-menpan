if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,t)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/132-b51cbf57d0fb35ff190d.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/15-217322584cb9e846a9f4.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/386-52aad8a0312eed9aeff0.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/main-fa41a69231a4d920686c.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/pages/_app-107416102ba8735f32d9.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/pages/agenda-2c82b0029611d7614cea.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/pages/index-f4522a82a6654fff8021.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/pages/login-fbb29ead87c44e175f11.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/chunks/webpack-20d43e08bea62467b090.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/css/0d3f763bcdd73977b9ab.css",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/image/src/assets/images/login-bg.05c0f3e507b0c94453039e79624fe082.jpeg",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/image/src/assets/images/logo.e0e801a38281bf0fc63a193ceb3ffe22.png",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/q8ajyWu1DuGUbS3hB4zap/_buildManifest.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/_next/static/q8ajyWu1DuGUbS3hB4zap/_ssgManifest.js",revision:"q8ajyWu1DuGUbS3hB4zap"},{url:"/favicon-16x16.png",revision:"72aef7aaf28e512dad2aea24a7bb8d2a"},{url:"/favicon-32x32.png",revision:"72324b6a27c7b1ffecf848d28d632487"},{url:"/icons/icon-192x192.png",revision:"1800dc31ea157c0032e25b157c6e5f7a"},{url:"/icons/icon-256x256.png",revision:"969be8c8087477e62fa140905e6728d5"},{url:"/icons/icon-384x384.png",revision:"95208dbd75b3ec6122d3d5d1b2f2ee4a"},{url:"/icons/icon-512x512.png",revision:"78a2dff94da181c8a918c8679776d541"},{url:"/manifest.json",revision:"1d816ca067796e66c863f36c7fecfa73"},{url:"/robots.txt",revision:"44828dc73e05e0741de7d5280c2f04ee"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
