/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bs-config.js","3143dd5885544582b412eeef283786a3"],["doc/order-steps.jpg","5871311da9fc84a061ec4ca94fd13361"],["doc/site-template-groupe1.jpg","781754ed2803b133a10135eaa7915f25"],["doc/site-template-groupe2.jpg","6292976844b5115efc4c329f8a26025e"],["furry-app/components/article-details.component.js","fdf607d11f54f99e0333ecaded701082"],["furry-app/components/articles.component.js","651f1c66334b1df28e0ca996bab65635"],["furry-app/components/contact.component.js","728c95cf47bffb91f0bc6e9adf5168c6"],["furry-app/components/form-login.component.js","cb82f5cfacc5e96d6bfd27b00795c069"],["furry-app/components/form-register.component.js","047eef9ff21cfd3b101daa2e2b5c5a58"],["furry-app/components/home-page.component.js","b69ed24b2302ebd7e437641a2dd0d58d"],["furry-app/components/my-account.component.js","8bcf7d48eab73555671e5e47eafa0dac"],["furry-app/components/order-cart.component.js","c397788112c30e47131b44efd5943e79"],["furry-app/components/search-bar.component.js","79faf888a2a111e741c7dac02e0969b7"],["furry-app/components/special-offer.component.js","051dfa569c07a4c6bf88435179e4d5fd"],["furry-app/constants/currencies.constants.js","f54ffda54fe73f22b734fed76de9ec36"],["furry-app/constants/environment.constants.js","721892d999989d5af1c5739fb63f41c7"],["furry-app/constants/languages.constants.js","03dc46e88646a01a661fdc6b69b802f6"],["furry-app/controllers/currency.controller.js","1b68400e8d335ec1543f4b193aba672a"],["furry-app/controllers/lang.controller.js","7cb0475e19825fe73302d64ea9d43e68"],["furry-app/controllers/navbar.controller.js","07424fbce70e40800d4908b57cce84c3"],["furry-app/img/icons/changeCurrency.svg","5bb61e4db6e984d63d9f2149d3a28173"],["furry-app/img/icons/languages/de_DE.svg","5c9661f66b30896a0667a78ea18f2847"],["furry-app/img/icons/languages/en_EN.svg","db68882cbf4beac3f3ee3923f1a91b82"],["furry-app/img/icons/languages/es_ES.svg","a62a83f37b05e303205142ff51d7a990"],["furry-app/img/icons/languages/fr_FR.svg","8b296b786a6ac07e0db19819ecda25bd"],["furry-app/img/product/example.png","ceb54e432487381dcbdb92e5b74a964e"],["furry-app/langs/locale-de_DE.json","32d6a8041133e980f2fc2a32e0dbea1a"],["furry-app/langs/locale-en_EN.json","b4b999f2be899a63bb077868964ca63f"],["furry-app/langs/locale-es_ES.json","ea0af54f90fb0a0339af301ca3ee8455"],["furry-app/langs/locale-fr_FR.json","eda0ee28b8f43c86d192f4f7d8c8d5e1"],["furry-app/main.js","bd53e34c768601d13230b853977a5013"],["furry-app/router.js","95e5acdd99d4189043b8595d65fa4772"],["furry-app/runners/jwt.run.js","6e44af6ae79c0fd8c370df9c3c60d75d"],["furry-app/services/article.js","68690eadc692ad30e4882ab3813ca499"],["furry-app/services/auth.js","a9958ba4e641a898caab353d1747a8ea"],["furry-app/services/cart.js","b1ddf7581f3de93abbd639c757762231"],["furry-app/services/filter.price.js","4ec64c5ab14d9cb6ddd5000dc0c11ccc"],["furry-app/services/prices.js","45ab603b57d6fd835654118df46908f4"],["furry-app/services/user.js","787deb24ccf180577915110cb724473b"],["furry-app/style/angular-material-min.css","06d4a45783f8ec3d08888d57a208decd"],["furry-app/style/style.css","fee7ba47c957fb68be17144f5156ca20"],["furry-app/templates/article-details.html","a0ce85f19edcf70dc7d68ea2674aacd9"],["furry-app/templates/articles.html","0a83bdd94d4bfada0e0fe459910d470d"],["furry-app/templates/contact.html","7b5b1b7bee1571f28025c263ad0480cf"],["furry-app/templates/form-login.html","5d7df9d0e4f3bb489f6ccfc66692044b"],["furry-app/templates/form-register.html","aaa76de19a727f6c20ec0c2b16f07901"],["furry-app/templates/home-page.html","befc364b1f1018cfe436f5e0da064197"],["furry-app/templates/my-account.html","57730b26d494a6380189e95fcb414170"],["furry-app/templates/order-cart.html","f0a23c899efd64aeb763e447e7842b17"],["furry-app/templates/search-bar.html","73a5dfe41cb5a689ae092c4cfa286670"],["furry-app/templates/special-offer.html","31a2c70580aae0f323bdc4d4c2ee87ac"],["index.html","cbacfb53c564a3ecb7d428282676e789"],["libs/angular-animate.js","fd2229904afd9722cf8c5bcec3a77203"],["libs/angular-aria.js","3032358c65ee2a6af41348a97eb12635"],["libs/angular-cookies.js","ec6e16ef76936ed6589c56eb4c512a16"],["libs/angular-jwt.js","4d82d89da4e18617b3cd912eec46d639"],["libs/angular-loader.js","012a362a6191b1d6f71b5c926fc1edd2"],["libs/angular-material-min.js","df4f4753b13c2c1223787fc732e599d7"],["libs/angular-message-format.js","aade408c3ad374aaf9fb64b9f8b55bff"],["libs/angular-messages.js","b72b4247e63a405dde7b9c4e24c34bb5"],["libs/angular-mocks.js","0d0b103ee9c4b0f12b5bed21b4a3733c"],["libs/angular-parse-ext.js","bcdfefcb8bf7fbb61856358eda0e5c5a"],["libs/angular-resource.js","4274f7979e1fbf9531fe3a1e1190a30f"],["libs/angular-route.js","2acc9969e4e0a81a94ff2d780234c17f"],["libs/angular-sanitize.js","018cb4cd78803daa0397fcd51a26c544"],["libs/angular-touch.js","008093ee602a4c3c50746624e49e8b5e"],["libs/angular-translate-loader-static-files.js","b0f5bf946b271a565fdad77ae5b4782e"],["libs/angular-translate-loader-url.js","ecceee25c35b67ec16828a9d162fc739"],["libs/angular-translate.js","1e2e2b27030bd753adfd4807e5539f84"],["libs/angular-ui-router.js","15b3c7720e58dc075761915850eaee8f"],["libs/angular.js","29115c1a5c1ccede324957729e808138"],["manifest.json","dac8ab92863aec98b1f54d267c7d51fc"],["sw-precache.config.js","7581a3b1ba207b8b10e0d26b890eddc9"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







