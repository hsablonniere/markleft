<!-- title : JavaScript 101. -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : First introduction to the programming language. -->
<!-- keywords : javascript, syntax, types, arrays, conversion... -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/javascript-101.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# JavaScript 101

<!-- toc -->

<!-- slide : introduction -->

#### I know JavaScript - Show me!

<!-- .list.incremental -->
JavaScript is a **real language**. Building a modern dynamic website without knowing it is nonsense. A lot of people working on web applications and web sites learnt the language on the job. Code written is often hard to understand and hard to maintain. It doesn't follow best practices or standard rules which provoke strange behaviours and bugs. Taking time to understand the fundamentals is really important! By doing so you can stop being **a normal human** and become **a true web developer**.

<!-- slide : cover -->

## History
  
JavaScript was introduced by Brendan Eich in 1995 for Netscape Communications. It was submitted few months later to Ecma International for consideration as an industry standard. The result standard version is ECMAScript.

Even if the name comes from a partnership between Netscape and Sun Microsystems (distributor of Java) JavaScript is not a "light" version of Java.

<!-- .useful-links -->
* [A Brief History of JavaScript by Brendan Eich (video)](http://brendaneich.com/2010/07/a-brief-history-of-javascript/)

<!-- slide -->

## Definition & properties
  
JavaScript is a scripting language that supports multiple programming styles. It differs from other languages such as C++, Java or PHP with its dynamic behaviour, its first-class functions and its prototype-based inheritance.

JavaScript lovers consider these features as the force of the language. It's very common for people who try to write JavaScript like they write code in other languages to hate it. Don't make this mistake!

<!-- .incremental -->
* [Dynamic](http://en.wikipedia.org/wiki/Dynamic_language)
* [Weakly typed](http://en.wikipedia.org/wiki/Weak_typing)
* [Multi-paradigm](http://en.wikipedia.org/wiki/Multi-paradigm#Multi-paradigm_programming_language)
* [Imperative](http://en.wikipedia.org/wiki/Imperative_programming)
* [Functional](http://en.wikipedia.org/wiki/Functional_programming)
* [Object-oriented](http://en.wikipedia.org/wiki/Object-oriented_programming)
* [First-class functions](http://en.wikipedia.org/wiki/First-class_function)
* [Prototype-based](http://en.wikipedia.org/wiki/Prototype-based_programming)

<!-- slide -->

## Usages

<!-- .list.incremental -->
Even if it was originally designed to work in a **browser environment**, JavaScript is now used on several **different platforms**. Here are a few examples :

<!-- .incremental -->
* Web server
* Browser addons/extensions
* Mobile applications
* Databases consoles
* OpenOffice scripts/macros
* Java applications

<!-- .useful-links -->
* [node.js](http://nodejs.org/)
* [Building and extension for Firefox](https://developer.mozilla.org/en/Building_an_Extension)
* [Get started with Chrome extension development](http://code.google.com/chrome/extensions/getstarted.html)
* [PhoneGap](http://www.phonegap.com/)
* [MongoDB](http://www.mongodb.org/)
* [Mozilla Rhino](http://www.mozilla.org/rhino/)

<!-- slide -->

## Basic syntax

<!-- .list.incremental -->
JavaScript is **case-sensitive**. **Lines end by semicolon `;`**. **Block are delimited curly brackets by `{ }`**. Comments are between **`/* */` for multiple lines** or after **`//` for one line**.

<!-- slide -->

## Variables & Types

<!-- .list.incremental -->
In JavaScript, **Typing is dynamic**. Therefore, there is **NO type declaration** before variable names. Instead we use a **unique keyword : `var`**. Note that a variable **can be declared several times**. If it's non-declared, the variable is **automatically allocated at the first use**.

<!-- slide -->

### Number
  
Numbers like in any other languages are really important. Don't forget that a computer is primarly a super calculator. Integers and floats have the same type : `Number`. Of course, a variable can only be identified as type `Number` at execution time..

If you want to manipulate numbers, the objects `Number` and `Math` has lots of useful properties and methods. The other useful way to manipulate them is operators of course. See reference for more details.

<!-- .incremental -->
```javascript
// Integer
var i;           // first declaration of i (type is undefined)
i = 2;           // i is now a integer (type is number)
```

<!-- .incremental -->
```javascript
// Float
var i = -5.01;   // second declaration of i as a float (type is number)
j = 2;           // j was not declared, automatic assignement to 2
j = i + 1.12;    // j is now a float equal to 3.12 (still number)
```

<!-- .incremental -->
```javascript
var k = new Number(7);    // DO NOT USE : type is object and not number
```

<!-- .incremental -->
```javascript
// Specials
var a = 10 / 0;           // => Infinity
var b = -10 / 0;          // => -Infinity
var c = Math.sqrt(-1);    // => NaN : Not a Number
```

<!-- .useful-links -->
* [Number reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number)
* [Math reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math)
* [Why should you not use Number as a constructor? (stack overflow)](http://stackoverflow.com/questions/369220/why-should-you-not-use-number-as-a-constructor)
* [The_Complete_JavaScript_Number_Reference, usage of new Number(2) (hunlock)](http://www.hunlock.com/blogs/The_Complete_JavaScript_Number_Reference#quickIDX8)

<!-- slide -->

### String
  
Strings are really simple. Quotes or double quotes, no differences, some text in it and you're done. The most important property of a String when it comes to manipulation is `length`. It's not the only one, the `String` object contains a lot of useful properties and methods, see reference for more details.

The other way a good programer should manipulate string is regular expressions and as expected, JavaScript provides a regex engine and a `RegExp` object. Regex can be complicated to master, but the game is worth it since it's a multi language concept. See reference for more details.

<!-- .incremental -->
```javascript
var a = ""; // The empty string: it has zero characters
var b = 'There is no spoon.';
var c = "Only human.";
var d = 'pill="red"';
var e = "Free your mind.";
var f = "You're empty.\nSo are you."; // Type of all variables is string
```

<!-- .incremental -->
```javascript
var g = new String("Welcome to the real world.");
// DO NOT USE : type is object and not string
```

<!-- .useful-links -->
* [String reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)
* [Regex reference (MDN)](https://developer.mozilla.org/en/JavaScript/Guide/Regular_Expressions)
* [regular-expressions.info](http://www.regular-expressions.info/)
* [Online testing tool (gskinner.com)](http://gskinner.com/RegExr/)

<!-- slide -->

### Boolean
  
Nothing fancy here, `true` of `false`. You'll see later that other types of variables (Number, String...) can by evaluated as booleans according to some rules.

<!-- .incremental -->
```javascript
var realWorld = false;
var matrix = true;         // Type of all variables is boolean
```

<!-- .incremental -->
```javascript
var a = new Boolean(true); // DO NOT USE : type is object and not boolean
```

<!-- .useful-links -->
* [Boolean reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean)

<!-- slide -->

### null and undefined

<!-- .list.incremental -->
Both `null` and `undefined` are used for **absence of a value**. One is used when the variable **has been initialiazed : `null`**. The other one is used when the variable **has not been initialized : `undefined`**. It can be returned by **function that have no `return` statement**.

<!-- .incremental -->
```javascript
var neo;      // Type is undefined
neo = null;   // Type is object
```

<!-- .useful-links -->
* [Typeof null is object (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/typeof)
* [undefined reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/undefined)

<!-- slide : cover -->

## Arrays
  
An array is an ordered colleciton of values. Values can be of different types. Each value is called an element and is positioned in the array with a numeric index starting at zero.

The `Array` object has several properties and methods. The most important property is `length`, it contains the size of the array. See reference for more details.

<!-- .useful-links -->
* [Array reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array)

<!-- slide -->

### Creating
  
The easiest way to create an array is with square brackets and comma separated values in it. Note that you can create an array with 4 undefined elements, length will be 4.

```javascript
var a = [];                         // no elements
var b = new Array();                // equivalent to a
var c = [,,,,];                     // 4 elements, all undefined.
var d = new Array(4);               // equivalent to c
var e = ["the", 1, true];           // 3 elements of different types
var f = new Array("the", 1, true);  // equivalent to e
```

<!-- slide -->

### Reading and writing
  
Reading and writing in arrays is done with brackets and equal assignment operator. Note that reading from and index that haven't been initialized doesn't generate any errors, it returns `undefined`.

You can insert values in non consecutive indexes, it create a what's called a "sparse array". The length is updated to maximum index + 1.

<!-- .incremental -->
```javascript
var a = ["white"];    // Start with a one-element array
```

<!-- .incremental -->
```javascript
var b = a[0];         // b => "white"
var c = a[100];       // c => undefined (no error)
```

<!-- .incremental -->
```javascript
a[1] = 3.14;          // a => ["white", 3.14]
var i = 2;
a[i] = 3;             // a => ["white", 3.14, 3]
a[i + 1] = "rabbit";  // a => ["white", 3.14, 3, "rabbit"]
a[a[i]] = a[0];       // a => ["white", 3.14, 3, "white"]
```

<!-- .incremental -->
```javascript
var d = a.length;     // d => 4
```

<!-- slide -->

### Adding and deleting
  
To add and delete elements from an array, you can use the methods from the `Array` object. There's a lot of useful ones, from simple `pop` and `push` to more complex ones like `splice`. See reference for more details.

<!-- .incremental -->
```javascript
var a = ["follow", "the", "white", "rabbit"];
```

<!-- .incremental -->
```javascript
var b = a.pop();             // a => ["follow", "the", "white"]
                             // b => "rabbit"
var c = a.push("RABBIT");    // a => ["follow", "the", "white", "RABBIT"]
                             // c => 4 (new length)
```

<!-- .incremental -->
```javascript
var d = a.shift();           // a => ["the", "white", "RABBIT"]
                             // d => "follow"
var e = a.unshift("FOLLOW"); // a => ["FOLLOW", "the", "white", "RABBIT"]
                             // e => 4 (new length)
```

<!-- .incremental -->
```javascript
var f = a.splice(2, 1);       // a => ["FOLLOW", "the", "RABBIT"]
                              // f => "white"
var g = a.splice(1, 2, "ME"); // a => ["FOLLOW", "ME"]
                              // g => ["the", "rabbit"]
```

<!-- slide : cover -->

## Operators
  
Operators are really powerful in JavaScript. Unlike in some other languages like C, operators are not only used to do maths, they are also very useful with strings.

<!-- .useful-links -->
* [Operator Precedence reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/operators/operator_precedence)

<!-- slide -->

### Arithmetics
  
Arithmetics operators work the same way as a lot of other programming languages. Note that `+` is used to concatenate strings.

<!-- .incremental -->
```javascript
var a = 6 + 4;                    // a => 10
var b = -a;                       // b => -10
var c = 6 - 4;                    // c => 2
```

<!-- .incremental -->
```javascript
var d = 1, e = ++d;               // d and e are both 2
var f = 1, g = f++;               // f is 2, g is 1
var h = 7, i = --h;               // h and i are both 6
var j = 7, k = j--;               // j is 6, k is 7
```

<!-- .incremental -->
```javascript
var l = 3 * 3                     // l => 9
var m = 10 / 3                    // m => 3.3333333333333335
var n = 10 % 3                    // n => 1
```

<!-- .incremental -->
```javascript
var o = "Dodge" + " " + "this."   // o => "Dodge this.";
```

<!-- .useful-links -->
* [Arithmetics operators reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Arithmetic_Operators)

<!-- slide -->

### Equality
  
A particularity of JavaScript is the two kinds of equality comparison : strict and type-converting. Just remember that strict equal `===` compares both types and values and type-converting equal `==` converts one type to the other and just compares values.

<!-- .incremental -->
```javascript
// Equality
var a = "2" == 2;    // a => true
var b = "2" != 2;    // b => false
```

<!-- .incremental -->
```javascript
// Strict equality
var c = "2" === 2;   // c => false
var d = "2" !== 2;   // d => true
```

<!-- .useful-links -->
* [Comparison operators reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Comparison_Operators)

<!-- slide -->

### Comparison
  
Like arithmetics, comparison operators work the same way as a lot of other programming languages. Note that these operators can be used to compare string.

<!-- .incremental -->
```javascript
  var a = 2 > 2;          // a => false
  var b = 2 <= 2;         // b => true
  var c = "2" >= 2;       // c => true
  var d = 2 < 2;          // d => false
  var e = 2 <= 2;         // e => true
```

<!-- .incremental -->
```javascript
  var f = 'abc' < 'def'   // f => true
```

<!-- .useful-links -->
* [Comparison operators reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Comparison_Operators)

<!-- slide -->

### Logical

```javascript
var a = true && false;  // a => false
var b = true || false;  // b => true
var c = !true;          // c => false
```

<!-- .useful-links -->
* [Logical operators reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Logical_Operators)

<!-- slide -->

### Bitwise
  
Bitwise operators help programmers to use numbers like sequences of 32 bits (zeros and ones). It's not always easy to understand what's going on but it's very useful, for example if you're implementing bitmasks.

```javascript
var a = 42 & 2   // a =>          2  (AND)
var b =  7 | 2   // b =>          2  (OR)
var c =  7 ^ 2   // c =>          7  (XOR)
var d = ~8       // d =>         -7  (NOT)
var e =  1 << 3  // e =>          8  (Shift left)
var f =  8 >> 2  // f =>          2  (Shift right)
var g = -1 >>  2 // g =>         -1
var h = -1 >>> 2 // h => 1073741823  (Shift right with zero fill)
```

<!-- .useful-links -->
* [Bitwise operators reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Bitwise_Operators)

<!-- slide -->

### Assignement
  
Assignement operators saves you some place and can improve code readability. Use them carefuly!

```javascript
var a = 1, b = 0;
a += b    // a = a + b
a -= b    // a = a - b
a *= b    // a = a * b
a /= b    // a = a / b
a %= b    // a = a % b
a <<= b   // a = a << b
a >>= b   // a = a >> b
a >>>= b  // a = a >>> b
a &= b    // a = a & b
a |= b    // a = a | b
a ^= b    // a = a ^ b
```

<!-- .useful-links -->
* [Assignment operators reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Assignment_Operators)

<!-- slide -->

### `in`
  
The `in` operator is used to verify if a property is specified on an object. Be careful when you use it.

```javascript
var a = [1,9,4];
var b = (2 in a);          // b => true
var c = (9 in a);          // c => false
var d = (length in a);     // d => true
```

<!-- .useful-links -->
* [in operator reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/in)

<!-- slide -->

### `typeof`
  
`typeof` is used at compilation time to verify the type of a variable.

```javascript
var a = 3;
var b = typeof a;   // b => "number"
var c = "";
var d = typeof c;   // d => "string"
var e = true;
var f = typeof e;   // f => "boolean"
```

<!-- .useful-links -->
* [in operator reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/in)

<!-- slide : cover -->

## Type conversions

JavaScript is not statically typed but you can determine the type of a variable at execution time. Conversion from one type to another can be done explicitly or implicitly. It's really important to understand implicit ones, they can help you to avoid strange behaviours and bugs.
  
<!-- slide -->

### Explicit
  
Explicit conversions can for example help you to convert a string to a number. Note that even if integers and floats are both number, using `parseInt` on a float removes the decimals and makes it by definition an integer.

<!-- .incremental -->
```javascript
// to Number
var a = Number("10");         // a => 10
var b = Number(false);        // b =>  0
var c = parseInt("10", 10);   // c => 10
var d = parseInt(10.2);       // d => 10
var e = parseFloat("10.2");   // e => 10.2
```

<!-- .incremental -->
```javascript
// to String
var a = String(false);        // a => "false"
var b = String(10);           // b => "10"
var c = String(10.2);         // c => "10.2"
var d = (10).toString();      // d => "10"
```

<!-- .incremental -->
```javascript
// to Boolean
var a = Boolean(10);          // a => true
var b = Boolean(0);           // b => false
var c = Boolean(0.3);         // c => true
var d = Boolean("true");      // d => true
```

<!-- slide -->

### Implicit
  
There's a lot of ways to convert a string to a number. Performances can differ a lot depending on the technique used and the plateform. A shorter syntax is often prefered for bandwith uses.

Look carefully how the `+` operator behaves with strings and numbers.

<!-- .incremental -->
```javascript
// to Number
var a = +"10";            // a => 10
var b = "10" >> 0;        // b => 10
var c = "10" * 1;         // c => 10
var d = ~~"10";           // d => 10
var e = "2" * "5";        // e => 10 (both strings converts to number)
```

<!-- .incremental -->
```javascript
// to String
var a = 10 + "10";             // a => "1010"
var b = "10" + "10";           // b => "1010"
var c = 10 + " agents";        // c => "10 agents"
var d = 10 + 10 + " agents";   // d => "20 agents"
```

<!-- .incremental -->
```javascript
// to Boolean
var a = !!'morpheus';     // a => true
var b = !!'';             // b => false
var c = !!'0';            // c => true
var d = !!'1';            // d => true
```

<!-- .useful-links -->
* [String to number comparison (jsperf.com)](http://jsperf.com/number-vs-parseint-vs-plus/3)

<!-- slide -->

### Summary
  
Here's a little summary of conversions results. Pay attention especially to "anything to boolean" conversions, it can save you some time when used in `if` conditions.

<table class="incremental table table-bordered table-striped">
  <thead>
    <tr><th>Value                            <th>String             <th>Number  <th>Boolean
  </thead>
  <tbody>
      <tr><td>undefined                      <td>"undefined"        <td>NaN     <td>false
      <tr><td>null                           <td>"null"             <td>0       <td>false
  </tbody>
  <tbody>
      <tr><td>true                           <td>"true"             <td>1       <td>
      <tr><td>false                          <td>"false"            <td>0       <td>
  </tbody>
  <tbody>
      <tr><td>"" (empty string)              <td>                   <td>0       <td>false
      <tr><td>"1.2" (nonempty, numeric)      <td>                   <td>1.2     <td>true
      <tr><td>"one" (nonempty, non-numeric)  <td>                   <td>NaN     <td>true
  </tbody>
  <tbody>
      <tr><td>0                              <td>"0"                <td>        <td>false
      <tr><td>-0                             <td>"0"                <td>        <td>false
      <tr><td>NaN                            <td>"NaN"              <td>        <td>false
      <tr><td>Infinity                       <td>"Infinity"         <td>        <td>true
      <tr><td>-Infinity                      <td>"-Infinity"        <td>        <td>true
      <tr><td>1 (finite, non-zero)           <td>"1"                <td>        <td>true
  </tbody>
  <tbody>
      <tr><td>[] (empty array)               <td>""                 <td>0       <td>true
      <tr><td>[9] (1 numeric elt)            <td>"9"                <td>9       <td>true
      <tr><td>['a'] (any other array)        <td>use join() method  <td>NaN     <td>true
  </tbody>
</table>

<!-- slide : cover -->

## Statements

<!-- slide -->

### Conditionnal
  
In JavaScript, conditionnal statements behaves pretty much like in other common languages.

Note that the conditional ternary operator should only be used in simple cases. It is often use for variable assignment and its usage is synonym of shorter syntax and readability. If you think it doesn't make your code better, use a classic `if`.
  
#### if/else

<!-- .incremental -->
```javascript
if (username == null) {  // if username is null or undefined,
  username = "Trinity";  // define it
}
```

<!-- .incremental -->
```javascript
if (bulletCount == 1) {
  bulletCount += ' bullet';
} else {
  bulletCount += ' bullets';
}
```

<!-- .incremental -->
```javascript
var user = (name == null) ? 'default user' : name;
```

<!-- .useful-links -->
* [If...else reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Statements/if...else)

<!-- slide -->

#### switch
  
Switch usage is often advised when you have too much if statements. Don't forget the `break` keyword. Note that you can use string unlike some other languages.
  
```javascript
var quote;
switch (characterName) {
  case 'Smith':
    quote = 'Goodbye, Mr. Anderson...';
    break;
  case 'Neo':
    quote = 'I know kung fu.';
    break;
  default:
    quote = 'What is the Matrix?';
    break;
}
```

<!-- .useful-links -->
* [Switch reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Statements/switch)

<!-- slide -->

### loops

<!-- .incremental -->
```javascript
for (var i = 0; i < 10 ; i++) {
  doSomething();
}
```

<!-- .incremental -->
```javascript
var count = 0;
while (count < 10) {
  doSomething();
  count++;
}
```

<!-- .incremental -->
```javascript
var count = 100;
do {
  doSomething();
} while (--count > 0);
```

<!-- .useful-links -->
* [Loops reference (MDN)](https://developer.mozilla.org/en/JavaScript/Guide/Statements#Loop_Statements)

<!-- slide -->

#### for...in loops
  
for..in loops are used to iterate over properties of an object.

Array indexes are just enumerable properties with integer names. Therefore, for...in loops could be used to enumerate elements of an array.

Because of performance issues and in order to avoid bugs, use classic for loops instead of for..in with arrays.
  
```javascript
var a = [123, 456, 789];
for (var i in a) {      // DO NOT use with arrays
  doSomething(a[i]);
}
```

<!-- .list.incremental.warning -->
Because of **performance issues** and in order to avoid **"bugs" and "strange behaviours"**, **use classic for loops instead** of for..in with arrays.

<!-- .useful-links -->
* [for...in loops reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in)
* [for vs. for..in (JSperf.com)](http://jsperf.com/for-vs-for-in)

<!-- slide -->

## Simple functions
  
Functions are declared with the `function` keyword. There's no return type and no variable type for the arguments.

<!-- .incremental -->
```javascript
function function_name(var1, var2, var3) { // no variable types
  /*
    Some code here
  */
  return return_val;                       // optional
}
```

<!-- .incremental -->
```javascript
function use_args(var1, var2, var3) {
  var a = arguments.length;       // array containing all the arguments
  var result = "";
  for (var i = 0; i < a; i++) {
    result += " " + arguments[i];
  }
  return result;
}
var b = use_args("Déjà", "vu");   // b => " Déjà vu", var3 = undefined
```

<!-- .useful-links -->
* [Function reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function)

<!-- slide : cover -->

## Variable scope
  
The scope of a variable is the region of your code in which it is defined. JavaScript has a very specific way of handling scope. Scope can be altered by `function`s and the `var` keyword.

Note that statements like `if`, `for`... doesn't change scope of variables. See reference for more details.

<!-- .useful-links -->
* [Variable scope (MDN)](https://developer.mozilla.org/en/JavaScript/Guide/Values,_Variables,_and_Literals#Variable_Scope)

<!-- slide -->

### Global  vs. local
  
Variables declared outside of any function are defined everywhere in your code. They are considered global.

Variables declared inside a function are defined only within the function body. They are considered local to the function.
  
```javascript
var name = "Andy";             // not in a function => variable is global

function foo() {
  var lastName = "WACHOWSKI";   // inside a function => variable is local
  return name + ' ' + lastname; // can access global variable "name"
}
foo();

var a = lastName;           // ReferenceError lastName is not defined
                            // can not access local variable "lastName"
```

<!-- slide -->

### Don't forget `var`
  
If you ommit the `var` keyword inside a function, the variable is automatically considered global. It can have serious side effects. It's considered bad practice, you shouldn't use this.

<!-- .incremental -->
```javascript
var i = 1;
function foo() {
  var i = 3;
}
foo();
var a = i;        // a => 1
```

<!-- .incremental -->
```javascript
var i = 1;
function foo() {
      i = 3;      // no var keyword !!! :-(
      j = 4;      // no var keyword !!! :-(
}
foo();
var a = i;        // a => 3
var b = j;        // b => 4
```

<!-- slide : cover -->

## Browser environment

<!-- slide -->

### Integration
  
The best way to integrate JavaScript in a web page is through a JavaScript file and a link to it in your HTML page. The link can be placed in `head` or `body` it really depends on the situation.

```html5
<!DOCTYPE html>
<html>
  <head>
    <script src="myscript1.js"></script>   <!-- unobstrusive JS -->
    <script> // some code </script>        <!-- REALLY BAD PRACTICE -->
  </head>
  <body>
    <script src="myscript2.js"></script>   <!-- unobstrusive JS -->
  </body>
</html>
```

<!-- .list.incremental.warning -->
**Avoid direct JavaScript in HTML documents**, it's a bad practice. It **breaks the structure/behaviour separation**. **Code can't be reused on other pages**. It also prevents you from having a changeable and maintenable code.

<!-- .useful-links -->
* [Unobstrusive JavaScript (labs.adobe.com)](http://labs.adobe.com/technologies/spry/articles/best_practices/separating_behavior.html)

<!-- slide -->

### Browser objects
  
Every JavaScript plateform/environment adds objects with global scope. They're meant to provide helpful features to developers. In web browsers the most important ones are : `document` and `window`.

Another object is present but only in modern browsers : `console`. Since it's not standard, implementations may differ, see references for more details. Remember that older browsers don't support it, so don't let `console.log('foo')` etc... in production code.

<!-- .incremental -->
```javascript
var title = document.title;
var href = window.location.href;
var userAgent = window.navigator.userAgent;
```

<!-- .incremental -->
```javascript
window.alert('Never send a human to do a machine\'s job.');
var bluePill = confirm('Take the blue pill?');
var name = prompt('What is your name?');
```

<!-- .incremental -->
```javascript
console.log('Perhaps we are asking the wrong questions.');
console.error('Nothing. Just had a little déjà vu.');
console.info('A déjà vu is usually a glitch in the Matrix.');
console.warn('The Matrix is a system, Neo. That system is our enemy.');
```

<!-- .useful-links -->
* [document reference (MDN)](https://developer.mozilla.org/en/DOM/document)
* [window reference (MDN)](https://developer.mozilla.org/en/DOM/window)
* [Firefox web console (MDN)](https://developer.mozilla.org/en/Using_the_Web_Console)
* [Chrome web console](http://code.google.com/chrome/devtools/docs/console.html)
* [IE web console](http://msdn.microsoft.com/en-us/library/ie/gg589507.aspx)
* [Opera web console](http://www.opera.com/dragonfly/documentation/console/)
* [Safari web console](http://developer.apple.com/library/safari/%23documentation/AppleApplications/Conceptual/Safari%20Developer%20Guide/DebuggingYourWebsite/DebuggingYourWebsite.html#/apple_ref/doc/uid/TP40007874-CH8-SW17)

<!-- slide -->

## Tools
  
Your browser should have two very useful tools to work with JavaScript :
  
* JavaScript Debugger
* JavaScript Console

There's also great tools on the web :

* [JSfiddle (online playground)](http://jsfiddle.net/)
* [tinkerbin (online playground)](http://tinkerbin.com/)
* [JSperf (online benchmarking tool)](http://jsperf.com/)

<!-- slide -->

## Compatibility

<!-- .list.incremental -->
Even if JavaScript has been standardized to ECMAScript, each platform doesn't always support all the latest features. You should **always read documentation** and **look up if it's supported**. You should also **test your code over the different browsers** of your audience.
  
There's often two (or more) ways to do the same thing in JavaScript. It's not because two browsers have feature X and Y that they implemented it the same way. Performances can be very different. As always : read documentation and test...
  
<!-- slide -->

## Documentation & links

* [JavaScript Reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference)
* [ECMAScript documentation](http://www.ecmascript.org/docs.php)
* [JavaScript Garden (github)](http://bonsaiden.github.com/JavaScript-Garden)
* [Eloquent JavaScript](http://eloquentjavascript.net/)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
