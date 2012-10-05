<!-- title : Lab : 2 tickets please -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Experimenting with the DOM, create, manipulate, remove, transform... -->
<!-- keywords : javascript, dom, tree, manipulation, json -->

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet">
<link href="../css/theme-2012-lab.css" rel="stylesheet">
<link href="../css/hljs-github.css" rel="stylesheet">

# 2 tickets please!

<!-- toc -->

![lab-logo](../img/concert-ticket.jpg)

Welcome to your new lab, here's the instructions for each exercise :

* Read the lesson entirely!!!!
* Identify your learning goals.
* Understand the context.
* Follow the steps and rules carefully.
* Commit **ONLY** the files that are indicated.

You must try to find documentation and solution by yourself. The course contains links to references and a lot of other interesting websites. Don't forget : the web is your friend ;-)

Bon courage...

## One month, two months, three months...

### Learning goals

1. Know how to manipulate dates.
1. Know how to add elements to the DOM (directly and with jQuery).

### Context

In this exercise, we'll try to display an empty calendar for the next 6 months. The result should look like [2-tickets-please-calendar.html](../labs-files/2-tickets-please/2-tickets-please-calendar.html).

We'll use both direct DOM manipulation and using jQuery. If you're still wondering which one is better, have look at this [jsperf](http://jsperf.com/dom-vs-innerhtml/21).

### Steps

#### Months (no jQuery)

* Create a file named `2-tickets-please-calendar.js`.
* Add an array of all the 12 months names in this file.
* Starting from current month, add some code to display 6 months names in the existing `.calendar` div with this structure :

```html
<div class="calendar">
  <div class="cal-month" data-month="9" data-year="2012">
    <h2 class="cal-month-name">October 2012</h2>
  </div>
  <div class="cal-month" data-month="10" data-year="2012">
    <h2 class="cal-month-name">November 2012</h2>
  </div>
  <div class="cal-month" data-month="11" data-year="2012">
    <h2 class="cal-month-name">December 2012</h2>
  </div>
  <div class="cal-month" data-month="0" data-year="2013">
    <h2 class="cal-month-name">January 2013</h2>
  </div>
  <div class="cal-month" data-month="1" data-year="2013">
    <h2 class="cal-month-name">February 2013</h2>
  </div>
  <div class="cal-month" data-month="2" data-year="2013">
    <h2 class="cal-month-name">March 2013</h2>
  </div>
</div>
```

* In the same loop, you must also insert months names in the `.months` unordered list with this structure :

```html
<ul class="months">
  <li class="month-name">October 2012</li>
  <li class="month-name">November 2012</li>
  <li class="month-name">December 2012</li>
  <li class="month-name">January 2013</li>
  <li class="month-name">February 2013</li>
  <li class="month-name">March 2013</li>
</ul>
```

#### Day names (using jQuery)

* Add an array of all the 7 day names in your file.
* In the same loop, for each months, you're going to add the day names of the week. Here's an example for a month :

```html
<div class="cal-month" data-month="9" data-year="2012">
  <h2 class="cal-month-name">October 2012</h2>
  <div class="day-names">
    <div class="day-name">Monday</div>
    <div class="day-name">Tuesday</div>
    <div class="day-name">Wednesday</div>
    <div class="day-name">Thursday</div>
    <div class="day-name">Friday</div>
    <div class="day-name">Saturday</div>
    <div class="day-name">Sunday</div>
  </div>
</div>
```

* Look carefully at the jQuery documentation on how to add elements to another.

#### Days (using jQuery)

* To finish this empty calendar, we just miss the days of the months.
* We'll need a function that computes the number of days in a month, add it to your file. Number of days in February is not as easy as you think. Verify what you are doing.
* In your loop that iterates over the 6 months, add some code to insert the right amount of days in the `.cal-month` div. Use this structure :

```html
<div class="cal-month" data-month="9" data-year="2012">
  <h2 class="cal-month-name">October 2012</h2>
  <div class="day-names"><!-- day names... --></div>
  <div class="days">
    <div class="day" data-day="1">
      <div class="day-number">1</div>
    </div>
    <div class="day" data-day="2">
      <div class="day-number">2</div>
    </div>
    <!-- and so on... -->
  </div>
</div>
```

#### Last details (no jQuery)

* If you have a closer look at your calendar, all the months start on monday. Because we use CSS floats, we only need to shift the first day to the right and all the other days will be in the right place.
* In order to achieve that, we'll use the already existing CSS rules :

```css
/* Thursday */
[data-day-start="2"] .day:first-child {
  margin-left: 14.47%;
}
/* Wednesday */
[data-day-start="3"] .day:first-child {
  margin-left: 28.74%;
}
/* Tuesday */
[data-day-start="4"] .day:first-child {
  margin-left: 43.01%;
}
/* Friday */
[data-day-start="5"] .day:first-child {
  margin-left: 57.28%;
}
/* Saturday */
[data-day-start="6"] .day:first-child {
  margin-left: 71.55%;
}
/* Sunday */
[data-day-start="0"] .day:first-child {
  margin-left: 85.82%;
}
```

* These rules add a margin on the first day of each month. The `data-day-start` value correspond to the result of `getDay()` from `Date` : `0 => "Sunday"`, `1 => "Monday"`...
* Modify your code so each `.cal-month` div has this particular attribute with the correct value. Here's an example :

```html
<div class="cal-month" data-day-start="4" data-month="10" data-year="2012">
  <h2 class="cal-month-name">November 2012</h2>
</div>
```

### Rules

* You **CANNOT** have any global variables.
* You **CANNOT** use `innerHTML` for the no-jQuery parts.
* You **MUST** split your code into functions. Be organized and smart.

### Deliveries

<!-- .deliveries -->
* 2-tickets-please.css
* 2-tickets-please.html
* 2-tickets-please-calendar.js
* diagonal-striped-brick.png
* jquery-1.8.2.min.js

## And now we can begin the show.

### Learning goals

1. Know how retrieve elements from the DOM and modify them (directly and with jQuery).
1. Know how to parse and read complex JSON.

### Context

Now that we have our beautiful empty calendar, it's time to fill it with some events such as concerts, one-man-show, plays...

The result should look like [2-tickets-please-events.html](../labs-files/2-tickets-please/2-tickets-please-events.html).

In real life, these events would be retrieved from a server or something. We haven't covered that in the lessons, we'll see more about that next week.

The [2-tickets-please-events.js](../labs-files/2-tickets-please/2-tickets-please-events.js) script provides a JSON strings that contains venues and events.

### Steps

#### Venue list (jQuery)

* Parse the JSON string `venues` and try to figure out how it is structured. Use `console.log` and/or the JavaScript debugger.
* Add some code in [2-tickets-please-events.js](../labs-files/2-tickets-please/2-tickets-please-events.js) to iterate over the different venues.
* For each venue, add its name to the `.venues` div like this :

```html
<ul class="venues">
  <li class="venue-name zenith">Le Zénith</li>
  <li class="venue-name aeronef">L'Aéronef</li>
  <!-- and so on... -->
</ul>
```

#### Events (jQuery)

* Each venue contains some events. Iterate over all of them and for each one retrieve the `.day` div corresponding to the date of the event.
* Once you retrieved the `.day` element, insert a new element into it like this example :

```html
<div class="day" data-day="23">
  <div class="day-number">23</div>
  <div class="event" data-venue="zenith" title="CARAVAN PALACE">CARAVAN PALACE</div>
</div>
```

* The `.day-number` div was already a child of `.day`, you just have to append your `.event` div after.
* The title attribute allows use to have tooltips when the name is very long.
* The `data-venue` will be useful for adding colors to each venue.

### Rules

* You **CANNOT** have any global variables.
* You **MUST** split your code into functions. Be organized and smart.

### Deliveries

<!-- .deliveries -->
* 2-tickets-please.css
* 2-tickets-please.html
* 2-tickets-please-calendar.js
* 2-tickets-please-events.js
* diagonal-striped-brick.png
* jquery-1.8.2.min.js

## Crazy ideas!

This is a *"be awesome"* exercise!

### Learning goals

1. Learn new stuffs from another website.
1. Try out and experiment stuffs.

### Context

Our "2 Tickets Please!" application works fine, let's try to improve it. In the following steps, you'll find easy stuffs you can add, more complex ones and resources to learn new features...

It's your app, do what you want and be awesome.

### Steps

#### Easy tasks

* Add some inner anchors on months. Click on one month in the list on the right and the page scrolls.
* Add some colors for the different venues. One color for each venue, in the list and on the events. It's just CSS, the HTML already contains what's necessary.
* Change the style of the current day.
* Change the style of days before today.

#### Ideas you can implement

* Try to display how many events for a month and/or for a venue.
* Try to display more informations on the event (time, venue...).
* Try to display some informations on the venue (address, picture, capacity, map...).
* Try to add more style to improve the design.

#### The "checkbox hack"

There's a way to implement selector/filter without JavaScript. Using that, you could :

* Try to implement a month selector using the months on the right.
* Try to implement a venues filter using the venue list on the right.

<!-- .warning -->
This "hack" crosses the line of what you "should" do with CSS and introduces some bad semantics. However, it's fun to play with it and you'll realize how much CSS is powerful. Don't use it on real websites unless you have a very good reason.

<!-- .useful-links -->
* [Stuff you can do with the "Checkbox Hack" (CSS-Tricks)](http://css-tricks.com/the-checkbox-hack/)

#### Go mobile

Try to add some responsivity with media queries. Have some different CSS for phone, tablet... resolutions.

<!-- .useful-links -->
* [Responsive Web Design: What It Is and How To Use It (Smashing Magazine)](http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)
* [How To Use CSS3 Media Queries To Create a Mobile Version of Your Website (Smashing Magazine)](http://mobile.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/)

### Rules

* You **MUST** be totally awesome on this lab ;-)
* You **CANNOT** modify `2-tickets-please.css` and `2-tickets-please.html`. If you wanna modify the CSS, use `2-tickets-please-custom.css`. If you wanna add some HTML, use the DOM.

### Deliveries

<!-- .deliveries -->
* 2-tickets-please.css
* (2-tickets-please-custom.css)
* 2-tickets-please.html
* 2-tickets-please-calendar.js
* 2-tickets-please-events.js
* diagonal-striped-brick.png
* jquery-1.8.2.min.js

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
