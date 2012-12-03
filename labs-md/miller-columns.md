<!-- title : Lab : Miller columns -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Experimenting with PHP objects and classes -->
<!-- keywords : php, classes, objects, inheritance -->

<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet">
<link href="../css/theme-2012-lab.css" rel="stylesheet">
<link href="../css/hljs-github.css" rel="stylesheet">

# Miller columns

<!-- toc -->

![lab-logo](../img/parthenon.jpg)

Welcome to your new lab, here's the instructions for each exercise :

* Read the lesson entirely!!!!
* Identify your learning goals.
* Understand the context.
* Follow the steps and rules carefully.
* Commit **ONLY** the files that are indicated.

You must try to find documentation and solution by yourself. The course contains links to references and a lot of other interesting websites. Don't forget : the web is your friend ;-)

Bon courage...

#### What are miller columns?

Like always, wikipedia has [the answer](http://en.wikipedia.org/wiki/Miller_columns) ;-)

In this lab we'll create a file browser displaying infos as miller columns.

You can have a look at the existing files before starting...

## First class!

### Learning goals

1. Know how to call static method and understand the principle of a Singleton.
1. Know how to create simple abstract classes.
1. Know how to manipulate paths strings and be OS agnostic.

### Context

Because our file browser file have to manipulate files and directories, we'll create an abstract class that can represent both. We'll call it a `MillerPath`.

### Steps

* Before we start, let's get the root path from configuration file. Use the `Config` class correctly and set the value of `$rootPath` in [public/index.php](../labs-files/miller-columns/public/index.php) at line 11. Change the value in [config.json](../labs-files/miller-columns/config.json) if you need to.
* Create an abstract class named `MillerPath` in [model/MillerPath.class.php](../labs-files/miller-columns/model/MillerPath.class.php).
* Add a private property named `path`, it will represent the absolute path of the directory or the file.
* Add a private property named `name`, it will represent name (last part of the path) of the directory or the file.
* Add a constructor that takes an absolute path as only argument and sets the `path` and `name` properties correctly. You'll have to retrieve the last part of the path to get the name.
* Add the appropriate getters for your properties : `getPath` and `getName`. If you use a decent IDE, it should be able to generate them ;-)
* Override the `__toString` method and return the name.
* Uncomment the parts of the code that needs to.

### Files to edit

<!-- .deliveries -->
* model/MillerPath.class.php
* view/layout.php
* view/directory.php

## Files...

### Learning goals

1. Know how to inherit from an abstract class.
1. Know how to get mime type from for a given file.

### Context

Now that we have a `MillerPath`, we can create a `MillerFile` that inherits from it.

### Steps

* Create a class named `MillerFile` in [model/MillerFile.class.php](../labs-files/miller-columns/model/MillerFile.class.php) that inherits from the `MillerPath` class.
* Add a private property named `mimeType`, it will contain the mime type of the file.
* Override the constructor so you can initialize the mime type. Don't forget to call the parent's constructor at the beginning.
* Add the appropriate getter for your property : `getMimeType`.
* Uncomment the parts of the code that needs to.

### Files to edit

<!-- .deliveries -->
* model/MillerFile.class.php
* view/layout.php
* view/directory.php

## ...Directories

### Learning goals

1. Know how to inherit from an abstract class.
1. Know how to sort an array using a custom compare function.

### Context

Now that we have a `MillerPath`, we can create a `MillerDirectory` that inherits from it.

### Steps

* Create a class named `MillerDirectory` in [model/MillerDirectory.class.php](../labs-files/miller-columns/model/MillerDirectory.class.php) that inherits from the `MillerPath` class.
* Add a private property named `directories`, it will contain an array of `MillerDirectory`.
* Add a private property named `files`, it will contain an array of `MillerFile`.
* Add a private method name `readDir` that initializes the `directories` and `files`. Just iterate over the contents of the current directory. Detect if it's a directory or an item, create a new `MillerDirectory` or a new `MillerFile` and add it to the correct private array `directories` or `files`.
* Before ending this function sort the `directories` or `files`. Sort them by name. Your sort must be case insensitive and should not be troubled by hidden dirs and files. This means that `.gnome` should be treated as `gnome`.
* Add the appropriate getters for your properties : `getDirectories` and `getFiles`. If the private properties aren't already set up, just call the `readDir` function in this getters.
* Uncomment the parts of the code that needs to.

### Files to edit

<!-- .deliveries -->
* model/MillerDirectory.class.php
* view/layout.php
* view/directory.php

## Finder is for loosers ;-)

This is a *"be awesome"* exercise!

### Learning goals

1. Use your imagination and all you knowledge to implement useful feature correctly.

### Context

We now have a basic file tree browser displayed as Miller columns. Here's some ideas to improve it.

### Ideas

* Change the style, add some textures, icons, 3D effects, transitions...
* Add a link to go to parent path.
* Don't reload the hole page for the navigation. Use AJAX. Using HTML5 History API with it would be awesome.
* Use the mimetype info, display it as text or as an icon...
* Highlight the current directory of a column.
* Preview files that can be previewed in the browser : text, images, audio, videos, pdf (using pdf.js)...
* Provide a mechanism to show/hide hidden files.
* Anything you want...

### Deliveries

<!-- .deliveries -->
* public/index.php
* public/index.css
* public/index.js
* model/MillerConfig.class.php
* model/MillerPath.class.php
* model/MillerFile.class.php
* model/MillerDirectory.class.php
* view/layout.php
* view/directory.php

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
