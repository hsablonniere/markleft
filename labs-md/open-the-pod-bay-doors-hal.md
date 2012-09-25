<!-- title : Lab : Open the pod bay doors HAL! -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : First JavaScript exercises. String manipulation, type conversion, array traversing... -->
<!-- keywords : javascript, string, types, array -->

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet">
<link href="../css/theme-2012-lab.css" rel="stylesheet">

# Open the pod bay doors HAL!

<!-- toc -->

![lab-logo](../img/hal-9000.png)

Welcome to your new lab, here's the instructions for each exercise :

* Read the lesson entirely!!!!
* Identify your learning goals.
* Understand the context.
* Follow the steps and rules carefully.
* Commit **ONLY** the files that are indicated.

You must try to find documentation and solution by yourself. The course contains links to JavaScript references and a lot of other interesting websites. Don't forget : the web is your friend ;-)

Bon courage...

#### Introduction

In the movie "2001, A Space Odyssey", one of the main character is not a human, he is a computer. His name is HAL 9000. He is one of the most famous A.I. computer in fiction.

If you don't know him yet, here's the anthology scene everyone remembers about him. He refuses to let the astronaut come back into the spaceship after finding out that he wanted to shut him down. Since HAL controls the spaceship and he is the only one "on board", Dave is in deep troubles.

<iframe width="560" height="315" src="http://www.youtube.com/embed/6MMmYyIZlC4" frameborder="0" allowfullscreen></iframe>

It seems that other speech capable "so-called" A.I. like Apple Siri has easter eggs concerning this movie :

<iframe width="560" height="315" src="http://www.youtube.com/embed/YAjhDx4yoAA" frameborder="0" allowfullscreen></iframe>

This lab will help you to build a client side [chatbot](http://en.wikipedia.org/wiki/Chatterbot), step by step. As you guessed, our chatbot is named HAL, we'll try to mimic some of his best quotes and add a lot of other features to his skillset.

## Be polite and say Hi!

### Learning goals

1. Know how to manipulate and analyse strings.
1. Separate and organize your code into small functions.

### Context

In this exercise, we'll need HAL to have his firsts very narrow conversation skills. He must be able to :

* Reply to some famous Dave questions from the movie (look at [quotes](http://www.imdb.com/title/tt0062622/quotes?qt=qt0396921)).
* Remember your name and use it when answering theses questions.

### Steps

* Create a file named `hal-custom.js` and create a function with one parameter named `halHandleMessage(msg)`.
* After adding this function, you'll see that submitting text from the input at the bottom of the screen automatically calls your function with the text as argument. This behaviour is handled by the code in [hal-core.js](../labs-files/open-the-pod-bay-doors-hal/hal-core.js). We'll explain the code of this file in another lesson.
* Add some code in `hal-custom.js` to handle questions from the movie and reply with the correct answer.
* Add some code in `hal-custom.js` to handle something like `My name is John` and save the name. Look at [hal-core-knowledge.js](../labs-files/open-the-pod-bay-doors-hal/hal-core-knowledge.js). You'll see that by default HAL thinks your name is `Dave`. If you say your name to HAL, he should use the famous quotes but use your name instead of Dave.
* Add some code in `hal-custom.js` to always answer the same sentence by default : `I'm sorry, Dave. I'm afraid I can't do that.`. Don't forget to adapt the name.
* Use already existing functions `halWrite(stringToWrite)` and `halSay(stringToSay)` when you want HAL to write and/or say something.

### Rules

* Questions to HAL **MUST** be case insensitive.
* Questions to HAL **MUST** be understood even with punctuation differences.
* You **MUST** organize your code in several functions when you think it's necessary.
* All the functions you add **MUST** start with the prefix `hal`.

### Deliveries

<!-- .deliveries -->
* carbon-fibre.png
* hal.jpg
* hal.html
* hal-core.js
* hal-core-knowledge.js
* hal-core.css
* hal-custom.js
* speakClient.js
* speakGenerator.js
* speakWorker.js

## The metric system!

### Learning goals

1. Know how to manipulate and analyse simple arrays and more complex ones.
1. Know how to convert between different types (String, Number, Boolean...)
1. Know how to do some Maths : add, multiply, round...

### Context

Dave is American. Using the metric system is hard for him, even with [XKCD's help](http://xkcd.com/526/). We'll help Dave by giving HAL the ability to convert lenghts and temperatures.

### Steps

* Have a look at [hal-core-knowledge.js](../labs-files/open-the-pod-bay-doors-hal/hal-core-knowledge.js). You'll see that HAL has all the conversion informations to convert lengths.
* Add some code in `hal-custom.js` to handle length conversions between the different imperial and metric units HAL knows about.
* As you can see in [hal-core-knowledge.js](../labs-files/open-the-pod-bay-doors-hal/hal-core-knowledge.js), HAL doesn't know anything about temperature conversion.
* Create a file named `hal-custom-knowledge.js` and add what HAL needs to know to convert temperatures.
* Add some code in `hal-custom.js` to handle temperature conversion between [Celsius](http://en.wikipedia.org/wiki/Celsius) and [Fahrenheit](http://en.wikipedia.org/wiki/Fahrenheit).


### Rules

* Length conversions queries **MUST** be like these examples : `4 ft in m`, `5.43 foot in meters`. It can be the unit's short hand or its full name (singular or plural).
* Length conversions answers **MUST** be like this example : `1 foot = 0.3048 meters`.
* Temperature conversions queries **MUST** be like this example : `19 degree celsius to degrees fahrenheit`.
* Temperature conversions answers **MUST** be like this example : `1 degree Celsius = 33.8 degrees Fahrenheit`.
* If the result is not exact, you **MUST** round it to 2 significant figures after decimal point.
* **ALWAYS** use the unit's full name in answers. In English, only 1 is singular, the other numbers are plural.
* Questions to HAL **MUST** be case insensitive.
* If a query doesn't follow the specified format, HAL **MUST** answer with the default answer. Look at previous exercise.
* You **MUST** organize your code in several functions when you think it's necessary.
* All the functions and variables you add **MUST** start with the prefix `hal`.

### Deliveries

<!-- .deliveries -->
* carbon-fibre.png
* hal.jpg
* hal.html
* hal-core.js
* hal-core-knowledge.js
* hal-core.css
* hal-custom.js
* hal-custom-knowledge.js
* speakClient.js
* speakGenerator.js
* speakWorker.js

## Open the pod bay doors HAL!

This is a *"be awesome"* exercise!

### Learning goals

1. Know how to organize big and complex code.
1. Discover and experiment with all the methods of [String](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String), [Number](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number), [Math](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math) and [Array](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array).

### Context

HAL can do so much more. Try to find new very original and sophisticated services that HAL could help with. He could play games, solve problems, answer questions about general culture... Let your imagination do the work!

Don't forget that a good chatbot always has easter eggs...

### Steps

* Add all your new functions and real code in `hal-custom.js`.
* Add all the new general variables HAL needs to know about in `hal-custom-knowledge.js`.
* If you need to have multiline answers just use `\n` to pass lines.
* If you want to change completely the way HAL look likes, create `hal-custom.css` and hack around...

### Rules

* You **MUST** organize your code in several functions when you think it's necessary.
* All the functions and variables you add **MUST** start with the prefix `hal`.
* HAL **CANNOT** open the pod bay doors.

### Deliveries

<!-- .deliveries -->
* carbon-fibre.png
* hal.jpg
* hal.html
* hal-core.js
* hal-core-knowledge.js
* hal-core.css
* hal-custom.js
* hal-custom-knowledge.js
* (hal-custom.css)
* speakClient.js
* speakGenerator.js
* speakWorker.js

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
