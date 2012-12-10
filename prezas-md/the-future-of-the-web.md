<!-- title : The future of the web... -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Overall presentation of all the new stuffs arriving in our browsers. -->
<!-- keywords : html5, svg, canvas, video, audio... -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/the-future-of-the-web.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# The future of the web...

<!-- toc -->

<!-- slide : introduction -->

#### This is heavy

<!-- .list.incremental -->
The web is evolving at a **very fast** pace these days... The organizations and their process **have** **changed**. The language and the platform **changes** **too**. Today, we'll review which features are comming. Some of theme are **quite new**. Some of theme are **small but very useful**. Some of them **look like what we already had**.

<!-- slide : cover -->

## History

<!-- slide -->

### Back to the 90s

<!-- .list.incremental -->
If you remember well, the **first version of HTML** was created along with the World Wide Web by Tim Berners-Lee **in the early 90s**.

<!-- .list.incremental -->
The **version 2.0** of the markup language came in **1995 as RFC 1867**.

<!-- .list.incremental -->
Two years later, in **January 1997** came the **version 3.2**, the first one published as a W3C recommandation. By the **end of the year** of 1997 the **4.0 version** was published in 3 variations : strict, transitionnal and frameset. In 1999, the 4.01 version came out. Very similar to 4.0, this version corrects some errata.

<!-- slide -->

### The WHATWG rises

<!-- .list.incremental -->
**At the beginning of the 00s**, **W3C decided to abandon HTML** in favor of **XML based technologies**.

<!-- .list.incremental -->
It was the rising **XHTML**. It's a **reformulation of HTML 4.01** using XML 1.0. Two versions came out : XHTML 1.0 and XHTML 1.1.

<!-- .list.incremental -->
This decision did not really convinced every parties. That's why **in 2004, the WHATWG** was formed by **Apple, Opera and Mozilla** to **expand work on HTML**.

<!-- slide -->

### Back to the future

<!-- .list.incremental -->
**In 2007**, **W3C abandonned XHTML 2** and decided to **work with WHATWG**. Together, they adopted what **WHATWG early work** as the **starting point for HTML5**.

<!-- slide -->

### 88 specs per hour...

<!-- .list.incremental -->
At the beginning, there was only **one specification** for HTML5. In order to simplify edition and focus, a lot of features were moved to **separate specifications**.

Just like HTML5, CSS3 was split into a lot of separate specifications.

<!-- .list.incremental -->
Nowadays, HTML5 is more a **commercial term**, much like Web 2.0. It references the **spec itself** and all the other **new web technologies around** such as **CSS3**, **JavaScript APIs** and **other features**...

<!-- slide : cover -->

## Semantics

<!-- slide : cover -->

### Tags

You already know them all, don't you. If not, just try this [awesome HTML5 quiz](http://thehtml5quiz.com/).

<!-- slide -->

### Forms

We already talked about forms new features. Here's a recap of the new types of input :

<!-- .incremental -->
```html5
<!-- New input types -->
E-mail:  <input type="email">
URL:     <input type="url">
Number:  <input type="number"min="1" max="10">
Tel:     <input type="tel">
Range:   <input type="range"min="1" max="10">
Color:   <input type="color">
Date:    <input type="date"min="2010-08-14">
Time:    <input type="time">
Search:  <input type="search" results="10">
```

If the browser doesn't support the new input, it just falls back to a simple text input. Some of these example do not provide any kind of validation but the virtual keyboard on mobile devices adapts itself to the context.

We also have new attributes that can be used on all of them

<!-- .incremental -->
```html5
<!-- New attributes -->
Required:     <input type="text" required>
Placeholder:  <input type="text" placeholder="Some input indications...">
Autocomplete: <input type="text" autocomplete="off">
Pattern:      <input type="text" pattern='^p[0-9]{5}$'>
Readonly:     <input type="text" readonly>
Spellcheck:   <input type="text" spellcheck="false">
```

<!-- slide -->

### Data attributes

Data attributes are a very simple feature but a lot of framework and libraries really needed it. Before that, they were forced to abuse HTML and do non-standard stuffs.

The usage is really simple. You just put attributes starting with `data-` on your HTML tags. You can access them with a new JS DOM property : `dataset`.

Let's take a simple HTML example :

<!-- .incremental -->
```html5
<blockquote id="mph" data-quote-author="Dr. Emmett Brown">If my calculations are correct, when this baby hits 88 miles per hour... you're gonna see some serious shit.</blockquote>
```

Let's retrieve the DOM node.

<!-- .incremental -->
```javascript
var mph = document.getElementById('mph');
```

Now we can retrieve the value of the data attribute. Notice that the HTML uses a snake case and the JS DOM property uses the camel case equivalent.

<!-- .incremental -->
```javascript
console.log(mph.dataset.quoteAuthor);     // => "Dr. Emmett Brown"
console.log(mph.dataset['quoteAuthor']);  // => "Dr. Emmett Brown"
console.log(mph.dataset['quote-author']); // => undefined
```

It's a live property you can modify, add and remove data attributes like this :

<!-- .incremental -->
```javascript
// Edit
mph.dataset.quoteAuthor = 'Marty Mc Fly';
// Add
mph.dataset.quoteTheme = 'Sciences';
// Remove
delete mph.dataset.quoteAuthor;
```

<!-- slide -->

### Menus

This feature allows users to create menus and even add stuffs to context menu. It isn't not ready yet in current browsers. Firefox started some work on it though.

<!-- .incremental -->
```html
<menu type="toolbar">
  <label for="goto">Go to...</label>
  <menu label="Go">
    <select id="goto">
      <option value="" selected="selected"> Select site: </option>
      <option value="http://www.mozilla.org/">Mozilla</option>
      <option value="http://www.opera.com/">Opera</option>
    </select>
    <span><input type="submit" value="Go"></span>
  </menu>
</menu>
```

<!-- .incremental -->
```html
<menu type="context" id="supermenu">
  <menuitem label="rotate" icon="./arrow_rotate_clockwise.png"></menuitem>
  <menuitem label="resize" icon="./image-resize.png"></menuitem>
  <menu label="share">
    <menuitem label="twitter"></menuitem>
    <menuitem label="facebook"></menuitem>
  </menu>
</menu>
```

<!-- .useful-links -->
* https://bug617528.bugzilla.mozilla.org/attachment.cgi?id=554309
* http://www.w3.org/TR/html5/the-menu-element.html#the-menu-element

<!-- slide : cover -->

## Offline

<!-- slide -->

### Web storage

Web storage is just a simple a key-value store. It allows developper to store simple information on visitors' browser.

There's two kinds of web storage : local and session. Both works with the same API. Here's an example :

<!-- .incremental -->
```javascript
// Set
localStorage.setItem('back to date', '1955-11-05T22:04:00.000Z');
// also works with sessionStorage.setItem(key, value);
```

<!-- .incremental -->
```javascript
// Get
var backToDateStr = localStorage.getItem('back to date');
// also works with sessionStorage.getItem(key);
var backToDate = new Date(backToDateStr);
console.log(backToDate.getFullYear()); // => 1955
```

<!-- .incremental -->
```javascript
// Remove
localStorage.removeItem('back to date');
// also works with sessionStorage.removeItem(key);
```

The only difference between local and session is the way data are kept on the disk. Session is scoped to a tab and will be lost after tab close or browser restart.

<!-- slide -->

### Appcache

Appcache is the only way you can deliver a proper offline web experience.

It works using a manifest. You reference it in your HTML pages like this :

<!-- .incremental -->
```html
<html manifest="manifest.appcache">
<!--  ... -->
</html>
```

The file can optionnaly contain 3 sections : `CACHE`, `NETWORK` and `FALLBACK`. Stuffs in `CACHE` will be stored. Stuffs in `NETWORK` won't. You can use aliases `*` in this section. The `FALLBACK` section provides alternatives when you're offline.

Adding a version in comments is advised to force updates.

<!-- .incremental -->
```
# File must be served with a MIME type text/cache-manifest

CACHE MANIFEST
# v3

CACHE
index.html
index.css
index.js

NETWORK
/api
friends.html

FALLBACK
friends.html no-connection.html
```

<!-- slide -->

### How does it work?

Here's how it works in a few steps :

<!-- .incremental -->
* User visits an appcache enabled page
* Browser reads the manifest and downloads all the resources.
* User visits the page again
* Browser displays the offline version
* If online, the browser reads the manifest and updates the resources if needed.

Be careful, the usage of this feature has some gotchas. If you read the steps correctly, it means that to view the updates of a page you have to browse it twice.

<!-- slide -->

### Is that all?

Appcache also provides some other features to interact with it.

You can use the global object `applicationCache`. It has a useful `status` property :

<!-- .incremental -->
```javascript
console.log(applicationCache.status);
// UNCACHED: 0, IDLE: 1, CHECKING: 2
// DOWNLOADING: 3, UPDATEREADY: 4, OBSOLETE: 5
```

You can also call methods on this object.

<!-- .incremental -->
```javascript
applicationCache.update();
applicationCache.swapCache();
applicationCache.abort();
```

The last way to interact with appcache is to use the different events that are fired...

<!-- .incremental -->
```javascript
appCache.addEventListener('cached', handleCacheEvent, false);
appCache.addEventListener('checking', handleCacheEvent, false);
appCache.addEventListener('downloading', handleCacheEvent, false);
appCache.addEventListener('error', handleCacheError, false);
appCache.addEventListener('noupdate', handleCacheEvent, false);
appCache.addEventListener('obsolete', handleCacheEvent, false);
appCache.addEventListener('progress', handleCacheEvent, false);
appCache.addEventListener('updateready', handleCacheEvent, false);
```

<!-- .useful-links -->
* http://www.html5rocks.com/en/tutorials/appcache/beginner/
* http://appcachefacts.info/
* http://www.alistapart.com/articles/application-cache-is-a-douchebag/

<!-- slide -->

### IndexedDB

<!-- .list.incremental -->
IndexedDB is an **asynchronous API** for **client side storage**. Unlike Web storage, it allows developpers to store structured data such as **JavaScript objects** or **binary files**.

<!-- slide -->

You can have many databases per origin. In a database you have object stores in which you store objects.

### IndexedDB example

```javascript
var bttf;

indexedDB.open = function () {
  var request = indexedDB.open('bttf');
  request.onsuccess = function (e) {
    bttf = e.target.result;

    var trs = bttf.transaction(['time-travels'], 'readwrite');
    var store = trs.objectStore('time-travels');

    var cursorRequest = store.openCursor();
    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;
      if(!!result == false) {
        return;
      }
      console.log(result.value);
      result.continue();
    };
  };
};
```

The asynchronous aspect of the API can be challenging but the feature is really powerful. Don't hesitate to dive into the details...

<!-- .useful-links -->
* http://www.html5rocks.com/en/tutorials/indexeddb/todo/
* https://developer.mozilla.org/en-US/docs/IndexedDB

<!-- slide : cover -->

## Realtime communications

<!-- slide -->

### Websockets

<!-- .list.incremental -->
Websocket allows **full-duplex** communications **between browsers and servers**. Once the connection is established, **no headers** are exchanged, just the datas.

Here's an example of the connection request which ressembles HTTP.

<!-- .incremental -->
```http
GET /timeChat HTTP/1.1
Host: bttf.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat
Sec-WebSocket-Version: 13
Origin: http://bttf.com
```

Here's an example of the response.

<!-- .incremental -->
```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

<!-- slide -->

#### Websocket example

Now we'll see how we can do that using JavaScript and a simple example.

<!-- .incremental -->
```javascript
var timeChatSocket = new WebSocket('ws://bttf.com/timeChat');
```

<!-- .incremental -->
```javascript
timeChatSocket.send("Hey Doc it's Marty. I'm in 1955!");
```

<!-- .incremental -->
```javascript
timeChatSocket.addEventListener('message', function (event) {
  console.log(event.data);
}, false);
```

<!-- .useful-links -->
https://developer.mozilla.org/en-US/docs/WebSockets/Writing_WebSocket_client_applications
http://www.html5rocks.com/en/tutorials/websockets/basics/

<!-- slide -->

### Server sent events

<!-- .list.incremental -->
Server sent events allows **one-way** and **real time** **from servers to browsers**. You can onsider this as as standard way to do **data streaming** from the server.

Let's see how we can use it using JavaScript and a simple example.

<!-- .incremental -->
```javascript
var travelEvents = new EventSource('./travel-events');
```

<!-- .incremental -->
```javascript
travelEvents.addEventListener('message', function (event) {
  console.log(event.data);
}, false);
```

<!-- .useful-links -->
http://html5doctor.com/server-sent-events/
http://www.html5rocks.com/en/tutorials/eventsource/basics/

<!-- slide -->

### XHR II

There are many new features in the new version of the `XMLHttpRequest` :

<!-- .incremental -->
* Download and send blobs, arraybuffers...
* Listen to upload progress event
* Connect to different a different origin using CORS

<!-- .useful-links -->
http://www.html5rocks.com/en/tutorials/file/xhr2/

<!-- slide -->

### Cross origin resource sharing

<!-- .list.incremental -->
This is a **new specification** that provides **standards headers** to allow **cross origin** resource sharing.

The most useful and know header of this spec is this one :

<!-- .incremental -->
```http
Access-Control-Allow-Origin: delorean.com
```

If your server has this header, AJAX request from `delorean.com` pages will be possible.

The spec also provides informations on other new headers :

<!-- .incremental -->
```http
Access-Control-Allow-Credentials: ...
Access-Control-Expose-Headers: ...
Access-Control-Max-Age Response: ...
Access-Control-Allow-Methods: ...
Access-Control-Allow-Headers: ...
Access-Control-Request-Method: ...
Access-Control-Request-Headers: ...
```

Feel free to dig this out...

<!-- .useful-links -->
http://www.w3.org/TR/cors/

<!-- slide -->

### Web workers

<!-- .list.incremental -->
**JavaScript is mono-threaded**. Every **computation costs** and freezes the page. It prevents visitors from using it.

<!-- .list.incremental -->
A web worker is a **separate JS environment**. This environment have **no access to the DOM**. It can only **send messages** and **receive messages**.

<!-- slide -->

### Web worker example

In the web page, you declare your worker. You listen for messages on it.

<!-- .incremental -->
```javascript
var cryptoWorker = new Worker('crypto.js');
cryptoWorker.addEventListener('message', function (event) {
  console.log(event.message);
}, false);
```

You can send messages to your worker.

<!-- .incremental -->
```javascript
cryptoWorker.postMessage('Secret message from the past');
```

The script file `crypto.js` of your worker will receive and send messages using the global `self` object.

<!-- .incremental -->
```javascript
self.addEventListener('message', function (event) {
  var message = event.data,
      cryptedMessage;
  // Doing heavy computations on message...
  self.postMessage(cryptedMessage);
}, false);
```

<!-- .useful-links -->
* https://developer.mozilla.org/en-US/docs/DOM/Using_web_workers

<!-- slide : cover -->

## Files and hardware

<!-- slide -->

### Geolocation

<!-- .list.incremental -->
Like many other new APIs, the geolocation API is **asynchronous** and allow web developers to retrieve visitors **geoposition**.

Here's a usage example :

<!-- .incremental -->
```javascript
navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.accuracy);
  console.log(position.latitude);
  console.log(position.longitude);
  console.log(position.speed);
  console.log(position.altitude);
  console.log(position.altitudeAccuracy);
});
```

You could also want to be informed each time the position changes... Here's how :

<!-- .incremental -->
```javascript
navigator.geolocation.watchPosition(function (position) {
  console.log(position);
});
```

<!-- .useful-links -->
* http://www.html5rocks.com/en/tutorials/geolocation/trip_meter/?redirect_from_locale=fr

<!-- slide -->

### Device orientation

Device orientation works with events. You can listen to `deviceorientation` like this :

```javascript
window.addEventListener('deviceorientation', function (event) {
  console.log(event.absolute);
  console.log(event.alpha);
  console.log(event.beta);
  console.log(event.gamma);
}, false);
```

<!-- .useful-links -->
https://developer.mozilla.org/en-US/docs/Detecting_device_orientation

<!-- slide -->

### Fullscreen

The fullscreen API allows web developers to go fullscreen on any element of the page.

Here's a simple example.

```javascript
var div = document.querySelector('#my-div');
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    div.requestFullscreen();
  }
}, false);
```

<!-- .useful-links -->
* http://www.w3.org/TR/fullscreen/
* https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode

<!-- slide -->

### Media Capture

This API allows web developers to receive video and/or audio from visitors web browser.

Here's a simple example.

```javascript
navigator.getUserMedia({video: true, audio: true}, function (stream) {
  var video = document.getElementById('video');
  video.src = source;
}, function (error) {
  console.log(error);
});
```

<!-- .useful-links -->
* http://shinydemos.com/photo-booth
* http://www.html5rocks.com/en/tutorials/getusermedia/intro/
* http://www.w3.org/TR/mediacapture-streams/#idl-def-MediaStreamConstraints

<!-- touch events, drag and drop -->

<!--

<!-- slide : cover -->

<!--

## CSS3

selectors
fonts
columns
flexbox
grid layout
colors
gradients
background
transition
transform
animation
filter effects
calc
box-shadow
media queries
feature queries
supports
regions
viewport units
variables -->

<!-- slide : cover -->

## New APIs...

<!-- slide -->

### Page visibility

The Page visibility API allows web developers to know when a page is visible or in focus.

```javascript
document.addEventListener('visibilitychange', function () {
  console.log(document.visibilityState);
}, false);
```

<!-- .useful-links -->
* https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API
* http://www.w3.org/TR/page-visibility/

<!-- slide -->

### History API

The History API allows web developers to manipulate the visitor history without reloading the page. Using that, we can finally implement proper back button an bookmarks with AJAX.

Here's an example on how you can add stuffs into the history.

<!-- .incremental -->
```javascript
// The first object is user defined
history.pushState({}, 'My page', 'my-page.html');
// Same goes for history.replaceState(obj, title, url)
```

Each time a visitor clicks on the back button or `history.back()` is called with JavaScript, the `popstate` event is triggered...

<!-- .incremental -->
```javascript
window.addEventListener('popstate', function(event) {
  console.log('Back button detected...');
  console.log('State object was ' + JSON.stringify(event.state));
}, false);
```

<!-- .useful-links -->
* https://developer.mozilla.org/en-US/docs/DOM/Manipulating_the_browser_history
* http://html5doctor.com/history-api/

<!-- slide : cover -->

## Graphics and multimedia

<!-- slide -->

### Request animation frame

If you want to develop some games, you must forget about `setInterval`. With `requestAnimationFrame` you can have a callback called up to 60 times per second.

It's synchronized with CSS transitions and SVG SMIL. The big plus is that when the browser is not visible, the callback is not called. It's better for CPU, GPU, memory and battery ;-)

Note that you have to manually call the `requestAnimationFrame` to loop.

```javascript
(function animloop(timestamp) {
  requestAnimationFrame(animloop);
  renderMyGameState(timestamp);
})();
```

<!-- .useful-links -->
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
* https://developer.mozilla.org/fr/docs/DOM/window.requestAnimationFrame

<!-- slide -->

### Canvas 2D

Canvas is a new way to draw pixels on a webpage. It's well suited for games.

First, you'll need a `canvas` tag.

<!-- .incremental -->
```html
<canvas id="canvas" width="300" height="300"></canvas>
```

You'll also need to create a context.

<!-- .incremental -->
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
```

Now that you have your context, you can draw stuffs in it...

<!-- .incremental -->
```javascript
// Draw a rectangle
ctx.fillStyle = '#BADA55';
ctx.fillRect (20, 10, 400, 300);
```

You have a lot of methods on a context :

<!-- .incremental -->
* `arc`, `arcTo`, `beginPath`, `bezierCurveTo`, `clearRect`, `clip`, `closePath`, `createImageData`, `createLinearGradient`, `createPattern`, `createRadialGradient`, `drawImage`, `drawCustomFocusRing`, `drawSystemFocusRing`, `fill`, `fillRect`, `fillText`, `getImageData`, `getLineDash`, `isPointInPath`, `lineTo`, `measureText`, `moveTo`, `putImageData`, `quadraticCurveTo`, `rect`, `restore`, `rotate`, `save`, `scale`, `scrollPathIntoView`, `setLineDash`, `setTransform`, `stroke`, `strokeRect`, `strokeText`, `transform`, `translate`

Don't hesitate to experiment an discover their usage...

<!-- .useful-links -->
* https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D
* https://developer.mozilla.org/en-US/docs/HTML/Canvas/Drawing_Graphics_with_Canvas

<!-- slide -->

### Canvas 3D and WebGL

Developing using WebGL and 3D in a canvas is possible and it works great. It is fairly complex to implement. If you want more details, look a the tutorials...

<!-- .useful-links -->
* http://www.webdev20.pl/skins/default/js/demos/solar_system/index.html
* https://developer.mozilla.org/en-US/docs/WebGL/Getting_started_with_WebGL

<!-- slide -->

### SVG

<!-- .list.incremental -->
Unlike canvas, SVG is **vector based**. It is basically an **XML document**. It can be **infinitly zoomed**. Drawings are described as **lines**, **curves** and **shapes**...

<!-- slide -->

### SVG example

Here's and example of an SVG document :

<!-- .incremental -->
```xml
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="600" height="300">
  <title>Simple XML example</title>
  <rect width="200" height="200" x="20" y="40" fill="#BADA55" />
  <circle cx="590" cy="190" r="100" fill="#00F" />
  <line x1="120" y1="140" x2="590" y2="190" stroke="#FFF" />
  <text x="20" y="20" fill="#FFF">My SVG document</text>
</svg>
```

Here's what it looks like :

<!-- .incremental -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="700" height="300">
  <title>Simple XML example</title>
  <rect width="200" height="200" x="20" y="40" fill="#BADA55" />
  <circle cx="590" cy="190" r="100" fill="#00F" />
  <line x1="120" y1="140" x2="590" y2="190" stroke="#FFF" />
  <text x="20" y="20" fill="#FFF">My SVG document</text>
</svg>

<!-- slide -->

### Audio

Simple audio tag is nice for playing music and podcasts. You can specify multiple sources if you want.

```html
<audio controls preload="auto" autobuffer>
  <source src="marty.mp3" />
  <source src="emmet.ogg" />
</audio>
```

<!-- .useful-links -->
* http://html5doctor.com/native-audio-in-the-browser/
* https://developer.mozilla.org/en-US/docs/HTML/Element/audio

<!-- slide -->

### Video

This works a bit like the audio tag. You can specify multiple sources if you want.

```html
<video poster="back-to-the-future.png">
  <source src="back-to-the-future.mp4" type="video/mp4">
	<source src="back-to-the-future.ogv" type="video/ogg">
  <track kind="subtitles" src="back-to-the-future.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="back-to-the-future.sv.vtt" srclang="fr" label="French">
</video>
```

<!-- .useful-links -->
* http://html5doctor.com/the-video-element/
* https://developer.mozilla.org/en-US/docs/HTML/Element/video

<!-- slide -->

### Web audio API

Because the audio tag is really bad for intense CPU work on audio, we need a better solution. Here comes the Web Audio API.

<!-- .list.incremental -->
The Web audio API is still **only available in Chrome for now**. Firefox has started working on it... This API works with **sources**, **nodes** and **destinations**.

<!-- .list.incremental -->
Sources can be the **microphone**, any **sound file** or even an **oscillator**.

<!-- .list.incremental -->
Nodes are just code that **transforms a sound** to another.

Speakers often are the destination of all this stuffs.

Demos speak better than words and code...

<!-- .useful-links -->
* http://www.w3.org/TR/webaudio/
* http://www.html5rocks.com/en/tutorials/webaudio/intro/
* http://patorjk.com/experiments/tones/
* http://chromium.googlecode.com/svn/trunk/samples/audio/samples.html
* http://www.soundstep.com/blog/experiments/jsdetection/
* http://labs.dinahmoe.com/ToneCraft
* http://tonematrix.audiotool.com/

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
