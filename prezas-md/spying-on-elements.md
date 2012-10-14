<!-- title : Spying on elements! -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Introduction to browser events, how to "spy" on the document and its elements by listening to specific events. -->
<!-- keywords : javascript, event, listener, asynchronous -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/spying-on-elements.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# Spying on elements!

<!-- toc -->

<!-- slide -->

## Definition

<!-- .list.incremental -->
An event is a **"message"** **sent by the browser** to inform that the **internal state** of a **DOM object** **has changed**.

DOM objects concerned can be the `window` or any element node of the DOM tree.

<!-- .list.incremental -->
To get these "messages", you must use **listeners**.

<!-- .list.incremental -->
This design pattern is know as the **"observer pattern"**.

<!-- slide : cover -->

## Listeners

<!-- slide -->

There are different ways of listening to events on elements of the DOM. The correct solution is to use the `addEventListener` method directly on the element.

In order to keep the content/behaviour separation, you shouldn't use `onclick`, `onload`... attributes in your HTML code.

If you use IE before version 9, you'll have to deal with their specific method `attachEvent`. Event names a prefixed by `on` and the event object is not passed to your callback, it can be accessed with `window.event`.

### Add

<!-- .incremental -->
```html
<div id="james" onclick="bond()">
<!-- no content/behaviour separation :-( -->
```

<!-- .incremental -->
```javascript
var james = document.getElementById('james');
```

<!-- .incremental -->
```javascript
james.onclick = bond;                         // only one listener :-(
```

<!-- .incremental -->
```javascript
james.addEventListener('click', bond, false); // W3C Standard
```

<!-- .incremental -->
```javascript
james.attachEvent('onclick', bond);           // IE < 9            :-(
```

<!-- .incremental -->
```javascript
var bond = function(ev) {
  ev = ev != null ? ev : window.event;        // IE < 9 needs this :-(
  console.log(ev);
  console.log('My Name is Bond...');
  setTimeout(function() { console.log('...James Bond.'); }, 800);
}
```

<!-- .useful-links -->
* [addEventListener reference (MDN)](https://developer.mozilla.org/en/DOM/element.addEventListener)

<!-- slide -->

### Remove

Same remarks as for adding event listeners, use the W3C standard when you can. Note that you must use the same `function` reference to remove an event listener. Removing an anonymous `function` won't work.

<!-- .incremental -->
```javascript
var james = document.getElementById('james');
```

<!-- .incremental -->
```javascript
div.onclick = null;
```

<!-- .incremental -->
```javascript
div.removeEventListener('click', bond, false);  // W3C Standard
```

<!-- .incremental -->
```javascript
div.dettachEvent('onclick', bond);              // IE < 9         :-(
```

<!-- .useful-links -->
* [removeEventListener reference (MDN)](https://developer.mozilla.org/en/DOM/element.removeEventListener)

<!-- slide -->

### Example

Try to click on the actors with or without maintaining the `ctrl` key down.

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/8Pd2T/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : cover -->

## Types & properties

<!-- slide -->

### Common properties

When you receive an event with your listener, you can access the `event` object. It has several useful properties like `target` or `type`. Some of them are used in special conditions like bubbling, capturing or cancelling. See reference for more details.

<!-- .incremental -->
* `target`
* `type`
* `timeStamp`
* `eventPhase`
* `bubbles`
* `currentTarget`
* `cancelable`
* `defaultPrevented`
* `isTrusted`

<!-- .useful-links -->
* [Event reference (MDN)](https://developer.mozilla.org/en/DOM/event)

<!-- slide -->

### UI Events

UI Events are special kind of events important for window, resources like images or just simple HTML elements.

<!-- .incremental -->
* `load`
* `unload`
* `abort`
* `error`
* `resize`
* `scroll`
* `select`

<!-- .useful-links -->
* [User Interface Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-uievents)

<!-- slide -->

#### Example : `scroll`

Scroll the window with your mouse or using the scrollbars!

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/hd2qL/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : two-columns -->

### Mouse

Mouse events are really popular when dealing with web applications. There's a lot of events available. Understanding the differences between them is not so simple.

When you reveive a mouse event with a listener, you can access mouse specific properties such as cursor position etc... See reference for more details.

Note that `mouseenter` and `mouseleave` are only supported by IE and Opera.

#### Events

<!-- .incremental -->
* `click`
* `dblclick`
* `mousedown`
* `mouseenter`
* `mouseleave`
* `mouseup`
* `mouseover`
* `mousemove`
* `mouseout`

#### Properties

<!-- .incremental -->
* `screenX`
* `screenY`
* `clientX`
* `clientY`
* `ctrlKey`
* `shiftKey`
* `relatedTarget`
* `altKey`
* `metaKey`
* `button`

<!-- .useful-links -->
* [Mouse Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-mouseevents)
* [MouseEvent (MDN)](https://developer.mozilla.org/en/DOM/Event/UIEvent/MouseEvent)

<!-- slide -->

#### Example : Mouse events

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/8vBXX/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : two-columns -->

### Keyboard

Except for `input` and `textarea`, it is often better to listen to keyboard events on the window object. See bubbling/propagation below for more details.

When you reveive a keyboard event with a listener, you can access keyboard specific properties to know which key was pressed etc... See reference for more details.

DOM Event specification level 3 deprecates widely used properties such as `keyCode` or `charCode`. They are replaced by `key` and `char` but have a different behaviour. See reference for more details.

#### Events

<!-- .incremental -->
* `keydown`
* `keypress`
* `keyup`

#### Properties

<!-- .incremental -->
* `altKey`
* `ctrlKey`
* `char` & `charCode`
* `key` & `keyCode`
* `location`
* `metaKey`
* `shiftKey`
* `repeat`
* `locale`

<!-- .useful-links -->
* [Keyboard Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboardevents)
* [KeyboardEvent (MDN)](https://developer.mozilla.org/en/DOM/KeyboardEvent)

<!-- slide -->

#### Example : Keyboard events

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/DGdW2/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : two-columns -->

### Focus

Focus events are often used on HTML forms. Note that getting and losing focus is not only done by mouse clicks. The order in which those different events are fired is not consistent over each browsers. See reference for more details.

#### Events

<!-- .incremental -->
* `blur`
* `focus`
* `focusin`
* `focusout`
* `DOMFocusIn`
* `DOMFocusOut`

#### Properties

<!-- .incremental -->
* `relatedTarget`

<!-- .useful-links -->
* [Focus Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent)

<!-- slide -->

#### Example : Focus events

Click on the two gray input text!.

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/7T238/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide -->

### Forms

These events are specific to HTML forms and are not part of the DOM 3 specification. See reference for more details...

#### Events

<!-- .incremental -->
* `change`
* `submit`
* `reset`

<!-- .useful-links -->
* [DOM Events 2 HTML events (w3c.org)](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-htmlevents)
* [Why form events are not in the DOM Events 3 specification (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#changes-drafts)

<!-- slide -->

### There's more...

Mutation events were a DOM Events level 2 specification. There's a few reason for its deprecation in DOM Events level 3. There's a work in progress to find a replacement. See reference for more details.

In order to go further from just handling simple keyboard events, the `textinput` event is added to handle new ways to input text : speech, handwriting...  See reference for more details.

Composition events are also added to handle specific and special text input. See reference for more details.

<!-- .incremental -->
* Touch gestures
* Device orientation
* Custom events
* Drag n drop
* History
* Message
* Mutation
* TextInput
* Composition
* Wheel

<!-- .useful-links -->
* [Touch Events (w3c.org)](http://www.w3.org/TR/touch-events/)
* [Device Orientation Events (w3c.org)](http://www.w3.org/TR/orientation-event/)
* [Mutation Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mutationevents)
* [Wheel Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents)
* [Text Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-textevents)
* [Composition Event Types (w3c.org)](http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents)

<!-- slide : cover -->

## Bubbling / propagation

<!-- slide -->

### Principle

<!-- .list.incremental -->
When an **event is fired** on an element of the DOM, the event registered **listeners are invoked**. After this step, **most events** **“bubble” up the DOM tree**.

<!-- .list.incremental -->
This behaviour can be used to **improve performances**. Instead of adding N listeners for N sibling elements, just listen to their parent. Because of event propagration your unique listener set on the parent will still receive events fired on children elements.

You can determine if the event you're dealing with has been bubbled to your listener or not with `eventPhase` property.

You can prevent an event from bubbling up the DOM tree by calling `stopPropagation()` on the event.

Bubbling is also called propagation.

<!-- .incremental -->
```javascript
// Determine if the event has bubbled up to the listener
console.log(ev.eventPhase === Event.BUBBLING_PHASE); // true
```

<!-- .incremental -->
```javascript
// Prevents event from "bubbling" up the DOM tree
ev.stopPropagation();
```

<!-- slide -->

### Example : propagation

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/yJGCk/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : cover -->

## Cancellation / prevent&nbsp;default

<!-- slide -->

### Principle

<!-- .list.incremental -->
A lot of **events have a default behaviour**. The most common example is **clicks on links**.

You can determine if the default behaviour of an event can be cancelled using the `cancelable` property.

You prevent an event from firing default behaviour after being handled by your listener by calling `preventDefault()` on the event.

<!-- .incremental -->
```javascript
// Determine if the default behaviour of the event can be cancelled
console.log(ev.cancelable);
```

<!-- .incremental -->
```javascript
// Prevents event from firing default behaviour
ev.preventDefault();
```

<!-- slide -->

### Example : cancellation

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/qptU4/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : cover -->

## Capture

<!-- slide -->

### Principle

When you listen to events on a given element using the W3C standard `addEventListener` method, you can specify if you want to capture events.

<!-- .list.incremental -->
A **listener with capture** will **receive events** **from children elements** **BEFORE** they receive it themselves.

<!-- .incremental -->
```javascript
// Set last argument to true to capture
// Doesn't work on IE < 9 with attachEvent
james.addEventListener('click', bond, true);
```

<!-- .incremental -->
```javascript
// Determine if the event was "captured" by the listener
console.log(event.eventPhase === Event.CAPTURING_PHASE); // true
```

<!-- slide -->

### Example

<iframe class="jsfiddle" height="500" src="http://jsfiddle.net/hsablonniere/NABSL/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<!-- slide : cover -->

## jQuery & Events

<!-- slide -->

### How jQuery helps

<!-- .list.incremental -->
In general jQuery makes the **code easier to read** when dealing with events. It's incredibly easier to implement **event delegation**. It also helps a lot to **deal with IE** strange way to manipulate events.

<!-- slide -->

### Classic `on/off`

Since jQuery 1.7, all event listening are done using `on` and `off` methods. If you were used to use `bind/unbind`, `delegate/undelegate` or `live/die`, you should stop and prefer `on` and `off`.

For example a classic `addEventListener` like this :

<!-- .incremental -->
```javascript
var james = document.getElementById('james');
james.addEventListener('click', bond, false);
```

Would be replaced by this jQuery code :

<!-- .incremental -->
```javascript
$('#james').on('click', bond);
```

It also works for many elements.

<!-- .incremental -->
```javascript
var lis = document.querySelectorAll('#actors li');
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', callback, false);
}
```

<!-- .incremental -->
```javascript
$('#actors li').on('click', callback);
```

<!-- .warning -->
The code above creates as many listeners as `li` elements in the DOM. It's usually bad. Be sure to prefer a syntax that leverage event delegation.

You could also use shortcuts like that. There's almost one shortcut for each event type.

<!-- .incremental -->
```javascript
$('#actors li').click(callback);
// same shortcuts for other events
```

When you wanna `removeEventListener`, just call `off` method.

<!-- .incremental -->
```javascript
$('#actors li').off('click', callback);
```

<!-- slide -->

### Event delegation

The new `on` method eases event delegation. Just select the node you want to delegate events to using `$` and pass the targeted children selector as second argument of `on`.

This example would be easy to change to use event delegation.

<!-- .incremental -->
```javascript
// Doesn't uses event delegation
$('#actors li').on('click', callback);
```

Now that's better.

<!-- .incremental -->
```javascript
// Uses event delegation
$('#actors').on('click', 'li', callback);
```

It's almost the same as doing that :

<!-- .incremental -->
```javascript
// More or less equivalent to that
var ul = querySelector('#actors');
ul.addEventListener('click', function(ev) {
  if (ev.target.nodeName === 'LI') {
    callback(ev);
  }
}, false);
```

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
