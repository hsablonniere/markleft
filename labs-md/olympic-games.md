<!-- title : Lab : Olympic Games -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Advanced JavaScript exercises. Objects, Dates, closures... -->
<!-- keywords : javascript, object, date, closure -->

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet">
<link href="../css/theme-2012-lab.css" rel="stylesheet">

# Olympic Games

<!-- toc -->

![lab-logo](../img/olympic-rings.svg)

Welcome to your new lab, here's the instructions for each exercise :

* Read the lesson entirely!!!!
* Identify your learning goals.
* Understand the context.
* Follow the steps and rules carefully.
* Commit **ONLY** the files that are indicated.

You must try to find documentation and solution by yourself. The course contains links to JavaScript references and a lot of other interesting websites. Don't forget : the web is your friend ;-)

Bon courage...

## What time is it Ben?

### Learning goals

1. Know how to manipulate dates.
1. Know how to properly build objects.
1. Understand how functions can be passed as arguments.
1. Understand how variable scope (local/global) behaves.

### Context

In this exercise, we'll try to display a proper Big Ben clock with additionnal infos about the London Olympics.

### Steps

* You can have a look at [what-time-is-it-ben.html](../labs-files/olympic-games/what-time-is-it-ben.html) but the markup has no effect on the exercise.
* Every second, a `setInterval` calls the `clock.displayDate` function which doesn't exist yet.
* The function `clock.displayDate` is called with one parameter. It is a function that you must used to update the HTML text.
* Create a file named `clock.js` and add the necessary code to display the date.


* Every second, a `setInterval` calls the `clock.displayTime` function which doesn't exist yet.
* The function `clock.displayTime` is called with two parameters. They are functions that you must used to update the angle (in degrees) of the hour and minutes hands on Big Ben.
* Add the necessary code to `clock.js` to display the time on the clock.


* It should be obvious that Big Ben is supposed to display London's time. It's a tricky thing to do.
* Your visitors aren't always on the same timezone as you. Your code must work and display the correct time if you're in New-York, Sidney...
* Add a `clock.setTimezoneShift` function in your code. It takes one parameter, the shift from UTC in minutes.  In the case of London, it's 0.
* It will enable your code to handle more cities...

### Rules

* Your date **MUST** be formatted with leading zeros (if needed like) these examples : `01 October 2012 AM`, `21 December 2012 PM`...
* You **CANNOT** have any global variables except `clock`.
* The hours hand **MUST** display intermediate states!! If it's 3:30, it should be between 3 and 4.
* You **MUST** display the time of London!!

### Deliveries

<!-- .deliveries -->
* big-ben-bg.png
* big-ben-hours.png
* big-ben-minutes.png
* olympic-games.css
* what-time-is-it-ben.html
* big-ben.js
* clock.js

## to be continued

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
