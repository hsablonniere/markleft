<!-- title : Asynchronous awesomeness -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Introduction to AJAX and surrounding techniques... -->
<!-- keywords : javascript, asynchronous, ajax, jsonp, history, bookmark -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/asynchronous-awesomeness.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# Asynchronous awesomeness

<!-- toc -->

<!-- slide -->

## Definition

<!-- .list.incremental -->
AJAX stands for **Asynchronous JavaScript + XML**. It is **not a technology** but a **mix of existing technologies** :

<!-- .incremental -->
* (X)HTML/CSS
* DOM
* XML (or JSON)
* XMLHttpRequest
* JavaScript

Nowadays, JSON is often prefered to XML as a data exchange format. It's not a reason to stop calling it AJAX...

<!-- slide -->

## What's the point ?

<!-- .list.incremental -->
The main idea behind the word AJAX is simply the ability to make **asynchronous HTTP requests** between **web page** and **server**. It can be summarized as **update without reload** the whole page.

At the time, it was considered as a new approach to web applications. Probably because it was a good way to improve user experience and interaction design.

<!-- .list.incremental -->
When the term was introduced, well known web sites or features like **Google Suggest** or **Google Maps** were used to **illustrate the idea**.

Because the whole thing is asynchronous, requests are handled in parallel.

<!-- slide -->

## History

<!-- .list.incremental -->
The term AJAX was **coined in 2005** by **Jesse James Garret**. The technologies needed appeared sooner. The key ingredient of this receipe, the **XMLHttpRequest** is older than that. The **concept behind** it was originally created by developers of Outlook Web Access for **Microsoft in 1999** as an ActiveX component. A short time after, a Mozilla implementation was modelled to work like Microsoft's one. It's only in **2006** that **W3C specifications started**.

<!-- .useful-links -->
* [Article that coined the term AJAX by Jesse James Garret in 2005](http://adaptivepath.com/ideas/ajax-new-approach-web-applications)
* [XMLHttpRequest specification (W3C)](http://www.w3.org/TR/XMLHttpRequest/)

<!-- slide : cover -->

## How does it work ?

<!-- slide -->

### Protocol

In order to send/post data to/from server and use the informations on the web page, there's several steps to follow :

<!-- .incremental -->
* Get an XMLHttpRequest instance
* Create the HTTP request
* Listen for `readystatechange`
* Send the request
* Handle the response

<!-- slide -->

### Get an XMLHttpRequest instance

<!-- .incremental -->
```javascript
// W3C standard
var xhr = new XMLHttpRequest();
```

<!-- .incremental -->
```javascript
// IE6 and IE7 for local files
var xhr = new ActiveXObject("Microsoft.XMLHTTP");
```

<!-- .incremental -->
```javascript
// Feature detection needs try/catch
var xhr;
try {
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
} catch(e) {}
```

<!-- .useful-links -->
* [XMLHttpRequest reference (MDN)](https://developer.mozilla.org/en/XMLHttpRequest)

<!-- slide -->

### Create the HTTP request

<!-- .incremental -->
```javascript
var httpMethod = 'GET';   // could be POST, PUT, DELETE...
var url = 'http://localhost/helloWorld.php';
var asynchronous = true;  // false means synchronous
                          // it frozes your browser
                          // until response if received
```

<!-- .incremental -->
```javascript
xhr.open(httpMethod, url, asynchronous);
```

<!-- slide -->

### Listen for `readystatechange`

```javascript
// Listens for readystatechange events
// The callback is fired on each states : LOADING, LOADED, (INTERACTIVE), COMPLETED...
xhr.onreadystatechange = callback;
```

<!-- slide -->

### Send the request

<!-- .incremental -->
```javascript
// Without request body
xhr.open('GET', 'http://localhost/helloWorld.php', true);
xhr.send();
```

<!-- .incremental -->
```javascript
// With request URL encoded body
xhr.open('POST', 'http://localhost/login.php', true);
var requestBody = 'email=john.smith%40world.com&password=123456';
xhr.send(requestBody);
```

<!-- .incremental -->
```javascript
// With request JSON body
xhr.open('POST', 'http://localhost/login.php', true);
var requestBody = '{"email":"john.smith@world.com","password":"123456"}';
xhr.send(requestBody);
```

<!-- slide -->

### Handle the response

```javascript
var callback = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // use xhr.responseText if response is text based format (like JSON)
    // use xhr.responseXML if response is XML
    console.log(xhr.responseText);
  }
};
```

<!-- slide : cover -->

## Limitations

<!-- slide -->

### Same origin policy (SOP)

<!-- .list.incremental -->
For **security reasons**, modern browsers implement the same origin policy. It prevents **attacks such as XSS**.

<!-- .list.incremental -->
An origin is defined by the **scheme, host and port** of a URL. If one of these variables is **different from page URL**, the origin is considered different and the **XHR fails**.

<!-- .list.incremental -->
With **HTML5** and all the new fancy stuffs around it, came a new specification : **XMLHttpRequest level 2** and the ability to do **Cross-Origin Resource Sharing (CORS)**. CORS works with new HTTP response headers.

<!-- .list.incremental -->
There's actually a few **techniques to work around SOP** : using JSONP and iframes.

<!-- .useful-links -->
* [Same origin policy for JavaScript (MDN)](https://developer.mozilla.org/en/Same_origin_policy_for_JavaScript)
* [XMLHttpRequest Level 2 specification (W3C)](http://dvcs.w3.org/hg/cors/raw-file/tip/Overview.html)
* [Cross-Origin Resource Sharing specification (W3C)](http://www.w3.org/TR/XMLHttpRequest2/)
* [Using CORS with All (Modern) Browsers (kendoui.com)](http://www.kendoui.com/blogs/teamblog/posts/11-10-04/using_cors_with_all_modern_browsers.aspx)
* [JSONP (wikipedia)](http://en.wikipedia.org/wiki/JSONP)
* [IFrame Call](http://ajaxpatterns.org/IFrame_Call)

<!-- slide -->

### File upload

<!-- .list.incremental -->
Again for **security reasons**, file uploads **aren't allowed with XHR**.

<!-- .list.incremental -->
New **HTML5 work on XHR** and **FileAPI is in progress** to work around this problem with standards.

<!-- .list.incremental -->
A lot of websites actually provide such capabilities, using **work around techniques** such as **flash** or **iframes**.

<!-- .useful-links -->
* [jQuery plugin to handle AJAX file upload (webappers.com)](http://www.webappers.com/2011/01/24/jquery-file-upload-with-upload-progress-bar/)

<!-- slide -->

### Two way communications

<!-- .list.incremental -->
With AJAX, the clients makes a requests and the server responses. But the **server can't initiate a request** to a client on its own. One simple way to simulate that is to **poll every n seconds**.

Applications attempts to eliminate this limitation through various techniques :

<!-- .incremental -->
* Streaming
* Long polling

<!-- .list.incremental -->
These techniques have a major drawback, each time a request or a response is sent, the informations transfered is often composed of **huge headers** and **small data**.

<!-- .list.incremental -->
The emerging standards such **WebSockets** or Server Sent Events will allow every website to enter a new area like the one we entered with AJAX. WebSockets allow **bi-directional and full-duplex** communications over a single TCP socket.

<!-- .useful-links -->
* [The WebSocket protocol draft (IETF)](http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-17)
* [The WebSocket API (W3C)](http://dev.w3.org/html5/websockets/)

<!-- slide -->

### Search engines

<!-- .list.incremental -->
**Web crawlers** used by search engines **handles JavaScript and AJAX** **but it's far from perfect**. **Be careful with SEO**. It is really important and to **take AJAX into account**.

<!-- .useful-links -->
* [GET, POST, and safely surfacing more of the web](http://googlewebmastercentral.blogspot.com/2011/11/get-post-and-safely-surfacing-more-of.html)

<!-- slide -->

### History and bookmarks

<!-- .list.incremental -->
Because AJAX is often used to modify a part of the page, one could think that browser **back button ** would allow visitors to **view what was displayed before **.

If you don't do anything about it, your website will suffer from bad user experience and you don't really want that.

<!-- .list.incremental -->
The other drawback is bookmarking, in a world wide web where **everyone share anything ** every millisecond, being able to **retrieve state with unique URL ** is fundamental.

<!-- .list.incremental -->
Common **work around technique** is to use **iframes and URL fragments ** (part after # in URL) to provide such features. Look how Gmail does it, it works really well.

<!-- .list.incremental -->
The **HTML5 history API** will allow lots of cool behaviours to **address these problems **. It's currently used by Github's file browser.

<!-- .useful-links -->
* [HTML5 History API (W3C)](http://www.w3.org/TR/html5/history.html)
* [Github's jquery file browser](https://github.com/jquery/jquery)

<!-- slide -->

## jQuery & AJAX

<!-- slide -->

### GET

<!-- .incremental -->
```javascript
// Low level method
$.ajax({
  url: 'http://localhost/helloWorld.php',
  success: function (data) {
    $('h1').html(data);
  }
});
```

<!-- .incremental -->
```javascript
// Short hand method
$.get('http://localhost/helloWorld.php', function (data) {
  $('h1').html(data);
});
```

<!-- .incremental -->
```javascript
// Fast AJAX partial reload
$('h1').load('http://localhost/helloWorld.php');
```

<!-- .useful-links -->
* [$.ajax documentation (jQuery)](http://api.jquery.com/jQuery.ajax/)
* [$.get documentation (jQuery)](http://api.jquery.com/jQuery.get/)

<!-- slide -->

### POST

```javascript
// Low level method
$.ajax({
  type: 'POST',
  url: './vote.php',
  data: 'email=john.smith%40world.com&password=123456',
  success: function (data) { /* some code */ }
});
```

```javascript
// Short hand method
$.post('./login.php',
  'email=john.smith%40world.com&password=123456',
  function (data) { /* some code */ });
```

```javascript
// Short hand method with data object
$.post('./login.php',
  { email: 'john.smith@world.com', password: '123456' },
  function (data) { /* some code */ });
```

<!-- .useful-links -->
* [$.ajax documentation (jQuery)](http://api.jquery.com/jQuery.ajax/)
* [$.post documentation (jQuery)](http://api.jquery.com/jQuery.post/)

<!-- slide : cover -->

### More...

<!-- slide -->

#### Callbacks

```javascript
$.ajax({
  url: 'http://localhost/helloWorld.php',
  complete: function (jqXHR, textStatus) {
    console.log('AJAX response received: ' + textStatus);
  },
  success: function (data) {
    $('h1').html(data);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.error('Error: ' + textStatus);
  }
});
```

<!-- .useful-links -->
* [$.ajax documentation (jQuery)](http://api.jquery.com/jQuery.ajax/)

<!-- slide -->

#### Functional style callbacks

```javascript
$.ajax({
  url: 'http://localhost/helloWorld.php'
})
.always(function (data) {
  $('h1').html(data);
})
.done(function (jqXHR, textStatus) {
  console.log('AJAX response received: ' + textStatus);
})
.fail(function (jqXHR, textStatus, errorThrown) {
  console.error('Error: ' + textStatus);
});
```

<!-- .useful-links -->
* [$.ajax documentation (jQuery)](http://api.jquery.com/jQuery.ajax/)
* [deferred.always documentation (jQuery)](http://api.jquery.com/deferred.always/)
* [deferred.done documentation (jQuery)](http://api.jquery.com/deferred.done/)
* [deferred.fail documentation (jQuery)](http://api.jquery.com/deferred.fail/)

<!-- slide -->

#### Status codes

```javascript
$.ajax({
  url: 'http://localhost/hello-world.php',
  statusCode: {
    404: function (jqXHR, textStatus, errorThrown) {
      console.error('Page could not be found');
    }
  }
});
```

<!-- .useful-links -->
* [$.ajax documentation (jQuery)](http://api.jquery.com/jQuery.ajax/)

<!-- slide -->

#### Script loading

```javascript
$.getScript('helloWorld.js', function (data, textStatus) {
   console.log(data);
   console.log(textStatus);
});
```

<!-- .useful-links -->
* [$.getScript documentation (jQuery)](http://api.jquery.com/jQuery.getScript/)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
