<!-- title : Testing, testing... -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Details about how to test a JavaScript application/website. -->
<!-- keywords : unit-tests, functional tests... -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">

<!-- slide : cover -->

# Testing, testing...

<!-- toc -->

<!-- slide -->

#### What do you mean by "testing"

You're probably already testing your application to verify if everything works as you intend to. This process takes time, it's cumbersome. In this course we'll try to improve our testing process using automated test and some new approach called TDD.

## Unit testing

A unit tests aims at testing only a small unit of code. You define a given situation and then you pass some arguments to a function and a expect a specific result. Here's an example :

```javascript
var input = 64,
    expectedOutput = 8;

console.log('Root square of 64 should be 8');

if (Math.sqrt(input) === expectedOutput) {
  console.log('SUCCESS');
} else {
  console.log('FAIL');
}
```

### Frameworks

To improve this code we could use a testing framework. There are many advantages to do so. You can write faster testing code in a more readable way. Theses frameworks provide a lot of ways to assert code expectations and often helps with non trivial situations like asynchronous stuffs...

#### JasmineJS

Here's an example using JasmineJS :

```javascript
describe('Square roots', function() {
  var input = 64,
      expectedOutput = 8;

  it('of 64 should be 8', function() {
    expect(Math.sqrt(input)).toBe(expectedOutput);
  });
});
```

<!-- .useful-links -->
* [JasmineJS homepage](http://pivotal.github.com/jasmine/)
* [JasmineJS wiki](https://github.com/pivotal/jasmine/wiki)

#### qUnit

Here's an example using qUnit :

```javascript
test('Square roots', function() {
  var input = 64,
      expectedOutput = 8;

  deepEqual(Math.sqrt(input), expectedOutput, 'of 64 should be 8');
});
```

<!-- .useful-links -->
* [qUnit homepage](http://qunitjs.com/)
* [qUnit cookbook](http://qunitjs.com/cookbook/)
* [How to Test your JavaScript Code with QUnit (net.tutsplus.com)](http://net.tutsplus.com/tutorials/javascript-ajax/how-to-test-your-javascript-code-with-qunit/)

#### Mocha

Here's an example using JasmineJS :

```javascript
describe('Square roots', function() {
  var input = 64,
      expectedOutput = 8;

  it('of 64 should be 8', function() {
    assert.equal(Math.sqrt(input), expectedOutput);
  });
});
```

<!-- .useful-links -->
* [Mocha homepage](http://visionmedia.github.com/mocha/)

## Callbacks and async

Unit testing asynchronous code can be troublesome. JasmineJS can help a lot on this kind of matter.

Let's use a function that uses a callback example :

```javascript
// Executes a function on each element of the array
var arrayEach = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array, array[i], i, array);
  }
};
```

Now I can verify that `arrayEach` does what it's supposed to do : call a function over the elements of an array.

```javascript
describe('arrayEach', function() {
  var fakeCallback = jasmine.createSpy('fakeCallback'),
      someArray = ['a', 'b', 'c', 'd'];

  arrayEach(someArray, fakeCallback);

  it('should iterate over all the elements of an array', function() {
    expect(fakeCallback).toHaveBeenCalled();
    expect(fakeCallback.mostRecentCall.args[0]).toEqual('d');
    expect(fakeCallback.mostRecentCall.args[1]).toEqual(3);
    expect(fakeCallback.mostRecentCall.args[2]).toEqual(someArray);
  });
});
```

## TDD
  
TDD means Test Driven Developement. The process is fairly simple. Don't forget that your code should only pass the test and not the specifications. If your code passes the tests and doesn't follow the specifications, it means your test is wrong.
  
![TDD](../img/tdd.png)

## Test runner

When you use JasmineJS, qUnit or any other testing framework, it would be great if tests could be run automatically without going to a web browser and manually refresh asserting that everything works.

Here's some test runner that does exactly that...

### Testacular

This tool can run automatically your JasmineJS and Mocha tests on browsers like PhantomJS for quick response or other real browsers for real behaviour. It verifies when you save new versions of your source code and relaunch all the tests.

Here's how you can install testacular :

```bash
npm -g install phantomjs testacular
```

Once you're done installing, you can start the good stuffs :

```bash
# create config file (testacular.conf.js by default)
testacular init

# start server
testacular start

# open browsers you want to test (if testacular is not configured to do it for you)
open http://localhost:8080

# if you want to run tests manually (without auto watching file changes), you can:
testacular run
```

You'll probably have to modify the config file to specify where your tests are.

<!-- .useful-links -->
* [Testacular homepage](http://vojtajina.github.com/testacular/)

### JS test driver

JS test driver is older than testacular. It was the inspiration that led to testacular. It works on the same concepts but has different details.

You can find more on how to install and use if on the homepage.

<!-- .useful-links -->
* [JS test driver homepage](http://code.google.com/p/js-test-driver/)

<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
