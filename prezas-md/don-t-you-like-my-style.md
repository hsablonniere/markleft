<!-- title : Don't you like my style? -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Review of the basics of CSS and focus on the important parts. -->
<!-- keywords : css, stylesheet, box-model, float, position, display -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/don-t-you-like-my-style.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# Don't you like my style?

<!-- toc -->

<!-- slide -->

## Definition and syntax

<!-- .list.incremental -->
CSS is a **stylesheet language** used to describe the **look and formatting** of a document written in a markup language. The goal is to enable the **separation** of **document content** from **document presentation**. A CSS document is a set of rules. A rule applies to a specific set of HTML elements identified by a **selector**. The rule contains differents declarations of **property/value** pairs.

<!-- slide -->

### Selectors

CSS selectors allow authors to apply some rules to a selection of matching elements. Each selector has a behaviour to match document elements. Here's some examples :

<!-- .incremental -->
```css
p { /* p elements */ }
```

<!-- .incremental -->
```css
.important { /* elements with class="important" */ }
```

<!-- .incremental -->
```css
#header { /* element with id="header" */ }
```

<!-- .incremental -->
```css
p, .important { /* p elements "AND" elements with class="important" */ }
```

<!-- .incremental -->
```css
p.important { /* p elements with class="important" */ }
```

<!-- .incremental -->
```css
p .important { /* elements with class="important" having p as ancestor */ }
```

<!-- .incremental -->
```css
a:hover { /* a elements being hovered by mouse pointers */ }
```

<!-- slide -->

### Properties and values

Once you defined a selector you can add declarations to your CSS rule. A declaration consists of a property and a value. You can see on the example that you can use different units : px, em, %... Colors can also be declared in different notation. See CSS reference for more details.

```css
/* CSS Examples */
p {
  background: #EEEEEE;
  color: #111;
  font-size: 1.2em;
  text-align: center;
}
  p.important {
  border: 5px solid red;
}
```

<!-- slide -->

## Box model

In CSS, the term "box model" refers to the decoration and layout of an HTML element. We're talking about five properties : `margin`, `border`, `padding`, `height` and `width`. `height` and `width` are just responsible for content.

The example consist of a div element (`#out`) with a thin black border and another div (`#in`) inside it with a blue border. The controls on the right interact with `#in` properties. Play with the different values you'll quickly understand how it works.

<iframe src="../examples/css-box-model.html" height="470" width="800"></iframe>

<!-- .useful-links -->
* [W3C box model schema](http://www.w3.org/TR/CSS2/box.html#box-dimensions)

<!-- slide -->

## Floats

The original usage of floating is to display a paragraph text and a block (ex: an image) inside it and having the text flow around. When used for layouts, it can be really tricky, but once you get it, it's really powerful!

Do you remember the normal flow? Well once an element (`#green` for example) has `float:left` or `float:right` it is removed from the normal flow and pushed to the appropriate side. The other elements will be placed as if `#green` was never in the document and the floating element will float above them. Try it.

The antidote to `float` is `clear`. When an element is cleared it aknowledge the previous floating lines. Reset everything and try to `float:left` `#green` and `#blue` and `clear:left` `#red`.

<iframe src="../examples/css-floats.html" height="470" width="800"></iframe>

<!-- .useful-links -->
* [CSS Floats 101 (A list apart)](http://www.alistapart.com/articles/css-floats-101/)

<!-- slide -->

## Positions

The `position` property can be used to position an element elsewhere on the page. Then `bottom`, `left`, `right` and `top` are useful.

`static` is the default value and let the element in the normal flow.

`fixed` allow an element to be positioned according to the browser window.

`relative` allow and element to be positioned according to its original place.

`absolute` allow and element to be positioned according the first parent that has a position other than `static`. `position:absolute` elements are removed from the normal flow.

If elements are overlapping themselves, you can use `z-index` property. An element with greater value is always in front of an element with a lower value.

If you have `width:auto` on an element, it can be streched using `left` and `right`. The same works with `height`, `bottom` and `top`.

<iframe src="../examples/css-positions.html" height="470" width="800"></iframe>

<!-- .useful-links -->
* [CSS Positionning 101 (A list apart)](http://www.alistapart.com/articles/css-positioning-101/)

<!-- slide -->

## Display

The `display` property can be used to change the way an element flows. That's when the `vertical-align` property comes handy.

`block` is the default value of elements like `div`, `li`...

`inline` is the default value of elements like `span`, `a`...

`inline-block` comes hand for 2 reasons :

<!-- .details -->
* Forcing a block element to flow and behave like text.
* Forcing an inline element to behave like a block element and have dimensions and top/bottom margins and paddings.

`none` removes completely the element from the flow.

If you want to use this to place 2 blocks next to each other horizontally, you'll have a small white space between them. Because these blocks behave like text, any spaces between them will be displayed. Look at useful links below for more details.

<iframe src="../examples/css-display.html" height="470" width="800"></iframe>

<!-- .useful-links -->
* [Fighting the Space Between Inline Block Elements (CSS Tricks)](http://css-tricks.com/fighting-the-space-between-inline-block-elements/)

<!-- slide : cover -->

## CSS3 new magic

<!-- slide -->

### New selectors

CSS3 provides new selectors and new pseudo-classes. Here are a few examples. See CSS3 reference for more details.

<!-- .incremental -->
```css
td:nth-of-type(2n+1) { /* only odd td */ }
```

<!-- .incremental -->
```css
p.important ~ p { /* p elements after p.important elements */ }
```

<!-- .incremental -->
```css
p:not(.important) { /* p elements without class="important" */ }
```

<!-- .useful-links -->
* [CSS3 selectors (W3C)](http://www.w3.org/TR/css3-selectors/)

<!-- slide -->

### New properties and values

CSS3 provides a very large number of new features. A lots of them still need a vendor prefix because the specification is not ready yet (ex: `-webkit-transform`). Here are a few examples. See CSS3 reference for more details.

```css
p {
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
  color: rgba(255, 0, 0, 0.75);
  columns-count: 2;
  opacity: 0.5;
  transform: rotate(7deg);
  transition: opacity 2s;
}

p:hover {
  opacity: 1;
}
```

Vendor prefixes are a really difficult problem. You shouldn't use non standard properties. If you use some that are not yet official, use all the vendor prefix. Don't break the web! Lea Verou wrote a small library to "resolve" the problem. It works great, but think it twice before putting it in production.

<!-- .useful-links -->
* [CSS reference (MDN)](https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference)
* [CSS3 specification (W3C)](http://www.w3.org/TR/css-2010/)
* [Vendor prefixes are not developer-friendly ](http://paulirish.com/2012/vendor-prefixes-are-not-developer-friendly/)
* [TL;DR on Vendor Prefix Drama](http://css-tricks.com/tldr-on-vendor-prefix-drama/)
* [Vendor prefixes, the CSS WG and me](http://lea.verou.me/2012/02/vendor-prefixes-the-css-wg-and-me/)


<!-- slide -->

### Media queries

Media queries are designed to make different styles for one markup and adapt to the variety of devices and screen sizes. This technique is the key to the new movement called responsive web design. The goal is to rearrange and adapt content to the space allowed by the device.

This examples comes directly from this document itself. The different iframes presenting examples look bad on small width. With this code, we only display them from a minimum of `800px`.

It can look strang to hide it and show it again after under certain cases. It's called a **mobile first approach**. Look at useful links for more details.

```css
iframe[width="800"] {
  display: none;
}

@media screen and (min-width: 800px) {
  iframe[width="800"] {
    display: block;
  }
}
```

* [Smashing Magazine](http://www.smashingmagazine.com/)
* [10K an event apart](http://10k.aneventapart.com/)
* [mediaqueri.es](http://mediaqueri.es/)
* [Full frontal](http://2011.full-frontal.org/)

<!-- .useful-links -->
* [CSS media queries specification (W3C)](http://www.w3.org/TR/css3-mediaqueries/)
* [Responsive web design (A list apart)](http://www.alistapart.com/articles/responsive-web-design/)
* [Mobile First Design: Why It’s Great and Why It Sucks (design shack)](http://designshack.net/articles/css/mobilefirst/)

<!-- slide -->

## Frameworks

CSS Frameworks are meant to **ease developement**. Most of them answer the problematic of pure CSS **layout**. A specific kind of "framework" called **reset** helps developer in having consistant default values across web browsers.

* [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/)
* [normalize.css](http://necolas.github.com/normalize.css/)
* [Twitter's Bootstrap](http://twitter.github.com/bootstrap/)
* [Skeleton](http://www.getskeleton.com)
* [HTML5 boilerplate](http://h5bp.com)
* [Foundation](http://foundation.zurb.com/)

<!-- slide -->

## Preprocessors

CSS preprocessors are stylesheets language that add **new features** and/or **simplicity** to CSS original syntax. Using a **client or server side** program, the code is converted to correct CSS.

* [LESS](http://lesscss.org)
* [SASS](http://sass-lang.com)
* [Compass](http://compass-style.org/)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
