<!-- title : Have a look at my prototype -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Details about JavaScript inheritance and other OO concepts. -->
<!-- keywords : javascript, prototype, inheritance, object-oriented -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/have-a-look-at-my-prototype.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# Have a look at my prototype

<!-- toc -->

<!-- slide : introduction -->

#### My precious prototype...

<!-- .list.incremental -->
After two courses on the JavaScript language, we're still missing an **important feature** of JavaScript : inheritance. We'll try to understand how it works and how it differs form other languages. At the end of this course, your **current powers** will be **much greater!** You'll be able to build great JavaScript applications. It's not a reason to **take a nap**, a whole **life of practice** awaits you...

<!-- slide : cover -->

## Prototype-based programming

Most object-oriented programming languages are class-based. Classes are used to define a common set of properties and methods for all the objects/instances of this class. JavaScript doesn't have classes. There's no `class` keyword (yet).

Instead of that, JavaScript for a prototype-based approach. Objects can serve as prototypes of other objects and share common behaviour and data structure. Objects can be build using `Object.create()` or using the `new` operator and a constructor function.

<!-- slide : cover -->

## The JavaScript way

<!-- slide -->

### Object literals

We already saw how to create object literals that can have properties and methods. Here's two examples :

<!-- .incremental -->
```javascript
var frodo = {
  name: 'Frodo',
  fullname: 'Frodo Baggins',
  race: 'Hobbit',
  sayHello: function () {
    console.log("My name is " + this.name + " and I'm a " + this.race);
  }
};
```

<!-- .incremental -->
```javascript
var sam = {
  name: 'Sam',
  fullname: 'Samwise Gamgee',
  race: 'Hobbit',
  sayHello: function () {
    console.log("My name is " + this.name + " and I'm a " + this.race);
  }
};
```

These examples don't follow the [Don't Repeat Yourself pattern](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself). We have a lot of code duplication. As you can see, we declared the `sayHello` function twice. Event if the code is the same, it's not the same function. It takes more place in memory and creating a function has always a cost. Imagine you have one thousand hobbits to create!!

<!-- .incremental -->
```javascript
// Code duplication & Bad performances !!
console.log(frodo.sayHello === sam.sayHello); // => false
```

<!-- slide -->

### Object.create()

#### Usage

Using JavaScript's prototype-based inheritance, we can use an object as a prototype to create other ones like it.

Remember the `frodo` object?

<!-- .incremental -->
```javascript
var frodo = {
  name: 'Frodo',
  fullname: 'Frodo Baggins',
  race: 'Hobbit',
  sayHello: function () {
    console.log("My name is " + this.name + " and I'm a " + this.race);
  }
};
```

Let's create a `sam` using `frodo` as a prototype.

<!-- .incremental -->
```javascript
var sam = Object.create(frodo);
sam.name = 'Sam';
sam.fullname = 'Samwise Gamgee';
```

Now we have true code reuse!!

<!-- .incremental -->
```javascript
// No code duplication & Better performances !!
sam.sayHello();                               // => "My name is Sam and I'm a Hobbit"
console.log(sam.race);                        // => "Hobbit"
console.log(frodo.sayHello === sam.sayHello); // => true
```

<!-- slide -->

#### Modifications on the object used as a prototype

If I modify the object used as a prototype like this :

<!-- .incremental -->
```javascript
// Modifications on the object used as a prototype
frodo.sayHello = function () {
  console.log(this.name + ' (' + this.race + ')');
};
frodo.race = 'HOBBIT';
```

The objects created with it are impacted :

<!-- .incremental -->
```javascript
// Objects with it are impacted
sam.sayHello();                               // => "Sam (HOBBIT)"
console.log(sam.race);                        // => 'HOBBIT'
console.log(frodo.sayHello === sam.sayHello); // => true
```

<!-- slide -->

#### Modifications on the created objects

If I do direct modifications on created objects like this :

<!-- .incremental -->
```javascript
// Modifications on created objects
sam.sayHello = function () {
  console.log("Hello, I'm Sam ;-)");
};
sam.race = "a hobbit but I'm not sure...";
```

The object used as a prototype won't be altered :

<!-- .incremental -->
```javascript
// Objects with it are impacted
frodo.sayHello();                             // => "Frodo (HOBBIT)"
sam.sayHello();                               // => "Hello, I'm Sam ;-)"
console.log(frodo.race);                      // => "HOBBIT"
console.log(sam.race);                        // => "a hobbit but I'm not sure..."
console.log(frodo.sayHello === sam.sayHello); // => false
```

<!-- slide -->

#### Best practices

It often feels better to create a `hobbit` object and create `frodo` and `sam` based on it.

<!-- .incremental -->
```javascript
var hobbit = {
  race: 'Hobbit',
  sayHello: function () {
    console.log("My name is " + this.name + " and I'm a " + this.race);
  }
};
```

<!-- .incremental -->
```javascript
var frodo = Object.create(hobbit);
frodo.name = 'Frodo';
frodo.fullname = 'Frodo Baggins';
```

<!-- .incremental -->
```javascript
var sam = Object.create(hobbit);
sam.name = 'Sam';
sam.fullname = 'Samwise Gamgee';
```

<!-- .warning -->
Don't be confused with what we just did. `hobbit` is not a class. It has many differences.

<!-- slide : cover -->

### Prototype chain

When you try to access a property of an object, if the object doesn't have the property on its own, the JavaScript runtime transparently looks for the property on the prototype of the object.

<!-- slide -->

#### hasOwnProperty()

You can verify if an object has the property on its own using `hasOwnProperty` on it.

<!-- .incremental -->
```javascript
console.log(sam.hasOwnProperty('race'));    // => false
console.log(hobbit.hasOwnProperty('race')); // => true
console.log(sam.race);                      // => "Hobbit"
```

Because prototypes are objects, if the property can't be found on the prototype, the runtime transparently looks for the property on the prototype of the prototype and so on until there's no prototype.

This is known as the prototype chain.

<!-- .incremental -->
```javascript
// hasOwnProperty
var merry = Object.create(sam);
merry.name = 'Merry';
merry.fullname = 'Meriadoc Brandybuck';
console.log(merry.hasOwnProperty('race'));  // => false
console.log(sam.hasOwnProperty('race'));    // => false
console.log(hobbit.hasOwnProperty('race')); // => true
console.log(merry.race);                    // => "Hobbit"
```

<!-- slide -->

#### isPrototypeOf() & Object.getPrototypeOf()

We just used `hasOwnProperty` on `hobbit`. If you're following, you must suspect `hobbit` to have a prototype even if we didn't assign one.

When you use an object literal (like we did to create `hobbit`, the runtime adds implicitly a prototype to your object. This special prototype is the object `Object.prototype`.

If you want to verify if an object is the prototype of another one, you can use `isPrototypeOf()`. Be careful it works for all the prototype chain.

<!-- .incremental -->
```javascript
console.log(hobbit.isPrototypeOf(frodo)); // => true
console.log(hobbit.isPrototypeOf(sam));   // => true
```

<!-- .incremental -->
```javascript
console.log(hobbit.isPrototypeOf(merry)); // => true
```

You can retrieve the prototype of an object using `Object.getPrototypeOf()`.

<!-- .incremental -->
```javascript
console.log(Object.getPrototypeOf(hobbit) === Object.prototype);   // => true
console.log(Object.getPrototypeOf({}) === Object.prototype);       // => true
```

You can create object with no prototype if you want.

<!-- .incremental -->
```javascript
var nakedObj = Object.create(null);
console.log(Object.getPrototypeOf(nakedObj) === Object.prototype); // => false
```

<!-- slide : cover -->

## The old-school way

JavaScript was written in ten days and it was supposed to seduce Java developpers and classical-inheritance language users. Because of that, the `Object.create()` and stuff wasn't available on the first versions.

To attract classical-inheritance language users and hide a little the prototype nature of the language, constructor functions and the `new` operator were introduced from the beginning.

<!-- slide -->

### Constructor functions

Like `Object.create()`, constructor functions can create objects. It has a small advantage but the syntax tricky and weird.

Let's take our example back :

<!-- .incremental -->
```javascript
var hobbit = {
  race: 'Hobbit',
  sayHello: function () {
    console.log("My name is " + this.name + " and I'm a " + this.race);
  }
};
```

This way, you can write some code that helps to create an object giving parameters to your function. It's one of the only advantages with this method.

The object being created is accessible with `this`. New properties (and maybe functions) must be assigned to `this`.

The convention is to always use uppercase for the first letter.

<!-- .incremental -->
```javascript
var Hobbit = function (name, fullname) {
  this.name = name;
  this.fullname = fullname;
};
Hobbit.prototype.race = 'Hobbit';
Hobbit.prototype.sayHello = function () {
  console.log("My name is " + this.name + " and I'm a " + this.race);
};
```

It becomes weird when you want to add functions to your new objects. If you add them in the constructor on `this`, all objects created with it will have a different function instance.

Instead, you must use the `prototype` property of the constructor function. Be careful, the `prototype` property of the function is not the same thing as the prototype of the function.

<!-- .incremental -->
```javascript
console.log('race' in Hobbit);           // => false
console.log('race' in Hobbit.prototype); // => true
console.log('call' in Hobbit);           // => true
console.log('call' in Hobbit.prototype); // => false
```

<!-- .useful-links -->
* [Using a constructor function (MDN)](https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Working_with_Objects#Using_a_Constructor_Function)

<!-- slide -->

### The new operator

Once you have a constructor function, you can use it but you must do it the right way with the `new` operator.

Instead of using `Object.create()` and do assignation like this :

<!-- .incremental -->
```javascript
var frodo = Object.create(hobbit);
frodo.name = 'Frodo';
frodo.fullname = 'Frodo Baggins';
```

You can do this :

<!-- .incremental -->
```javascript
var frodo = new Hobbit('Frodo', 'Frodo Baggins');
```

The usage is simpler but again, it's one of the only advantages.

If you don't use the `new` operator, it will explode in your face. Remember this warning because it will happen some day... Uppercase letter should be a reminder.

<!-- .incremental -->
```javascript
// no new operator, DON'T DO THAT AT HOME KIDS
var frodo = Hobbit('Frodo', 'Frodo Baggins');
console.log(frodo);                      // => undefined
console.log(window.name);                // => "Frodo" (global var)
console.log(window.fullname);            // => "Frodo Baggins" (global var)
```

<!-- .useful-links -->
* [new operator reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/new)

<!-- slide -->

## Exceptions

Exceptions in JavaScript are similar to those in C++. They are objects that can be thrown and catched with a `try/catch` block.

The simplest way to throw an exception is this one :

<!-- .incremental -->
```javascript
var bearRing = function (person) {
  if (person === 'Gandalf') {
    throw new Error('Gandalf cannot bear the ring!');
  } /* some code */
};
```

You'll catch it like this :

<!-- .incremental -->
```javascript
try {
  bearRing('Gandalf');
} catch (e) {
  console.error(e.name + ': ' + e.message);
};
```

You can also use the `Error` constructor or create a new constructor, but it's often not necessary.

<!-- .incremental -->
```javascript
var RingError = function (person) {
  this.name = "RingError";
  this.message = "The ring can't be beared by " + person + ".";
};
RingError.prototype = new Error();
```

<!-- .incremental -->
```javascript
var bearRing = function (person) {
  if (person === 'Gandalf') {
    throw new RingError(person);
  } /* some code */
};
```

<!-- .warning -->
Exception are rarely used in JavaScript. One reason is that it cost CPU and memory. Use them for exceptional behaviour and never in a loop.

<!-- .useful-links -->
* [try/catch reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Statements/try...catch)
* [Error reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error)

<!-- slide : cover -->

## Ninja stuffs

<!-- slide -->

### get & set

<!-- .incremental -->
```javascript
var elf = {
  get age() {
    return this._age;
  },
  set age(age) {
    if (!isNaN(age)) {
      this._age = age;
    } else {
      throw {
        name: 'TypeError',
        message: 'Age type error'
      };
    }
  }
};
// Doesn't work on IE < 9   :-(
```

<!-- .incremental -->
```javascript
var arwen = Object.create(elf);
arwen.age = 2901;
var legolas = Object.create(elf);
legolas.age = 'veryOld'; // Fails!!
```

<!-- .useful-links -->
* [get reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/get)
* [set reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/set)

<!-- slide -->

### defineProperty

Once an object has been defined like this :

<!-- .incremental -->
```javascript
var elf = {
  race: 'Elf',
  canBeVeryOld: true,
  pointyEars: true
};
```

You can still define special properties on it like configurable, enumerable, value, writable, get, set...

<!-- .incremental -->
```javascript
Object.defineProperty(elf, "age", {
  get: function () {
    return this._age;
  },
  set: function (age) {
    if (!isNaN(age)) {
      this._age = age;
    } else {
      throw new TypeError('zefze');
    }
  }
});
// Doesn't work on IE < 9   :-(
```

<!-- .useful-links -->
* [defineProperty reference (MDN)](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperty)

<!-- slide : cover -->

## Differences with other OO Languagues

<!-- slide -->

### Encapsultation

By encapsulation, we often mean that an object is like a black box and we just need to worry about the interface and not what's inside.

<!-- .list.incremental -->
Following this definition, JavaScript does not support this feature because there's **no `private` keyword**.

<!-- .list.incremental -->
However, we already saw that **hiding properties** or methods **can be done using closures **.

<!-- .list.incremental -->
We also learnt how we can specify **getter and setter** that **hide behaviour** under a **simple `=` assignation**.

<!-- slide -->

### Destructors

<!-- .list.incremental -->
JavaScript **doesn't need destructors** since it has a **garbage collector**...

<!-- slide -->

### Multiple inheritance

<!-- .list.incremental -->
Because of its prototype-based inheritance, JavaScript **doesn't support multiple inheritance** **as class-based languagues mean it**. But using the **prototype chain** and/or the fact that function are **first-class citizens**, **you can emulate it**.

<!-- slide -->

### Static members

<!-- .list.incremental -->
If you need **"static" members** **on classes** like in class-based languages, just **use the constructor function** **and augment it**...

<!-- slide -->

### Polymorphism & Duck typing

<!-- .list.incremental -->
This concept allow us to **handle objects of different types** **using a uniform interface**. In a dynamic language like JavaScript, you **don't have to bother about types**. You just need to **worry about given properties and methods** of an object. **It's called duck typing**.

<!-- slide -->

<!-- .quote -->
> "When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck."

> James Whitcomb Riley

<!-- slide -->

<!-- .quote -->
> Learning something doesn't mean you have to forget the rest...

> Someone! (maybe me, don't remember...)

<!-- slide : last-question -->

It is really important to understand that JavaScript is different from language X and Y... You should write JavaScript with JavaScript style and features.

Don't use it the exact same way you use other languages...

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
