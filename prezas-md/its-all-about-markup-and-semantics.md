<!-- title : It's all about markup and semantics. -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Review of the basics of HTML and focus on the important parts. -->
<!-- keywords : markup, semantic, html, doctype, elements, tags, attributes -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/its-all-about-markup-and-semantics.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# It's all about **markup** and **semantics**

<!-- toc -->

<!-- slide -->

## HTML : Definition

<!-- .list.incremental -->
HTML stands for **HyperText Markup Language**. It is **not a programing language**, it is a **markup language**. It is based on **SGML**. This markup defines the **structure** and **semantics** of the document but not directly how it should be presented.

<!-- slide -->

## Doctype

<!-- .list.incremental -->
**Every HTML document** starts with a Doctype. Since there's evolutions in the HTML language, there's multiple versions. Doctypes are used by **web browsers** to determine the **version (or variant)** of the language of the document. It helps to **display** the contents properly. Doctypes are also used for **validation** purposes to determine the set of rules to apply to a document. HTML 4 and XHTML have 3 variant of their doctype : strict, transitional and frameset.

<!-- slide -->

## Doctype Examples

### HTML 4.01 Transitional

<!-- .incremental -->
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

### XHTML 1.1 Basic

<!-- .incremental -->
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
"http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
```

### HTML 5

<!-- .incremental -->
```html
<!DOCTYPE html>
```

<!-- .useful-links -->
* [Recommended Doctype Declarations (W3C)](http://www.w3.org/QA/2002/04/valid-dtd-list.html)

<!-- slide -->

## Classic HTML elements

```html
<p>May the <b>Force</b> be with you.</p>
```

<!-- .list.incremental -->
Apart from the Doctype, an HTML document is composed of elements. They are organised in parent/child **tree structure**. An element starts with an **opening tag** and ends with a **closing tag**. An element can be **empty** or contain **text** and/or **other elements**.

<!-- slide -->

## Attributes

```html
<a href="http://www.donothingfor2minutes.com">Do nothing for 2 Minutes</a>
```

<!-- .list.incremental -->
Attributes are **additional information** set **on opening tags**. They consist of **key/value pairs**.

<!-- slide : compact -->

## Structure

### html

<!-- .list.incremental -->
It is the **root element** of any document.

### head

<!-- .list.incremental -->
Always the **first child** of the `html` element. It contains general **information** about the document: title, metadata such as keywords and description, etc. It's also where you'll find **link to other resources** (CSS and JS).

### body

<!-- .list.incremental -->
Always the **second and last child** of the `html` element. It represents the actual **contents** of the document.

<!-- slide -->

## Comments

```html
<!-- Help me Obi-Wan Kenobi. You're my only hope. -->
```

<!-- .list.incremental -->
They are used to **annotate markup**. They are **not displayed by browsers** but don't forget that they are still **transfered to visitors** and **can be read** indirectly.

<!-- slide -->

## Full example

<!-- render iframe : 75 -->
```html5
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Use the Force, Luke.</title>
</head>
<body>
  <!-- Help me Obi-Wan Kenobi. You're my only hope. -->
  <p>I find your lack of faith disturbing.</p>
</body>
</html>
```

<!-- slide : cover -->

## Elements

<!-- .useful-links -->
* [HTML element index (HTML5 Doctor)](http://html5doctor.com/element-index)
* [HTML elements (MDN)](https://developer.mozilla.org/en-US/docs/HTML/Element)
* [HTML specification (W3C)](http://www.w3.org/TR/html5/)

<!-- slide -->

### Head elements

Head contains elements for title, document metadatas but also for styles and scripts either directly or through a link to another file.

```html
<head>
  <title>A long time ago in a galaxy far far away</title>

  <meta charset="utf-8">
  <meta name="author" content="Luke S.">

  <style>
    p {
      color: #222;
    }
  </style>
  <link rel="stylesheet" type="text/css" href="style.css">

  <script type="text/javascript">
    var quote = "You must unlearn what you have learned.";
  </script>
  <script src="script.js" type="text/javascript"></script>
</head>
```

<!-- slide -->

### Block elements

<!-- .list.incremental -->
For block elements, the **normal flow** of an HTML document goes **up to down**. When you use a block element, it places itself on a new line and the next element will also be on a **new line**. Any block element **can have dimensions** (height and width).

<!-- slide -->

#### Headings

Use headings to describe your document structure. Search engines use them to index your structure and content of your pages. It's also important for visitors, it will help them locate what they want in your page.

<!-- render iframe -->

```html
<h1>George Lucas</h1>
<h2>Sagas</h2>
<h3>Star Wars</h3>
<h4>Episodes</h4>
<h5>The Return of the Jedi</h5>
<h6>The Battle Of Endor</h6>
```

<!-- slide -->

#### Lists

There are three kinds of lists : unordered, ordered and definition. Bullets and numerotation can be customized with CSS.

<!-- render iframe : 225 -->

```html
<ul>
  <li>Han Solo</li>
  <li>Chewbacca</li>
</ul>
<ol>
  <li>R2-D2</li>
  <li>C3PO</li>
</ol>
<dl>
  <dt>#000000</dt><dd>Darth vador's color</dd>
  <dt>#FFFFFF</dt><dd>Leia's color</dd>
</dl>
```

<!-- slide : compact -->

#### Other

The **`<p>...</p>`** element is mainly used for paragraphs of text. It's alter ego **`<div>...`** has the same behaviour but without the semantic meaning. It's the generic block element. Here are other block elements, see [HTML element index](http://html5doctor.com/element-index/) for more details.

* `<address>...</address>`
* `<blockquote>...</blockquote>`
* `<del>...</del>`
* `<hr>`
* `<ins>...</ins>`
* `<noscript>...</noscript>`
* `<pre>...</pre>`
* `<script>...</script>`

<!-- slide : cover -->

### Inline elements

Unlike block elements, inline ones continue the **normal flow** **like normal text** from **left to right**. Inline elements **can't have dimensions**. Here are some examples, see [HTML element index](http://html5doctor.com/element-index/) for more details.

<!-- slide -->

#### Anchor

* `<a>...</a>`

<!-- slide -->

#### Phrase

* `<abbr>...</abbr>`
* `<dfn>...</dfn>`
* `<em>...</em>`
* `<strong>...</strong>`

<!-- slide -->

#### Computer phrase

* `<code>...</code>`
* `<samp>...</samp>`
* `<kbd>...</kbd>`
* `<var>...</var>`

<!-- slide -->

#### Presentation phrase

* `<b>...</b>`
* `<i>...</i>`
* `<big>...</big>`
* `<small>...</small>`
* `<tt>...</tt>`
* `<u>...</u>`

<!-- slide : compact -->

#### Other

The `<span>...</span>` element is the generic inline element.

* `<br>`
* `<bdo>...</bdo>`
* `<cite>...</cite>`
* `<del>...</del>`
* `<ins>...</ins>`
* `<q>...</q>`
* `<script>...</script>`
* `<sub>...</sub>`
* `<sup>...</sup>`

<!-- slide -->

### Image and object elements

These elements are used for multimedia : image, flash, java applet...

* `<img>`
* `<map>...</map>`
* `<area>`
* `<object>...</object>`
* `<param>`

<!-- slide : compact -->

### Forms

Sending informations back to server is really important in the Web. Here are elements used to display a form. Visitors can interact with the page and send informations back to the server.

* `<form>...</form>`
* `<button>...</button>`
* `<fieldset>...</fieldset>`
* `<legend>...</legend>`
* `<label>...</label>`
* `<input>`
* `<select>...</select>`
* `<optgroup>...</optgroup>`
* `<option>...</option>`
* `< textarea >...</ textarea >`

<!-- slide -->

#### Forms : example

Sending informations back to server is really important in the Web. Here are elements used to display a form. Visitors can interact with the page and send informations back to the server.

<!-- render iframe : 200 -->

```html
<form action="./send.php" method="post">
  <p>
    <label for="firstname">First name:</label>
    <input type="text" name="firstname" id="firstname">
  </p><p>
    <label for="lastname">Last name:</label>
    <input type="text" name="lastname" id="lastname">
  </p><p>
    <input type="checkbox" name="droid" value="yes"> I'm a droid
    <input type="checkbox" name="speak" value="yes"> I can speak
  </p><p>
    <input type="submit" value="Submit">
  </p>
</form>
```

<!-- slide -->

### Tables

Tables must be used to display datas formatted as grid. They shouldn't be used for document layout purposes.

<!-- render iframe : 175 -->

```html
<table>
  <caption>Cast</caption>
  <thead>
    <tr><th>Actor</th><th>Character</th></tr>
  </thead>
  <tbody>
    <tr><td>Mark Hamill</td><td>Luke Skywalker</td></tr>
    <tr><td>Harrison Ford</td><td>Han Solo</td></tr>
    <tr><td>Carrie Fisher</td><td>Princess Leia Organa</td></tr>
  </tbody>
  <tfoot>
    <tr><th>Actor</th><th>Character</th></tr>
  </tfoot>
</table>
```

<!-- slide -->

### Frames

The `<iframe>...</iframe>` element is used to embbed another page in a document. It has serious drawbacks and should be used carefully. Frameset/frame are considered bad practice and should not be used anymore. They're still used for genereted documentation (like [javadoc](http://docs.oracle.com/javase/7/docs/api/)).

* `<iframe>...</iframe>`
* <span class="deprecated">`<frameset>...</frameset>`</span>
* <span class="deprecated">`<frame>...</frame>`</span>
* <span class="deprecated">`<noframes>...</noframes>`</span>

<!-- slide : cover -->

## HTML5 new elements

<!-- slide : compact -->

### Structure/semantic tags

New semantic tags appear in HTML5. They will help authors to add a semantic value to the structure of their documents. It will also help search engines to index contents with more accuracy.

* `<article>...</article>`
* `<aside>...</aside>`
* `<figcaption>...</figcaption>`
* `<figure>...</figure>`
* `<footer>...</footer>`
* `<header>...</header>`
* `<nav>...</nav>`
* `<section>...</section>`

<!-- slide -->

### Graphics and multimedia

Adobe flash is not dead yet but with these new tags and the features that come along, it takes a serious hit. Popular music player and video sites already have beta version using this.

<!-- .incremental -->
```html5
<audio controls="controls">
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
```

<!-- .incremental -->
```html5
<canvas id="myCanvas"></canvas>
<script type="text/javascript">
  var canvas=document.getElementById('myCanvas');
  var ctx=canvas.getContext('2d');
  ctx.fillRect(0,0,80,100);
</script>
```

<!-- .incremental -->
```html5
<video width="320" height="240" controls="controls">
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

<!-- slide -->

### New inputs and attributes

New input types will solve many problems that are still resolved with javascript (field validation, placeholder...). Mobile will be able to provide adequate keyboard if field requires a numeric value...

<!-- .incremental -->
```html5
E-mail: <input type="email" name="user_email">
```

<!-- .incremental -->
```html5
Number: <input type="number" name="number" min="1" max="10">
```

<!-- .incremental -->
```html5
Range: <input type="range" name="range" min="1" max="10">
```

<!-- .incremental -->
```html5
Date: <input type="date" name="date" min="2010-08-14">
```

<!-- .incremental -->
```html5
Time: <input type="time" name="time">
```

<!-- .incremental -->
```html5
Search: <input type="search" results="10" placeholder="Search here">
```

<!-- .incremental -->
```html5
Required: <input type="text" required="required">
```

<!-- slide -->

### There's more...

There are **many more features** in HTML5 semantics, see [reference](http://html5doctor.com/element-index/) for more details. **Be careful** of what you use. Use **feature detection** and apply **graceful degradation** or **progressive enhancement**.

* [HTML5 rocks demo](http://slides.html5rocks.com/#semantics-markup-title)
* [Modernizr](http://www.modernizr.com/)

<!-- .useful-links -->
* [Graceful degradation vs. progressive enhancement](http://dev.opera.com/articles/view/graceful-degradation-progressive-enhance/)

<!-- slide : cover -->

## XHTML

<!-- .useful-links -->
* [XHTML reference (MDN)](https://developer.mozilla.org/en-US/docs/XHTML)
* [CSS and JavaScript in XHTML documents (MDN)](https://developer.mozilla.org/en-US/docs/Properly_Using_CSS_and_JavaScript_in_XHTML_Documents)
* [XHTML specification (W3C)](http://www.w3.org/TR/xhtml1/)

<!-- slide -->

### Definition

<!-- .list.incremental -->
XHTML is a **variant of HTML** based on valid XML markup. A valid XHTML document is by nature a **valid XML document**. To do so, XHTML imposes **stricter** rules upon HTML rules. It was created for **interoperability purposes** with other data formats and **common XML tools**. If all web pages were using XHTML, transformation could be done by servers or proxies if necessary.

Browsers should not display invalid XHTML markup at all but they tend to do it anyway.

<!-- slide : cover -->

### XHTML rules

<!-- slide -->

<!-- .rule-to-follow -->
#### XHTML documents have a unique root element call `html`

```xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <title>Use the Force, Luke.</title>
</head>
<body>
  <!-- Help me Obi-Wan Kenobi. You're my only hope. -->
  <p>I find your lack of faith disturbing.</p>
</body>
</html>
```

<!-- slide -->

<!-- .rule-to-follow -->
#### All elements should be closed (or self-closed)

<!-- .incremental -->
```html
<!-- HTML -->
<ul>
  <li>One
  <li>Two
</ul>

<img src="light-sabre.png" alt="Light saber">
```

<!-- .incremental -->
```xhtml
<!-- XHTML -->
<ul>
  <li>One</li>
  <li>Two</li>
</ul>

<img src="light-sabre.png" alt="Light saber" />
```

<!-- slide -->

<!-- .rule-to-follow -->
#### All characters in lower case (because of case-sensitiveness)

<!-- .incremental -->
```html
<!-- HTML -->
<P ID="description">This is a paragraph of text</P>
```

<!-- .incremental -->
```xhtml
<!-- XHTML -->
<p id="description">This is a paragraph of text</p>
```

<!-- slide -->

<!-- .rule-to-follow -->
#### No attribute minimization & quotes mandatory

<!-- .incremental -->
```html
<!-- HTML -->
<input id=3 checked>
```

<!-- .incremental -->
```xhtml
<!-- XHTML -->
<input id="3" checked="checked" />
```

<!-- slide -->

<!-- .rule-to-follow -->
#### All elements must be properly nested

Although overlapping is illegal in HTML, it is widely tolerated in existing browsers.

<!-- .incremental -->
```html
<!-- Absolutely forbidden in HTML and XHTML! -->
<b><i>This text is bold and italic</b></i>
```

<!-- .incremental -->
```html
<!-- HTML or XHTML -->
<b><i>This text is bold and italic</i></b>
```

<!-- slide : compact -->

## Tools

Modern browsers now provides tools for web developer. It helps them to build powerful websites with different tools.

<!-- .list.incremental -->
* Firefox : Firebug (addon)
* Opera : Dragonfly (since #9.5)
* Safari & Chrome : Developer tools
* IE : Developer tools (since #8)

They all share similar tools and quite similar interface :

<!-- .list.incremental -->
* HTML Element inspector
* CSS Editor
* Javascript debugger
* Javascript console
* Network inspector

<!-- slide : compact -->

## Validation & compatibility

W3C website provides different validators for your documents : HTML, CSS... You should always **validate your work!** Once your work is valid, you must absolutely **test it** over different browsers and platforms.

* [W3C HTML validator](http://validator.w3.org)
* [W3C CSS validator](http://jigsaw.w3.org/css-validator/)
* [W3C mobile validator](http://validator.w3.org/mobile/)

Before trying new stuffs from HTML5 or CSS3 you can verify which browsers are compatible.

* [Can I use ?](http://caniuse.com)
* [HTML5 test](http://html5test.com)
* [HTML5 please](http://html5please.com/)
* [The expressive web](http://beta.theexpressiveweb.com)
* [Browser shots](http://browsershots.org)

<!-- slide -->

## Documentation & links

* [W3C](http://www.w3.org)
* [Mozilla Developer Network](http://developer.mozilla.org)
* [HTML5 rocks](http://www.html5rocks.com)
* [Dive into HTML5](http://diveintohtml5.info)
* [Acid tests](http://www.acidtests.org)
* [Stat counter](http://gs.statcounter.com)
* [HTML5 boilerplate](http://h5bp.com)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/dzslides.custom.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
