<!-- title : Parents, children and siblings... -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : This is an introduction to the Document Object Model, its purpose, usage... -->
<!-- keywords : javascript, dom, elements, traversing, manipulation -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/parents-children-and-siblings.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# Parents, children and siblings...

<!-- toc -->

<!-- slide : introduction -->

#### I'll show you features you can't refuse.

Now that we have covered basic and advanced features of the JavaScript language, it's time to move on. We're going to take advantage of our main platform : the browser. We'll learn how to interact with HTML and CSS to make dynamic pages.

<!-- .list.incremental -->
Interacting with a webpage and its resources is done using a tree. It's a bit like a **family tree**. Some nodes representing HTML tags are linked as **parents**, **children**, **brothers** **and** **sisters**. We'll also see how this tree can be **manipulated** especially with **dollars**.

<!-- slide -->

## Definition of the DOM

<!-- .list.incremental -->
DOM stands for **Document Object Model**. It is an **[API](http://en.wikipedia.org/wiki/Api)** that allows access for **HTML and XML documents**. This API provides a **representation of the document** and ways to **retrieve and manipulate** it. It is **cross-platform** and **language-independant**. The DOM is a standard maintained by **W3C**.

The DOM specification has evolved since it's standardization. The current version/level is 3. See links for more informations...

This course is about Web so we'll address JavaScript's implementation but remember that a lot of languages have a DOM implementation.

When a navigator display a web page, the rendering engine parses the HTML code to turn the tags to DOM nodes in a tree called the content tree. After that, the rendering engine takes care of style (external CSS files and style elements) to create the render tree. Then rendering finishes its task with 2 steps : layout and painting. See links for more informations...

<!-- .useful-links -->
* [DOM Levels (MDN)](https://developer.mozilla.org/en/DOM_Levels)
* [How browsers work (HTML5 rocks)](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
* [PHP DOM (php.net)](http://php.net/manual/fr/book.dom.php)
* [C++ DOM (xerces.apache.org)](http://xerces.apache.org/xerces-c/ApacheDOMC++Binding.html)

<!-- slide : cover -->

## Tree representation

<!-- slide : cover -->

### Nodes

<!-- slide -->

#### Definition

<!-- .list.incremental -->
In an **HTML document**, **everything** is **represented** as a **`Node` object**. The different nodes are **organized** in the **DOM tree** with parent/children/sibling **relationships**.

<!-- slide -->

#### Types

There are different types of nodes. The HTML document itself is the root node and is a property of the global `window` object. Every HTML element is represented by a node. Note that text between or inside HTML elements is considered as text nodes. Attributes set on HTML tags are also considered as nodes. Node types are listed as properties on the `Node` object and have an integer value. Here are some examples :

<!-- .incremental -->
* `ELEMENT_NODE` (1)<br>HTML element
* `ATTRIBUTE_NODE` (2)<br>on HTML elements
* `TEXT_NODE` (3)<br>between or inside elements
* `COMMENT_NODE` (8)<br>`<!-- comments -->`
* `DOCUMENT_NODE` (9)<br>root node

<!-- slide : cover -->

#### Properties

On each node, you can access various properties to obtain more informations on the node. Here are a few examples...

<!-- .useful-links -->
* [Node properties reference (MDN)](https://developer.mozilla.org/En/DOM/Node#Properties)

<!-- slide -->

##### `nodeType`

It contains an integer value corresponding to one of the properties of the `Node` object.

```javascript
var doc = document;              // direct access to window property
console.log(doc.nodeType);       // => 9
console.log(Node.DOCUMENT_NODE); // => 9
```

<!-- .useful-links -->
* [Node.nodeType reference (MDN)](https://developer.mozilla.org/en/DOM/Node.nodeType)

<!-- slide -->

##### `nodeName`

It contains a string value. If the node represents an HTML element, its nodeName is the tag name in uppercase. Example : `DIV`, `A` ... For text nodes it returns `#text`. See reference for more details.

<!-- .incremental -->
```html
<div id="vito" class="sicilian">Vito Andolini (Corleone)</div>
<!-- Corleone is his origin village -->
```

<!-- .incremental -->
```javascript
console.log(document.nodeName); // => '#document'
```

<!-- .incremental -->
```javascript
console.log(elt.nodeName);      // => 'DIV'
```

<!-- .incremental -->
```javascript
console.log(txt.nodeName);      // => '#text'
```

<!-- .incremental -->
```javascript
console.log(com.nodeName);      // => '#comment'
```

<!-- .incremental -->
```javascript
console.log(att.nodeName);      // => 'id'
```

<!-- .useful-links -->
* [Node.nodeName reference (MDN)](https://developer.mozilla.org/en/DOM/Node.nodeName)

<!-- slide -->

##### `nodeValue`

Contains the textual value of the node. Element nodes (and the document node) doesn't have a `nodeValue`. Their text contents can be found in one of their children text nodes.

<!-- .incremental -->
```html
<div id="vito" class="sicilian">Vito Andolini (Corleone)</div>
<!-- Corleone is his origin village -->
```

<!-- .incremental -->
```javascript
console.log(document.nodeValue); // => null
```

<!-- .incremental -->
```javascript
console.log(div.nodeValue);      // => null
```

<!-- .incremental -->
```javascript
console.log(txt.nodeValue);      // => 'Vito Andolini (Corleone)'
```

<!-- .incremental -->
```javascript
console.log(com.nodeValue);      // => ' Corleone is his origin village '
```

<!-- .incremental -->
```javascript
console.log(att.nodeValue);      // => 'vito'
```

<!-- .useful-links -->
* [Node.nodeValue reference (MDN)](https://developer.mozilla.org/en/DOM/Node.nodeValue)

<!-- slide -->

##### `attributes`

Excepted for text nodes, every node can have attributes. It's a collection of attribute nodes and can be iterated like an array with a for loop and using its length property.

<!-- .incremental -->
```html
<div id="vito" class="sicilian">Vito Andolini (Corleone)</div>
<!-- Corleone is his origin village -->
```

<!-- .incremental -->
```javascript
console.log(document.attributes);         // => null
```

<!-- .incremental -->
```javascript
console.log(div.attributes.length);       // => 2
```

<!-- .incremental -->
```javascript
console.log(div.attributes[1].nodeName);  // => 'class'
```

<!-- .incremental -->
```javascript
console.log(div.attributes[1].nodeValue); // => 'sicilian'
```

<!-- .incremental -->
```javascript
console.log(txt.attributes);              // => null
```

<!-- .incremental -->
```javascript
console.log(com.attributes);              // => null
```

<!-- .incremental -->
```javascript
console.log(att.attributes);              // => null
```

<!-- .useful-links -->
* [Node.attributes reference (MDN)](https://developer.mozilla.org/en/DOM/Node.attributes)

<!-- slide -->

### Tree Example : HTML

Let's see and example of an HTML document and its DOM tree equivalent.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Corleone Family : HTML to JSON</title>
  </head>
  <body>
    <h1>Corleone Family</h1>
    <div id="vito" class="sicilian">Vito Andolini (Corleone)
      <div id="santino">Santino ("Sonny") Corleone</div>
      <div id="frederico">Frederico ("Fredo") Corleone</div>
      <div id="michael">Michael Corleone</div>
      <div id="constanzia">Constanzia ("Connie") Corleone</div>
    </div>
  </body>
</html>
```

<!-- slide -->

### Tree Example : DOM Tree

<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" class="incremental" width="780" height="480" id="svg2" version="1.1" inkscape:version="0.47 r22583" sodipodi:docname="dom-tree-example.svg"> <g inkscape:groupmode="layer" id="layer2" inkscape:label="c1" transform="translate(0,-572.36218)" style="display:inline"> <rect style="color:#000000;fill:#ffff00;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886" width="740" height="35" x="20.000002" y="592.36218" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="390.12912" y="619.30481" id="text3684"><tspan sodipodi:role="line" id="tspan3686" x="390.12912" y="619.30481" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#document</tspan></text> <g id="g3688-0" transform="translate(-38.588846,639.84797)" /> <text id="text3684-8-8-2-0-8-31-7-6-2-59-8-9-8" y="412.3855" x="65" style="display:inline;font-size:25.18028259000000091px;font-style:normal;font-weight:normal;text-align:start;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve" transform="translate(0,572.36218)"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="412.3855" x="65" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-9-5" sodipodi:role="line">DOCUMENT_NODE</tspan></text> <rect style="display:inline;color:#000000;fill:#ffff00;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-13-6-5" width="35" height="22" x="20" y="396" ry="2.0354629" transform="translate(0,572.36218)" /> </g> <g inkscape:groupmode="layer" id="layer3" inkscape:label="c2" style="display:inline"> <rect transform="translate(0,-572.36218)" ry="3.2382364" y="647.36218" x="20.000002" height="35" width="70" id="rect2886-3" style="color:#000000;fill:#abc837;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" /> <text transform="translate(0,-572.36218)" id="text3684-4" y="674.30481" x="54.993858" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="674.30481" x="54.993858" id="tspan3686-6" sodipodi:role="line">html</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5" width="650" height="35" x="109.99999" y="75" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="434.29916" y="101.48769" id="text3684-8"><tspan sodipodi:role="line" id="tspan3686-9" x="434.29916" y="101.48769" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">HTML</tspan></text> <text id="text3684-8-8-2-0-8-31-7-6-2-59-8-6" y="412.3855" x="356.6875" style="font-size:25.18028259px;font-style:normal;font-weight:normal;text-align:start;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="412.3855" x="356.6875" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-1" sodipodi:role="line">ELEMENT_NODE</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-13-3" width="35" height="22" x="311.6875" y="396" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2-59-8-9" y="454.3855" x="65" style="font-size:25.18028259px;font-style:normal;font-weight:normal;text-align:start;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="454.3855" x="65" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-9" sodipodi:role="line">DOCUMENT_TYPE_NODE</tspan></text> <rect style="color:#000000;fill:#abc837;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-13-6" width="35" height="22" x="20" y="438" ry="2.0354629" /> </g> <g inkscape:groupmode="layer" id="layer4" inkscape:label="c3" style="display:inline"> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3" width="158" height="35" x="109.99999" y="130" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="188.6127" y="156.52457" id="text3684-8-8"><tspan sodipodi:role="line" id="tspan3686-9-7" x="188.6127" y="156.52457" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">HEAD</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-5" width="472" height="35" x="288" y="130" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="544.8689" y="156.50612" id="text3684-8-8-7"><tspan sodipodi:role="line" id="tspan3686-9-7-3" x="544.8689" y="156.50612" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">BODY</tspan></text> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,163.48,-16.02002)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-9" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,446.79445,283.97998)" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;text-align:start;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Bitstream Vera Sans" x="588.81445" y="440.2312" id="text3684-8-8-2-0-8-31-6-1"><tspan sodipodi:role="line" x="588.81445" y="440.2312" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" id="tspan3106">TEXT_NODE</tspan><tspan sodipodi:role="line" x="588.81445" y="463.9812" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" id="tspan3110">(with whitespaces)</tspan></text> </g> <g inkscape:groupmode="layer" id="layer5" inkscape:label="c4" style="display:inline"> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-4" width="69" height="35" x="198.99998" y="184" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="232.65111" y="208.30957" id="text3684-8-8-6"><tspan sodipodi:role="line" id="tspan3686-9-7-1" x="232.65111" y="208.30957" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">META</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2" width="69" height="35" x="109.99999" y="184" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="144.87572" y="208.28174" id="text3684-8-8-2"><tspan sodipodi:role="line" id="tspan3686-9-7-9" x="144.87572" y="208.28174" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">TITLE</tspan></text> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-0" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,74.479984,37.97999)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,29.979991,10.97999)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,118.97998,10.97999)" /> </g> <g inkscape:groupmode="layer" id="layer6" inkscape:label="c5" style="display:inline"> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-1" width="69" height="35" x="109.99999" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="144.59741" y="263.17969" id="text3684-8-8-2-0-8-31-6"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-6" x="144.59741" y="263.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> <text id="text3684-8-8-2-0-8-31-7-6-2-59-8-6-1" y="412.3855" x="588.81445" style="font-size:25.18028259px;font-style:normal;font-weight:normal;text-align:start;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="412.3855" x="588.81445" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-1-5" sodipodi:role="line">TEXT_NODE</tspan></text> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-13-3-9" width="35" height="22" x="543.81445" y="396" ry="2.0354629" /> </g> <g inkscape:groupmode="layer" id="layer7" inkscape:label="c6" style="display:inline"> <rect ry="3.2382364" y="184" x="370" height="35" width="390" id="rect2886-5-3-4-5" style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="563.86273" y="210.48769" id="text3684-8-8-6-0"><tspan sodipodi:role="line" id="tspan3686-9-7-1-9" x="563.86273" y="210.48769" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">DIV</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8" width="62" height="35" x="288" y="184" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="319.78073" y="210.48769" id="text3684-8-8-2-0"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2" x="319.78073" y="210.48769" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">H1</tspan></text> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,204.48001,10.97998)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1-0" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,245.48,37.97999)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1-0-3" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,450.48,10.97998)" /> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-6" width="35" height="22" x="378" y="210.5" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2-59" y="228.625" x="395.55566" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="228.625" x="395.55566" id="tspan3686-9-7-9-2-3-88-2-7-8-78" sodipodi:role="line">id</tspan></text> <text id="text3684-8-8-2-0-8-31-7-6-2-59-8" y="454.3855" x="356.6875" style="font-size:25.18028259px;font-style:normal;font-weight:normal;text-align:start;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;text-anchor:start;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="454.3855" x="356.6875" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6" sodipodi:role="line">ATTRIBUTE_NODE</tspan></text> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-13" width="35" height="22" x="311.6875" y="438" ry="2.0354629" /> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-6-2" width="60" height="22" x="433" y="210.5" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2-59-1" y="228.625" x="462.89331" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="228.625" x="462.89331" id="tspan3686-9-7-9-2-3-88-2-7-8-78-7" sodipodi:role="line">class</tspan></text> </g> <g inkscape:groupmode="layer" id="layer8" inkscape:label="c7" style="display:inline"> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4" width="62" height="35" x="288" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="319.09741" y="263.17969" id="text3684-8-8-2-0-8-31"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88" x="319.09741" y="263.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> </g> <g inkscape:groupmode="layer" id="layer9" inkscape:label="c8" style="display:inline"> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-2" width="62" height="35" x="698" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="727.86273" y="265.4877" id="text3684-8-8-2-0-8-7"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-2" x="727.86273" y="265.4877" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">DIV</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-8" width="62" height="35" x="616" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="645.86273" y="265.4877" id="text3684-8-8-2-0-8-1"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-5" x="645.86273" y="265.4877" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">DIV</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-6" width="62" height="35" x="534" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="563.86273" y="265.4877" id="text3684-8-8-2-0-8-2"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-9" x="563.86273" y="265.4877" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">DIV</tspan></text> <rect style="color:#000000;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-89" width="62" height="35" x="452" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="481.8627" y="265.4877" id="text3684-8-8-2-0-8-3"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-8" x="481.8627" y="265.4877" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">DIV</tspan></text> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-5" width="62" height="35" x="370" y="239" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="401.09741" y="263.17969" id="text3684-8-8-2-0-8-31-0"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-0" x="401.09741" y="263.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1-0-1" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,409.48,92.97999)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1-0-0" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,491.48,92.97999)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1-0-8" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,573.48,92.97999)" /> <path sodipodi:type="arc" style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="path4253-2-7-1-0-8-5" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,614.48,65.81332)" /> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2" width="35" height="22" x="458" y="269" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2" y="287.125" x="475.55566" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="287.125" x="475.55566" id="tspan3686-9-7-9-2-3-88-2-7-8" sodipodi:role="line">id</tspan></text> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-1" width="35" height="22" x="540" y="269" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2-4" y="287.125" x="557.55566" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="287.125" x="557.55566" id="tspan3686-9-7-9-2-3-88-2-7-8-1" sodipodi:role="line">id</tspan></text> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-7" width="35" height="22" x="622" y="269" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2-6" y="287.125" x="639.55566" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="287.125" x="639.55566" id="tspan3686-9-7-9-2-3-88-2-7-8-7" sodipodi:role="line">id</tspan></text> <rect style="color:#000000;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7-7-2-0" width="35" height="22" x="704" y="269" ry="2.0354629" /> <text id="text3684-8-8-2-0-8-31-7-6-2-5" y="287.125" x="721.55566" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" xml:space="preserve"><tspan style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold" y="287.125" x="721.55566" id="tspan3686-9-7-9-2-3-88-2-7-8-77" sodipodi:role="line">id</tspan></text> </g> <g inkscape:groupmode="layer" id="layer10" inkscape:label="c9" style="display:inline"> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-7" width="62" height="35" x="452" y="300" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="483.09741" y="324.17969" id="text3684-8-8-2-0-8-31-7"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-2" x="483.09741" y="324.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-2" width="62" height="35" x="534" y="300" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="565.09741" y="324.17969" id="text3684-8-8-2-0-8-31-5"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-26" x="565.09741" y="324.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-4" width="62" height="35" x="616" y="300" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="647.09741" y="324.17969" id="text3684-8-8-2-0-8-31-04"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-8" x="647.09741" y="324.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> <rect style="color:#000000;fill:#0000ff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" id="rect2886-5-3-2-8-1-4-51" width="62" height="35" x="698" y="300" ry="3.2382364" /> <text xml:space="preserve" style="font-size:25.18028259px;font-style:normal;font-weight:normal;fill:#ffffff;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="729.09741" y="324.17969" id="text3684-8-8-2-0-8-31-2"><tspan sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-82" x="729.09741" y="324.17969" style="font-size:19px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:center;text-anchor:middle;fill:#ffffff;font-family:Droid Sans;-inkscape-font-specification:Droid Sans Bold">#text</tspan></text> </g> </svg>

<!-- slide : cover -->

## Navigation

<!-- slide -->

### Family properties

In order to traverse the document, you have a lot of "family" properties. Here's a few examples. See reference for more details.

Be careful, these properties take the text node into account.

<!-- .incremental -->
```javascript
var doctype = document.firstChild;
```

<!-- .incremental -->
```javascript
var html = doctype.nextSibling;        // previousSibling also exists
```

<!-- .incremental -->
```javascript
var body = html.lastChild;
```

<!-- .incremental -->
```javascript
var h1 = body.firstChild;
console.log(h1.nodeName);              // => "#text"  :-(
```

<!-- .incremental -->
```javascript
h1 = h1.nextSibling;
console.log(h1.nodeName);              // => "H1"     :-)
```

<!-- .incremental -->
```javascript
console.log(h1.parentNode === body);   // => true
console.log(h1.parentNode === html);   // => false
```

<!-- .incremental -->
```javascript
var vito = h1.nextSibling.nextSibling; // skip "empty" text nodes
console.log(vito.childNodes.length);   // => 9 !!!
// 1 text node + 4 div nodes + 4 "empty" text nodes = 9 children
```

<!-- .useful-links -->
* [childNodes reference (MDN)](https://developer.mozilla.org/en/DOM/Node.childNodes)
* [firstChild reference (MDN)](https://developer.mozilla.org/en/DOM/Node.firstChild)
* [lastChild reference (MDN)](https://developer.mozilla.org/en/DOM/Node.lastChild)
* [nextSibling reference (MDN)](https://developer.mozilla.org/en/DOM/Node.nextSibling)
* [previousSibling reference (MDN)](https://developer.mozilla.org/en/DOM/Node.previousSibling)
* [parentNode reference (MDN)](https://developer.mozilla.org/en/DOM/Node.parentNode)

<!-- slide -->

### Family properties (elements)

It's often annoying to retrieve the texts nodes when traversing the DOM tree. Classic nodes are more interesting! Some properties exists to ease that.

<!-- .incremental -->
```javascript
var vito = document.lastChild.lastChild.lastElementChild;
// document => <html> => <body> => <div id="vito">
```

<!-- .incremental -->
```javascript
var children = vito.children;                    // live list!
```

Note that the `children` property is live. The children variables points to something that is always synced with DOM tree.

<!-- .incremental -->
```javascript
var santino = vito.firstElementChild;
console.log(santino === children[0]);            // => true
```

<!-- .incremental -->
```javascript
var frederico = santino.nextElementSibling;
console.log(frederico === children[1]);          // => true
```

<!-- .incremental -->
```javascript
var constanzia = vito.lastElementChild;
console.log(constanzia === children[3]);         // => true
```

<!-- .incremental -->
```javascript
var michael = constanzia.previousElementSibling;
console.log(michael === children[2]);            // => true
```

<!-- .useful-links -->
* [children reference (MDN)](https://developer.mozilla.org/en/DOM/Element.children)
* [firstElementChild reference (MDN)](https://developer.mozilla.org/En/DOM/Element.firstElementChild)
* [lastElementChild reference (MDN)](https://developer.mozilla.org/En/DOM/Element.lastElementChild)
* [nextElementSibling reference (MDN)](https://developer.mozilla.org/En/DOM/Element.nextElementSibling)
* [previousElementSibling reference (MDN)](https://developer.mozilla.org/En/DOM/Element.previousElementSibling)

<!-- slide -->

### Search methods

Better than traversing the DOM tree, direct search is faster and simpler to use in most cases. Here's a few examples. See reference for more details.

<!-- .incremental -->
```javascript
var vito = document.getElementById('vito');
var michael = document.getElementById('michael');
console.log(vito === michael.parentNode);         // => true
```

<!-- .incremental -->
```javascript
var divs = document.getElementsByTagName('div');
console.log(divs.length);                         // => 5
console.log(divs[3].firstChild.nodeValue);        // => Michael Corleone
```

<!-- .incremental -->
```javascript
var sicilians = document.getElementsByClassName('sicilian');
console.log(sicilians[0] === vito);               // => true
```

Support for `getElementsByClassName` is not present on very old browers. Look at [Can I Use?](http://caniuse.com/#feat=getelementsbyclassname) for more details.

<!-- .incremental -->
```javascript
var constanzia = document.querySelector('.sicilian #constanzia');
var herYoungerBrother = constanzia.previousSibling.previousSibling;
console.log(herYoungerBrother === michael);       // => true
```

<!-- .incremental -->
```javascript
var vitosChildren = document.querySelectorAll('#vito div');
console.log(vitosChildren.length);                // => 4
console.log(vitosChildren[2] === michael);        // => true
```

Support for `querySelector` and `querySelectorAll` is not present on old browers. Look at [Can I Use?](http://caniuse.com/#feat=queryselector) for more details.

<!-- .useful-links -->
* [getElementById reference (MDN)](https://developer.mozilla.org/fr/DOM/document.getElementById)
* [getElementsByTagName reference (MDN)](https://developer.mozilla.org/fr/DOM/element.getElementsByTagName)
* [getElementsByClassName reference (MDN)](https://developer.mozilla.org/fr/DOM/document.getElementsByClassName)
* [querySelector reference (MDN)](https://developer.mozilla.org/en/DOM/element.querySelector)
* [querySelectorAll reference (MDN)](https://developer.mozilla.org/en/DOM/element.querySelectorAll)

<!-- slide : cover -->

## Manipulation

<!-- slide -->

### Element manipulation

Now that we know how to retrieve the node we're interested in, it would be very nice to do some modifications. Here's some examples of the different properties you can use to alter the DOM. Look at reference for more details.

<!-- .incremental -->
```javascript
var michael = document.getElementById('michael');
```

<!-- .incremental -->
```javascript
console.log(michael.id);                    // => michael
michael.id = 'MICHAEL';                     // => id modified!
```

<!-- .incremental -->
```javascript
console.log(michael.innerHTML);             // => Michael Corleone
michael.innerHTML = 'Michael CORLEONE';     // => HTML content modified!
```

<!-- .incremental -->
```javascript
console.log(michael.hasAttribute('title')); // => false
michael.setAttribute('title', 'Michael Corleone!!');
console.log(michael.getAttribute('title')); // => Michael Corleone!!
```

<!-- .incremental -->
```javascript
console.log(michael.className);             // => ""
michael.classList.add('character');
michael.classList.add('male');
console.log(michael.className);             // => "character male"
```

Support for `classlist` is not present on old browers. Look at [Can I Use?](http://caniuse.com/#feat=classlist) for more details.

<!-- .useful-links -->
* [Element reference (MDN)](https://developer.mozilla.org/en-US/docs/DOM/element)

<!-- slide -->

### Style manipulation

If you wanna manipulate the style of an element, here's some examples showing off the properties. Look at reference for more details.

<!-- .incremental -->
```javascript
var michael = document.getElementById('michael');
```

<!-- .incremental -->
```javascript
michael.style.paddingLeft = '10px';
```

<!-- .incremental -->
```javascript
michael.style.borderLeft = '5px solid #00F';
```

<!-- .incremental -->
```javascript
michael.style.color = 'blue';
```

<!-- .incremental -->
```javascript
michael.style.cssFloat = 'left';
michael.style.styleFloat = 'left'; // IE :-(
```

<!-- .useful-links -->
* [element.style reference (MDN)](https://developer.mozilla.org/en/DOM/element.style)
* [DOM CSS reference (MDN)](https://developer.mozilla.org/en/DOM/CSS)

<!-- slide -->

### Element tree manipulation

The only thing we miss now is how to create and delete elements. We'll also see how to manipulate the different relationships (parent/child/sibling). Here's a few examples. Look at reference for more details.

<!-- .incremental -->
```javascript
var tom = document.createElement('div');
tom.innerHTML = 'Tom Hagen';
tom.id = 'tom';
tom.classList.add('adopted');
```

<!-- .incremental -->
```javascript
var vito = document.getElementById('vito');
vito.appendChild(tom);                          // inserts at the end
```

<!-- .incremental -->
```javascript
vito.removeChild(vito.children[2]);             // removes michael
```

<!-- .incremental -->
```javascript
var michael = vito.cloneNode(vito.children[0]); // clones santino
michael.id = 'michael';                         // replace id
michael.innerHTML = 'Michael Corleone';         // replace HTML content
```

<!-- .incremental -->
```javascript
vito.insertBefore(michael, vito.children[2]);   // insert before connie
```

<!-- .useful-links -->
* [Element reference (MDN)](https://developer.mozilla.org/en-US/docs/DOM/element)
* [createElement reference (MDN)](https://developer.mozilla.org/fr/DOM/document.createElement)
* [appendChild reference (MDN)](https://developer.mozilla.org/en/DOM/Node.appendChild)
* [removeChild reference (MDN)](https://developer.mozilla.org/en/DOM/Node.removeChild)
* [cloneNode reference (MDN)](https://developer.mozilla.org/en/DOM/Node.cloneNode)
* [insertBefore reference (MDN)](https://developer.mozilla.org/en/DOM/Node.insertBefore)
* [replaceChild reference (MDN)](https://developer.mozilla.org/en/DOM/Node.replaceChild)

<!-- slide : cover -->

## jQuery & the DOM

<!-- slide -->

### What is jQuery ?

<!-- .list.incremental -->
jQuery is a powerful **JavaScript library** originally created by **John Resig**. It has a lot of features for JS developers. For this course we'll focus on how it can help us with the DOM. jQuery aims to provide **easier/simpler features** and **implementations of existing ones** that are **not supported on old browsers**. They try their best to have the same behaviour and results on each browser.

<!-- .list.incremental -->
The library provides a **main function** that also **has properties**. It can be accessed through two names : **`jQuery` and the `$` sign**.

<!-- .useful-links -->
* [jQuery official documentation (doc.jquery.com)](http://docs.jquery.com/Main_Page)
* [Alternative documentation (jqapi.com)](http://jqapi.com/)
* [jQuery Fundamentals (by Rebecca Murphey)](http://jqfundamentals.com/)

<!-- slide -->

### How it works ?

Let's use some example to understand in details how the library works. Remember that everything is based on the `$` function and that it takes CSS selectors as an argument.

<!-- .incremental -->
```javascript
var michael1 = document.querySelector('#michael');
var michael2 = $('#michael'); // similar to document.querySelector
                              // but returned value has more properties
                              // and more functions
                              // works on old browsers :-D
```

<!-- .incremental -->
```javascript
console.log(michael1.getAttribute('id'));       // => michael
console.log(michael2.attr('id'));               // => michael
michael2.attr('id', 'MICHAEL');                 // => id modified!
```

<!-- .incremental -->
```javascript
console.log(michael1.innerHTML);                // => Michael Corleone
console.log(michael2.html());                   // => Michael Corleone
michael2.html('Michael CORLEONE');              // => content modified!
```

<!-- .incremental -->
```javascript
console.log(michael1 === michael2);             // => false
console.log(michael1 === michael2[0]);          // => true
```

<!-- .useful-links -->
* [jQuery selectors documentation (doc.jquery.com)](http://api.jquery.com/category/selectors/)
* [jQuery attributes documentation (doc.jquery.com)](http://api.jquery.com/category/attributes/)

<!-- slide -->

### Easier manipulation

jQuery is very efficient on parent/child/sibling manipulation. The syntax is easy to use.

Note that jQuery calls can be chained. This is pretty elegant and useful. This means you can select an element, call a function and call directly another function on the result. Look at the examples for more details.

<!-- .incremental -->
```javascript
$('#michael').remove();         // don't need parent reference
```

<!-- .incremental -->
```javascript
var michael = document.createElement('div');
$(michael)
  .attr('id', 'michael')        // methods calls can be chained
  .html('Michael Corleone')
  .addClass('character')
  .addClass('male')
  .insertBefore('#constanzia'); // can insert before
```

<!-- .incremental -->
```javascript
var children = $('#vito').children();
var santino = children.eq(0);
var siblings = santino.siblings();
var constanzia = siblings.last();
var familyOrder = children.index(constanzia);
console.log(familyOrder);                      // => 3 (4th)
var michael = constanzia.prev();
```

<!-- .useful-links -->
* [jQuery traversing documentation (doc.jquery.com)](http://api.jquery.com/category/traversing/)
* [jQuery manipulation documentation (doc.jquery.com)](http://api.jquery.com/category/manipulation/)

<!-- slide -->

### Easier CSS

The CSS manipulations are also easier. Have a look at the examples. If you need help, the reference is here...

<!-- .incremental -->
```javascript
var michael = $('michael');
```

<!-- .incremental -->
```javascript
michael.css('padding-left', '10px');
```

<!-- .incremental -->
```javascript
michael.css('border-left', '5px solid #00F');
```

<!-- .incremental -->
```javascript
michael.css('color', 'blue');
```

<!-- .incremental -->
```javascript
michael.css('float', 'left');  // Every browser
```

<!-- .useful-links -->
* [jQuery CSS documentation (doc.jquery.com)](http://api.jquery.com/category/css/)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
