<!-- title : Early quiz -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Quiz about Web History, HTML and JavaScript -->
<!-- keywords : history, html, javascript -->

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet">
<link href="../css/theme-2012-lab.css" rel="stylesheet">
<link href="../css/hljs-github.css" rel="stylesheet">

# Early quiz

<form>
  <label>First name : </label><input type="text">
  <label>Last name : </label><input type="text">
</form>

## History

### Who invented the World Wide Web?

<form>
  <label class="radio"><input type="radio" name="web">Håkon Wium Lie</label>
  <label class="radio"><input type="radio" name="web">Brendan Eich</label>
  <label class="radio"><input type="radio" name="web">Tim Berners-Lee</label>
  <label class="radio"><input type="radio" name="web">Marc Andreessen</label>
</form>

### Who invented HTML?

<form>
  <label class="radio"><input type="radio" name="html">Håkon Wium Lie</label>
  <label class="radio"><input type="radio" name="html">Brendan Eich</label>
  <label class="radio"><input type="radio" name="html">Tim Berners-Lee</label>
  <label class="radio"><input type="radio" name="html">Marc Andreessen</label>
</form>

### Who invented JavaScript?

<form>
  <label class="radio"><input type="radio" name="js">Håkon Wium Lie</label>
  <label class="radio"><input type="radio" name="js">Brendan Eich</label>
  <label class="radio"><input type="radio" name="js">Tim Berners-Lee</label>
  <label class="radio"><input type="radio" name="js">Marc Andreessen</label>
</form>

### Who co-invented CSS?

<form>
  <label class="radio"><input type="radio" name="css">Håkon Wium Lie</label>
  <label class="radio"><input type="radio" name="css">Brendan Eich</label>
  <label class="radio"><input type="radio" name="css">Tim Berners-Lee</label>
  <label class="radio"><input type="radio" name="css">Marc Andreessen</label>
</form>

<hr>

### Cite 2 early web browsers that aren't around anymore.

<form>
  <div><input type="text"></div>
  <div><input type="text"></div>
</form>

### Which browser(s) uses the Webkit rendering engine?

<form>
  <label class="checkbox"><input type="checkbox" name="webkit">Internet Explorer</label>
  <label class="checkbox"><input type="checkbox" name="webkit">Opera</label>
  <label class="checkbox"><input type="checkbox" name="webkit">Safari</label>
  <label class="checkbox"><input type="checkbox" name="webkit">Firefox</label>
  <label class="checkbox"><input type="checkbox" name="webkit">Chrome</label>
</form>

## HTML

### Which tag(s) have a default display block ?

<form>
  <label class="checkbox"><input type="checkbox" name="display">p</label>
  <label class="checkbox"><input type="checkbox" name="display">li</label>
  <label class="checkbox"><input type="checkbox" name="display">ul</label>
  <label class="checkbox"><input type="checkbox" name="display">span</label>
  <label class="checkbox"><input type="checkbox" name="display">strong</label>
  <label class="checkbox"><input type="checkbox" name="display">article</label>
</form>

### Name 5 new HTML5 semantic tag ?

<form>
  <div><input type="text" name="semantic1"></div>
  <div><input type="text" name="semantic2"></div>
  <div><input type="text" name="semantic3"></div>
  <div><input type="text" name="semantic4"></div>
  <div><input type="text" name="semantic5"></div>
</form>

<hr>

### Name 6 tags that can only be used in a `<table>` ?

<form>
  <div><input type="text" name="table1"></div>
  <div><input type="text" name="table2"></div>
  <div><input type="text" name="table3"></div>
  <div><input type="text" name="table4"></div>
  <div><input type="text" name="table5"></div>
  <div><input type="text" name="table6"></div>
</form>

### Name 5 tags that can only be used in a `<form>` ?

<form>
  <div><input type="text" name="form1"></div>
  <div><input type="text" name="form2"></div>
  <div><input type="text" name="form3"></div>
  <div><input type="text" name="form4"></div>
  <div><input type="text" name="form5"></div>
</form>

<hr>

## CSS

### Given this example, which element(s) are red?

```html
<p>Orange</p>
<h1 class="foo bar">Apple</h1>
<div class="bar">
  <h2 class="foo">Kiwi</h2>
  <p>Banana</p>
</div>
```

```css
p, .foo { color: red; }
```

<form>
  <label class="checkbox"><input type="checkbox" name="css1">Orange</label>
  <label class="checkbox"><input type="checkbox" name="css1">Apple</label>
  <label class="checkbox"><input type="checkbox" name="css1">Kiwi</label>
  <label class="checkbox"><input type="checkbox" name="css1">Banana</label>
</form>

### Given this example, which element(s) are blue?

```html
<p>Orange</p>
<h1 class="foo bar">Apple</h1>
<div class="bar">
  <h2 class="foo">Kiwi</h2>
  <p>Banana</p>
</div>
```

```css
.bar .foo { color: blue; }
```

<form>
  <label class="checkbox"><input type="checkbox" name="css2">Orange</label>
  <label class="checkbox"><input type="checkbox" name="css2">Apple</label>
  <label class="checkbox"><input type="checkbox" name="css2">Kiwi</label>
  <label class="checkbox"><input type="checkbox" name="css2">Banana</label>
</form>

<hr>

### Given this example, which element(s) are green?

```html
<p>Orange</p>
<h1 class="foo bar">Apple</h1>
<div class="bar">
  <h2 class="foo">Kiwi</h2>
  <p>Banana</p>
</div>
```

```css
.bar.foo { color: green; }
```

<form>
  <label class="checkbox"><input type="checkbox" name="css3">Orange</label>
  <label class="checkbox"><input type="checkbox" name="css3">Apple</label>
  <label class="checkbox"><input type="checkbox" name="css3">Kiwi</label>
  <label class="checkbox"><input type="checkbox" name="css3">Banana</label>
</form>

## JavaScript

### Given this example, what is the console output?

```javascript
var a = 2;

function foo() {
  var a = 3;
}

foo();
console.log(a);
```

<form>
  <label class="radio"><input type="radio" name="js1">2</label>
  <label class="radio"><input type="radio" name="js1">3</label>
  <label class="radio"><input type="radio" name="js1">undefined</label>
  <label class="radio"><input type="radio" name="js1">null</label>
</form>

<hr>

### Given this example, what is the console output?

```javascript
var a = [1, 9, 4];
console.log(9 in a);
```

<form>
  <label class="radio"><input type="radio" name="js2">true</label>
  <label class="radio"><input type="radio" name="js2">false</label>
  <label class="radio"><input type="radio" name="js2">9</label>
  <label class="radio"><input type="radio" name="js2">1</label>
  <label class="radio"><input type="radio" name="js2">undefined</label>
  <label class="radio"><input type="radio" name="js2">null</label>
</form>

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>

### Given this example, what is the console output?

```javascript
var a = (function() {
  return 2 === 2;
})();

console.log(typeof a);
```

<form>
  <label class="radio"><input type="radio" name="js3">number</label>
  <label class="radio"><input type="radio" name="js3">string</label>
  <label class="radio"><input type="radio" name="js3">boolean</label>
  <label class="radio"><input type="radio" name="js3">function</label>
  <label class="radio"><input type="radio" name="js3">array</label>
  <label class="radio"><input type="radio" name="js3">object</label>
  <label class="radio"><input type="radio" name="js2">undefined</label>
  <label class="radio"><input type="radio" name="js2">null</label>
</form>

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
