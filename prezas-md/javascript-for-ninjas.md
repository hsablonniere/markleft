<!-- title : JavaScript for Ninjas -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Advanced JavaScript concepts : objects, binding and closures -->
<!-- keywords : javascript, object, binding, closures -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/javascript-for-ninjas.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# JavaScript for Ninjas

<!-- toc -->

<!-- slide : introduction -->

#### A function within a function. I'm impressed.

<!-- .list.incremental -->
Last time, we introduced first features of JavaScript. Most of its basic syntax look like other languages such as C or PHP.

<!-- .list.incremental -->
JavaScript is way more powerful than that. In this course we'll introduce **new concepts**. Most of them will look **strange** or **abnormal** at first. People who hate JavaScript often hate it because **they don't fully understand these concepts**. **Pay attention to details** and **don't fall asleep**, you're **not in a dream.**

<!-- slide : cover -->

## Objects

<!-- slide -->

### Definition

In JavaScript anything that is not a `Number`, a `String`, a `Boolean`, `null` or `undefined` is an object.

<!-- .list.incremental -->
The object is JavaScript's **fundamental datatype**. It is an **unordered collection of properties**. Each property has a **name and a value**. You could say it looks like PHP's associative arrays.

<!-- slide -->

### Examples

You can put (almost) whatever you want in an object :
* Number
* String
* Boolean
* null
* undefined
* Array
* Object

Note that an object can be empty.

<!-- .incremental -->
```javascript
var emptyObject = {};
```

<!-- .incremental -->
```javascript
var reality = {
  level: 1,
  real: true,
  team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf'],
  dream: {
    level: 2,
    team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf'],
    dreamer: 'Yusuf',
    dream: {
      level: 3,
      team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito'],
      dreamer: 'Arthur'
      // You get the point...
    }
  }
};
```

<!-- .useful-links -->
* [Object reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object)

<!-- slide -->

### Properties and values
  
Properties can be added or deleted and their values read and modified at anytime using different techniques.

<!-- .incremental -->
```javascript
// Read value
console.log(reality.level);        // => 1
console.log(reality['level']);     // => 1
```

<!-- .incremental -->
```javascript
// Write value
reality.team[4] = 'Mr. Fisher';    // reality.team[4] => 'Mr. Fisher'
```

<!-- .incremental -->
```javascript
// Add property
reality.location = 'In a plane';   // adds a property called 'location'
                                   // and assign it a String
```

<!-- .incremental -->
```javascript
// Delete property
delete reality.location;           // deletes location property
                                   // reality.location is undefined
```

<!-- slide -->

### Property enumeration
  
Properties can be enumerated using a `for..in` loop.

<!-- .incremental -->
```javascript
for (var i in reality.dream) {
  console.log(i + ' ==> ' + reality.dream[i]);
}
```

<!-- .incremental -->
```javascript
/** Console output :
  level ==> 2
  team ==> Ariadne,Arthur,Cobb,Eames,Fischer,Saito,Yusuf
  dreamer ==> Yusuf
  dream ==> [object Object]
*/
```

<!-- .useful-links -->
* [for..in reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in)

<!-- slide -->

### Type and reference
  
Objects are mutable and manipulated by reference.

<!-- .incremental -->
```javascript
// Primitive types : manipulated by value
var dreamer = 'Yusuf';
var dreamer2 = dreamer;
dreamer = 'Saito';
console.log(dreamer2);              // => 'Yusuf'
```

<!-- .incremental -->
```javascript
// Objects : manipulated by reference
var reality2 = reality;
reality.dream.dreamer = 'Saito';
console.log(reality2.dream.dreamer) // => 'Saito' !!!!
```

<!-- slide : cover json -->

## JSON

<!-- slide -->

### Definition

<!-- .list.incremental -->
JSON is a **lightweight text-based** open standard designed for **human-readable data interchange**. It is based upon **JavaScript Object Notation** but it's **purpose is multilanguage**. It was specified in **RFC 4627** by **Douglas Crockford in 2006**. Since then it has become very popular. It's commonly used as an exchange format for **Web Services**. Note that Firefox and Chrome use it for addon/extension configuration files.

<!-- .useful-links -->
* [JSON.org](http://json.org/)
* [RFC 4627](http://tools.ietf.org/html/rfc4627)
* [JSON saga (video by Douglas Crockford)](http://yuilibrary.com/theater/douglas-crockford/crockford-json/)
* [Web Service example returning JSON (devoxx.com)](https://cfp.devoxx.com/rest/v1/events/presentations/532)

<!-- slide -->

### Usage
  
Using the `JSON` object you're able to convert from Object to JSON string with `JSON.stringify()` and vice versa  with`JSON.parse()`.

<!-- .incremental -->
```javascript
var reality = '{"level": 1, "team": ["Ariadne", "Arthur", "Cobb", "Eames", "Fischer", "Saito", "Yusuf"], "dream": {"dreamer": "Yusuf"}}';
```

<!-- .incremental -->
```javascript
var realityObject = JSON.parse(reality); // JSON String to JS Object
```

<!-- .incremental -->
```javascript
console.log(realityObject.team[0]);      // => "Ariadne"
realityObject.level = 42;
realityObject.dream.dreamer = "Charles";
```

<!-- .incremental -->
```javascript
reality = JSON.stringify(realityObject); // JS Object to JSON String
console.log(reality);
```

<!-- .incremental -->
```javascript
// Console output :
// {"level":42,"team":["Ariadne","Arthur","Cobb","Eames","Fischer","Saito","Yusuf"],"dream":{"dreamer":"Charles"}}
```

<!-- .useful-links -->
* [JSON object reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON)

<!-- slide : cover -->

### Functions are first class citizens!
  
This feature is very important. Functions are special kind of object. Having first-class functions means a lots of things, let's review them in details.

<!-- .useful-links -->
* [First class functions](http://en.wikipedia.org/wiki/First_class_function)

<!-- slide -->

#### Be assigned to a variable
  
This way to create function is very common. Some developers don't even use the classic declaration.

<!-- .incremental -->
```javascript
function validateLength(tokens) {
  return tokens.length === 4;
};
```

<!-- .incremental -->
```javascript
var validateLength2 = function (tokens) {   // This function is anonymous
  return tokens.length === 4;
};
```

<!-- .incremental -->
```javascript
function fact(x) {
  return (x <= 1) ? 1 : x * fact(x - 1);
};
```

<!-- .incremental -->
```javascript
var fact2 = function f(x) {                // This function has a name
  return (x <= 1) ? 1 : x * f(x - 1);      // used for recursion
};
```

<!-- .incremental -->
```javascript
console.log(typeof f);                     // => "undefined"
```

<!-- slide -->

#### Have properties
  
The feature is not a common pattern.

<!-- .incremental -->
```javascript
var validateLength = function v(tokens) {
  v.errorMsg = (v.errorMsg !== undefined) ? v.errorMsg : 'Error!';
  if (tokens.length != 4) {
    console.error(v.errorMsg);
  }
  return tokens.length === 4;
};
```

<!-- .incremental -->
```javascript
validateLength(['dream']); // => 'Error!' in console
```

<!-- .incremental -->
```javascript
validateLength.errorMsg = 'Query must contain 4 words.';
```

<!-- .incremental -->
```javascript
validateLength(['dream']); // => 'Query must contain 4 words.' in console
```

<!-- slide -->

#### Be another object's property
  
When a function is assigned to an object property, it's called a method.

<!-- .incremental -->
```javascript
var inception = {
  level: 1,
  team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf'],
  dream: {
    level: 2,
    team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf'],
    dreamer: 'Yusuf',
    dream: {
      // You get the point...
    }
  },
  explainTheMovie: function () {
    console.log('Are you kidding me?');
  }
};
```

<!-- .incremental -->
```javascript
inception.explainTheMovie();

```

<!-- slide -->

#### Be another function's argument
  
This kind a technique is very frequent in JavaScript and the simplicity of it is brilliant! Just call a function and give it another function to call for when it's done.

Function passed as arguments are often called callbacks.

<!-- .incremental -->
```javascript
var updateError = function (error) {
  console.error('An error occured : ' + error);
}
```

<!-- .incremental -->
```javascript
var validateLength = function (tokens, updateErrorFct) {
  if (tokens.length != 4) {
    updateErrorFct('Error!');
  }
  return tokens.length === 4;
};
```

<!-- .incremental -->
```javascript
validateLength(['dream'], updateError);
// 'An error occured : Error!' in console
```

<!-- slide : cover closure -->

## Closure

<!-- slide -->

### Definition
  
The definition of a closure is never a good way to have a explanation of what it is.

It's often easier to remember : "a function within a function". But the best way to understand it is through an example.

<!-- .incremental -->
> « In computer science, a closure is a function that is evaluated in an environment containing one or more bound variables. When called, the function can access these variables. »


> « A function within a function. I'm impressed. »

<!-- slide -->

### Example
  
Starting from this point, we're going to modify it to use a closure and resolve the different problems.

<!-- .incremental -->
```javascript
var counter = 0;       // Everyone can modify this       :-(
var getUniqueInt = function () {
  return counter++;
};
```

<!-- .incremental -->
```javascript
var getUniqueInt = function () {
  var counter = 0;     // Nobody outside can modify this :-)
  return counter++;    // But function always return 0   :-(
};
```

<!-- .incremental -->
```javascript
var getUniqueInt = function () {
  var counter = 0;     // Nobody can modify this         :-)
  return function () { // A function within a function   :-) yeah baby!
    return counter++;  // Function remembers counter     :-)
  }
};
```

<!-- .incremental -->
```javascript
console.log(typeof getUniqueInt())     // => "function"  :-(
console.log(typeof getUniqueInt()())   // => "number"    :-)
```

<!-- slide -->
  
Since no one really understand this definition the first time (and even after), we'll use an example.

<!-- .incremental -->
```javascript
var getUniqueInt = function () {
  var counter = 0;     // Nobody can modify this         :-)
  return function () { // A function within a function   :-) yeah baby!
    return counter++;  // Function remembers counter     :-)
  }
};
getUniqueInt = getUniqueInt();  // Assign inner function to getUniqueInt
```

<!-- .incremental -->
```javascript
console.log(typeof getUniqueInt())     // => "number"    :-)
```

<!-- .incremental -->
```javascript
var getUniqueInt = (function () {
  var counter = 0;     // Nobody can modify this         :-)
  return function () { // A function within a function   :-) yeah baby!
    return counter++;  // Function remembers counter     :-)
  }
})();                  // Direct execution of 1st anonymous function
```

<!-- .incremental -->
```javascript
console.log(typeof getUniqueInt())     // => "number"    :-)
```

The last example is a very classic pattern in JavaScript when you deal with closure. It allows you to add private "memory" to a function.
  
<!-- slide : cover -->

## Binding

<!-- slide -->

### `this`
  
`this` can reference different stuffs. It depends how it's used. For our example, we'll use an object : `dream` and a function : `what`.
If we execute `what` directly, `this` will reference the browser global object : `window`. Look at the example.
If we set `what` as a method of `dream`, `this` will reference `dream`. Look at the example.-->

<!-- .incremental -->
```javascript
var dream = { location: 'a van', dreamer: 'Yusuf' };
var what = function (before, after) {
  console.log(before + this.dreamer + ' is dreaming of ' + this.location + after);
}
```

#### From global object

<!-- .incremental -->
```javascript
what('>> ', '...'); // => >> undefined is dreaming of http://server-of-this-page/this-page.html...
```

#### As an object method

<!-- .incremental -->
```javascript
dream.w = what;
dream.w('>> ', '...'); // => >> Yusuf is dreaming of a van...
```

<!-- .useful-links -->
* [this reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/this)

<!-- slide -->

### Common problems

<!-- .incremental -->
```javascript
var dream = {
  location: 'a van',
  dreamer: 'Yusuf',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};
```

<!-- .incremental -->
```javascript
var times = function (n, func, arg) {
  for (var i = 0; i < n; i++) {
    func(arg + ' (' + i + ')');
  }
}
```

<!-- .incremental -->
```javascript
times(2, dream.whoDreams, ' is dreaming');
```

<!-- .incremental -->
```javascript
// undefined is dreaming (0)
// undefined is dreaming (1)
```

<!-- .useful-links -->
* [Get out of binding situations (A list apart)](http://www.alistapart.com/articles/getoutbindingsituations/)
* [jQuery.proxy() in jQuery](http://api.jquery.com/jQuery.proxy/)
* [Function.bind() in prototype.js](http://api.prototypejs.org/language/Function/prototype/bind/)

<!-- slide : cover -->

### Solutions

<!-- slide -->

#### Using `call`

<!-- .incremental -->
```javascript
var dream = {
  location: 'a van',
  dreamer: 'Yusuf',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};
```

<!-- .incremental -->
```javascript
var times = function (n, func, target, arg) {     // add target
  for (var i = 0; i < n; i++) {
    func.call(target, arg + ' (' + i + ')');      // directly args
  }
}
```

<!-- .incremental -->
```javascript
times(2, dream.whoDreams, dream, ' is dreaming'); // target is passed
```

<!-- .incremental -->
```javascript
// Yusuf is dreaming (0)
// Yusuf is dreaming (1)
```

<!-- .useful-links -->
* [call reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/call)

<!-- slide -->

#### Using `apply`

<!-- .incremental -->
```javascript
var dream = {
  location: 'a hotel',
  dreamer: 'Charles',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};
```

<!-- .incremental -->
```javascript
var times = function (n, func, target, arg) {     // add target
  for (var i = 0; i < n; i++) {
    func.apply(target, [arg + ' (' + i + ')']);   // args as an array
  }
}
```

<!-- .incremental -->
```javascript
times(2, dream.whoDreams, dream, ' is dreaming'); // target is passed
```

<!-- .incremental -->
```javascript
// Charles is dreaming (0)
// Charles is dreaming (1)
```

<!-- .useful-links -->
* [apply reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/apply)

<!-- slide -->

#### Using `bind`

<!-- .incremental -->
```javascript
var dream = {
  location: 'a snow fortress',
  dreamer: 'Eames',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};
```

<!-- .incremental -->
```javascript
var times = function (n, func, arg) {
  for (var i = 0; i < n; i++) {
    func(arg + ' (' + i + ')');              // direct
  }
}
```

<!-- .incremental -->
```javascript
var bindedWD = dream.whoDreams.bind(dream);  // bind target to function
times(2, bindedWD, ' is dreaming');
```

<!-- .incremental -->
```javascript
// Eames is dreaming (0)
// Eames is dreaming (1)
```

<!-- .useful-links -->
* [bind reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind)

<!-- slide -->

## Date
  
The `Date` object provides a ways to handle date and time. Calling `new Date()` creates a new Date object for today's date and time according to local time. The object has a lot of methods to handle itself. See reference for more details.

<!-- .incremental -->
```javascript
var today = new Date();
var month = today.getMonth();             // .getDay() .getYear() etc...
var unixTime = today.getTime();           // Milliseconds since
                                          // 1 January 1970 00:00:00 UTC
var display = today.toString();
var endOfTheWorld = new Date(2012,11,21); // Months from 0 to 11 !!!!
```

<!-- .useful-links -->
* [Date reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date)

<!-- slide -->

## Intervals & timeouts
  
When you want your JavaScript code to depend on time, you need some mechanism to delay execution. `setTimeout` and `setInterval` to the rescue. See reference for more details.

Both functions are properties of the `window` object in browser environments. They can also be found on other platforms like Node.js with the same behaviour.

Look carefully what is passed as first argument

<!-- .incremental -->
```javascript
var foo = function () {
  console.log('Downwards is the only way forwards.');
}
var timeoutId = setTimeout(foo, 2000);
// id can be used to cancel => clearTimeout(timeoutId)
```

<!-- .incremental -->
```javascript
var bar = 0;
var baz = function () {
  // if we define var bar here, it would be reset each call
  bar = (bar + 2) % 20;
  console.log(bar);
}
var intervalId = setInterval(baz, 1000);
// id can be used to cancel => clearInterval(intervalId)
```

<!-- .useful-links -->
* [setTimeout reference (MDN)](https://developer.mozilla.org/en/window.setTimeout)
* [setInterval reference (MDN)](https://developer.mozilla.org/en/window.setInterval)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
