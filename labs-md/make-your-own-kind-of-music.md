<!-- title : Lab : Make your own kind of music -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Experimenting with ajax, history using a music player -->
<!-- keywords : javascript, events, keyboard, mouse, game -->

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet">
<link href="../css/theme-2012-lab.css" rel="stylesheet">
<link href="../css/hljs-github.css" rel="stylesheet">

# Make your own kind of music

<!-- toc -->

![lab-logo](../img/cassettes.jpg)

Welcome to your new lab, here's the instructions for each exercise :

* Read the lesson entirely!!!!
* Identify your learning goals.
* Understand the context.
* Follow the steps and rules carefully.
* Commit **ONLY** the files that are indicated.

You must try to find documentation and solution by yourself. The course contains links to references and a lot of other interesting websites. Don't forget : the web is your friend ;-)

Bon courage...

#### Requirements

* Install [nodejs](http://nodejs.org/). Linux users, just untar the archive and add the bin `node` and `npm` to your path. The packages from repos aren't always recent enough...
* Install the modules. Just go to the project root and type `npm install`.
* Start the server. Just type `node myokom-server` in the project root.
* You should see an ASCII are and the url at which the project can be browsed.
* The project works with ogg files on all major recent browsers. You can use mp3 files but it won't work on Firefox and some others...
* If you need music just try http://www.jamendo.com/fr/. It's a free and creative common. Downloading ogg from the website is tricky, don't hesistate to ask for help.&

## Getting some help (no-jQuery)

### Learning goals

1. Know how to load some HTML using AJAX.

### Context

In this exercise, we'll display some help when the user needs it.

### Steps

* Have a look at `myokom.html`. You'll see a `.help-button` button element.
* Create a file named `myokom-client.js` in the `public` directory.
* Add some code to detect clicks on `.help-button`.
* Add some code to load HTML from `/public/myokom-help.html` using AJAX and replace the content of `.help` with it when the button is clicked.
* If the person clicks on the `.close-help`, just remove the `.help` element.

### Rules

* You **CANNOT** use jQuery.
* Your code **CANNOT** be global.

### Deliveries

<!-- .deliveries -->
* myokom.html
* myokom.css
* navy-blue.png
* next.png
* pause.png
* play.png
* previous.png
* jquery-1.8.2.min.js
* myokom-client.js
* myokom-help.html

## Directories and tracks

### Learning goals

1. Know how to load some JSON using AJAX and jQuery.

### Context

In this exercise, we'll display the directories and the track-list.

### Steps

* Have a look at `myokom.html`. You'll see a `.track-list` element.
* In your `myokom-client.js` file, add a `browseFromUrl` function.
* Listen to the `load` event on the window and use your `browseFromUrl` function.
* In this function, add some code to retrieve the current pathname of the `location` object and load information from the server via AJAX.
* If the pathname is `/`, you'll do a GET on `/browse/`. If the pathname is `/Anitek`, you'll do a GET on `/browse/Anitek`.
* Here's an example of what the informations retrieved in JSON can look like :

```javascript
{
  "dirs": [
    {
      "name":"Anitek",
      "path":"/Anitek"
    },
    /* other directories... */
  ],
  "tracks": [
    {
      "name": "01 - Merlot Downer",
      "path": "/music/Anitek/Tab & Anitek : Project Monarch/01 - Merlot Downer.ogg",
      "metadatas": "/metadatas/Anitek/Tab & Anitek : Project Monarch/01 - Merlot Downer.ogg"
    },
    /* other music files... */
  ]
}
```

* Use this informations and add `.dir` and `.track` elements to the DOM, like this :

```html
<a class="dir" href="/Anitek/">Anitek</a>
<!-- and so on -->
```

* The `data-track-idx` attribute could be useful to go to previous or next track.

```html
<button class="track" data-track-idx="0"><span class="track-name">01 - Merlot Downer</span></button>
<button class="track" data-track-idx="1"><span class="track-name">02 - Dormouse</span></button>
<!-- and so on -->
```

* Keep the informations object in memory, it will be useful after...

### Rules

* You **CAN** use jQuery.
* Your code **CANNOT** be global.

### Deliveries

<!-- .deliveries -->
* myokom.html
* myokom.css
* navy-blue.png
* next.png
* pause.png
* play.png
* previous.png
* jquery-1.8.2.min.js
* myokom-client.js
* myokom-help.html

## Let's play some music

### Learning goals

1. Know how to use event delegation.
1. Know how to use the HTML5 audio tag.

### Context

In this exercise, we'll use events and audio. Clicks on tracks will start playing some sound...

### Steps

* Listen to clicks on `.track` buttons using event delegation.
* When a `.track` button is clicked, use the `.player` audio element and play the sound.
* Don't forget to update the `.current-track .track-title` contents.
* You'll also want to change the `[data-status]` attribute of `.current-track` from `stop` to `play`.

### Rules

* You **CAN** use jQuery.
* Your code **CANNOT** be global.

### Deliveries

<!-- .deliveries -->
* myokom.html
* myokom.css
* navy-blue.png
* next.png
* pause.png
* play.png
* previous.png
* jquery-1.8.2.min.js
* myokom-client.js
* myokom-help.html

## History

### Learning goals

1. Learn knew stuffs from the internet.
1. Know how to use the History API.

### Context

In this exercise, we'll use the History API to prevent "back button" and bookmark problems.

### Steps

* Listen to clicks on `.dir` links and prevent the default behaviour. Use event delegation.
* Use the `href` attribute of the link that was clicked and push a new state on the history (look at documentation links).
* Once you pushed a new state, call your `browserFromUrl` function.
* To complete this history integration, we miss the back button thing. Listen to the event that is fired when someone clicks on the back button and call your `browserFromUrl` function (look at documentation links).

<!-- .useful-links -->
* [Manipulating the browser history (MDN)](https://developer.mozilla.org/en-US/docs/DOM/Manipulating_the_browser_history)
* [MANIPULATING HISTORY FOR FUN & PROFIT (dive into HTML5)](http://diveintohtml5.info/history.html)
* [Pushing and Popping with the History API (HTML5 doctor)](http://html5doctor.com/history-api/)

### Rules

* You **CAN** use jQuery.
* Your code **CANNOT** be global.

### Deliveries

<!-- .deliveries -->
* myokom.html
* myokom.css
* navy-blue.png
* next.png
* pause.png
* play.png
* previous.png
* jquery-1.8.2.min.js
* myokom-client.js
* myokom-help.html

## To infinity and beyond...

This is a *"be awesome"* exercise!

### Learning goals

1. Use your imagination and all you knowledge to implement useful feature correctly.

### Context

In this exercise, we'll add all the missing features and more.

### Quick ideas

* Use all the controls (previous, pause, play, next). Don't forget to use the `[data-status]` attribute on `.current-track`.
* Go to the next song once the current one is finished.
* Modify the CSS (use a `/public/custom-myokom.css` file), change the colors, the layout... Mobile is already handle, maybe a media center style (for big screen TVs) would be awesome.

### Other ideas

* Use the [ID3](http://en.wikipedia.org/wiki/ID3) informations from the tracks. You can retrieve them by doing a GET on the metadatas link retrieved from the informations (previous exercise). For example, doing a GET on `/metadatas/Anitek/Tab%20&%20Anitek%20:%20Project%20Monarch/01%20-%20Merlot%20Downer.ogg` retrieve those informations :

```javascript
{
  "title": "Merlot Downer",
  "artist": ["Anitek"],
  "albumartist": [],
  "album": "Tab & Anitek: Project Monarch",
  "year": "2012-01-10",
  "track": {"no": 1, "of": 0},
  "genre": ["Psychedelic", "Triphop", "Experimental", "Electronica", "Conceptual"],
  "disk": {"no":0, "of":0},
  "picture": {}
}
```

* Use [last.fm API](http://www.lastfm.fr/api/intro) to retrieve informations about artists, albums... You'll have to learn what is JSONP and how to use it.
* Modify the `myokom-server.js` to retrieve the cover art from a JPEG file.
* Add a database to the server...

### Rules

* You **CAN** use jQuery.
* Your code **CANNOT** be global.

### Deliveries

<!-- .deliveries -->
* myokom.html
* myokom.css
* navy-blue.png
* next.png
* pause.png
* play.png
* previous.png
* jquery-1.8.2.min.js
* myokom-client.js
* myokom-help.html
* (custom-myokom.css)
