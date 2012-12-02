<!-- title : PHP : classes and objects. -->
<!-- author : Hubert SABLONNIÈRE -->
<!-- description : Object oriented PHP. -->
<!-- keywords : php, classes, objects, inheritance -->

<link href="../css/bootstrap.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" data-dztheme="article">
<link href="../css/hljs-github.css" rel="stylesheet">
<link href="../css/theme-2012.css" rel="stylesheet">
<link href="../css/theme-2012-common.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-article.css" rel="stylesheet" data-dztheme="article">
<link href="../css/theme-2012-presentation.css" rel="alternate stylesheet" data-dztheme="presentation">
<link href="../css/php-classes-and-objects.css" rel="alternate stylesheet" data-dztheme="presentation">

<!-- slide : cover -->

# PHP : classes and objects.

<!-- toc -->

<!-- slide : introduction -->

#### That language belongs in a museum.

<!-- .list.incremental -->
When it comes to PHP, you master the **basic** **stuffs** of the language. It's good PHP4, **you know some stuffs** but what about the **true powers** of the language. In this course, we'll introduce concepts that will save the day in **real situations**. You'll be able to use PHP5 features to build **great websites**. You'll forget about your **previous attemps** and become a real **PHP programmer**.

<!-- slide : cover -->

## Classes

<!-- slide -->

### Declaration

Like in other classical inheritance object oriented languages, class are declared with the `class` keyword.

You just have to declare your properties and methods in it. Here's an example :

```php
class Archaeologist {
  // Property declaration
  public $name = 'a default name';

  // Method declaration
  public function translate($msg, $srcLanguage, $destLanguage) {
    // Some code...
    return $translatedMessage;
  }
}
```

<!-- .useful-links -->
* [Classes, the basics (php.net)](http://www.php.net/manual/en/language.oop5.basic.php)
  
<!-- slide -->

### Encapsulation & visibility

Unlink JavaScript, PHP provides true encapsulation and visibility keywords. You can set properties and methods to either `public`, `protected` or `private`.

```php
class Archaeologist {
  // Accessible everywhere
  public $name = 'a default name';

  // Accessible from within children instances
  protected $jobSecrets;

  // Accessible only from current instance
  private $personalSecrets;

  // Encapsulated getter
  public function getPersonalSecrets() {
    return $this->personalSecrets;        // $this => current object
  }

  // Public method getter
  public function translate($text, $fromLang, $toLang) {
    // Some actual translation code
    return $text;
  }
}
```

<!-- .useful-links -->
* [Visibility (php.net)](http://www.php.net/manual/en/language.oop5.visibility.php)
  
<!-- slide -->

### Basic usages

Instantiating an object from a class is fairly simple and very similar to other languages like Java.

<!-- .incremental -->
```php
$indianaJones = new Archaeologist();
```

You can access public properties and methods using an thin arrow `->`.

<!-- .incremental -->
```php
// OK   :-)
echo $indianaJones->name;
echo $indianaJones->translate('שלום עולם!', 'hebrew', 'english');
```

Of course, you cannot access protected or private properties and methods.

<!-- .incremental -->
```php
// Cannot access protected property Archaeologist::$jobSecrets
echo $indianaJones->jobSecrets;
// Cannot access private property Archaeologist::$personalSecrets
echo $indianaJones->personalSecrets;
```

<!-- slide -->

### Default parameters and overloading

In PHP, you cannot define two or more methods with the same name and different arguments. One thing you can do is to define default parameters.

<!-- .incremental -->
```php
class Archaeologist {
  public function dig($tool1, $tool2 = 'spade') {
    echo('Digging using a ' . $tool1 . ' and a ' . $tool2 . "\n");
  }
}
```

<!-- .incremental -->
```php
$indianaJones = new Archaeologist();
$indianaJones->dig('shovel');          // => Digging using a shovel and a spade
$indianaJones->dig('shovel', 'pick');  // => Digging using a shovel and a pick
```

<!-- slide -->

### Meta programming

If you have the name of a class or a method as a string you can use it to create objects or call methods. It kinda meta programming...

Here's an example for creating objects :

<!-- .incremental -->
```php
$className = 'Archaeologist';
$benjaminGates = new $className();
```

Here's an example for accessing a property :

<!-- .incremental -->
```php
$propertyName = 'name';
echo $benjaminGates->$propertyName;
```

Here's an example for calling a function :

<!-- .incremental -->
```php
$methodName = 'translate';
$benjaminGates->$methodName('שלום עולם!', 'hebrew', 'english');
```

<!-- slide -->

### Constructors

If you want to do initializations when creating objects, you can using a constructor. You just have to define a special function called `__construct`.

<!-- .incremental -->
```php
class Archaeologist {
  public $name;

  public function __construct($name) {
    $this->name = $name;
  }
}
```

The function is called when you use the `new` operator.

<!-- .incremental -->
```php
$rickOConnell = new Archaeologist("Rick O'Donnel");
```

<!-- .useful-links -->
* [Constructors and Destructors (php.net)](http://www.php.net/manual/en/language.oop5.decon.php)
  
<!-- slide -->

### Destructors

Destructors aren't use often but they exist. You just have to define a special function called `__destruct`. It's called at the end of the script.

<!-- .incremental -->
```php
class Archaeologist {
  public $name;

  public function __construct($name) {
    $this->name = $name;
  }

  public function __destruct() {
    echo 'My name is ' . $this->name . ' and I was an archaeologist...';
  }
}
```

<!-- .incremental -->
```php
$laraCroft = new Archaeologist("Lara Croft");
// __destruct() is called at the end of the script
```

<!-- .useful-links -->
* [Constructors and Destructors (php.net)](http://www.php.net/manual/en/language.oop5.decon.php)
  
<!-- slide : cover -->

## Inheritance

<!-- slide -->

### Simple

In PHP, inheritance of classes is done using the `extends` keyword. For example, if we have an `Archaeologist` like this :

<!-- .incremental -->
```php
class Archaeologist {
  public $name;

  public function __construct($name) {
    $this->name = $name;
  }
}
```

We can create a subclass `IndianaJones` like this :

<!-- .incremental -->
```php
class IndianaJones extends Archaeologist {
  public $bullwhip = TRUE;
  public $fedora = TRUE;
  public $leatherJacket = TRUE;
}
```

Objects created using the subclass will inherit public and protected code...

<!-- .incremental -->
```php
$harissonFord = new IndianaJones('ford');
$seanPatrickFlanery = new IndianaJones('flanery');
echo $harissonFord->bullwhip;
echo $seanPatrickFlanery->name;  // inherited from Archaeologist
```

<!-- .useful-links -->
* [Object Inheritance (php.net)](http://www.php.net/manual/en/language.oop5.inheritance.php)
  
<!-- slide -->

### Abstract 1/2

Sometimes you need a class hierarchy but some root classes shouldn't be instantiated. In thoses cases, it's better to use an `abstract class`.

<!-- .incremental -->
```php
// This class can't be instanciated
abstract class Archaeologist {
  public function travelTo($destination) {
    // Some code...
  }
}
```

<!-- .incremental -->
```php
$harissonFord = new Archaeologist(); // => PHP Fatal error...
```

<!-- .incremental -->
```php
// This class can be instanciated
class IndianaJones extends Archaeologist {
}
```

<!-- .incremental -->
```php
$harissonFord = new IndianaJones();
$harissonFord->travelTo('India');
```

<!-- .useful-links -->
* [Class Abstraction (php.net)](http://www.php.net/manual/en/language.oop5.abstract.php)
  
<!-- slide -->

### Abstract 2/2

You can also force people to implement method by adding the `abstract` keyword.

<!-- .incremental -->
```php
// This class can't be instanciated
abstract class Archaeologist {
  public function travelTo($destination) { /* Some code... */ }
  public abstract function translate($msg, $srcLanguage, $destLanguage);
}
```

<!-- .incremental -->
```php
// This class can be instanciated
// This class must implement each abstract method of its parent
class IndianaJones extends Archaeologist {
  public function translate($msg, $srcLanguage, $destLanguage) {
    // Some code...
    return $translatedMessage;
  }
}
```

In this example, if you forget to implement the `translate` function, you'll get a messag like this : `PHP Fatal error:  Class IndianaJones contains 1 abstract method and must therefore be declared abstract or implement the remaining methods...
`

<!-- .incremental -->
```php
$harissonFord = new IndianaJones();
$harissonFord->travelTo('India'); // inherited from class Archaeologist
$harissonFord->translate('שלום עולם!', 'hebrew', 'english');
```

<!-- .useful-links -->
* [Class Abstraction (php.net)](http://www.php.net/manual/en/language.oop5.abstract.php)
  
<!-- slide -->

### Interfaces

If you need an abstract class without any code and only abstract methods, just use an `interface` like this :

<!-- .incremental -->
```php
// Interfaces can't be instanciated
interface Archaeologist {
  public function translate($msg, $srcLanguage, $destLanguage);
}
```

<!-- .incremental -->
```php
// This class can be instanciated
// This class must implement each method of its interface(s)
class IndianaJones implements Archaeologist {
  public function translate($msg, $srcLanguage, $destLanguage) {
    // Some code...
    return $translatedMessage;
  }
}
```

<!-- .incremental -->
```php
$harissonFord = new IndianaJones();
$harissonFord->translate('שלום עולם!', 'hebrew', 'english');
```

<!-- .useful-links -->
* [Object Interfaces (php.net)](http://www.php.net/manual/en/language.oop5.interfaces.php)
  
<!-- slide : cover -->

## Paamayim Nekudotayim

The paamayim nekudotayim is a scope resolution operator. It's represented as `::`. It's used in several cases in PHP. Let's review them.

<!-- .useful-links -->
* [Paamayim Nekudotayim, scope resolution operator (::) (php.net)](http://www.php.net/manual/en/language.oop5.paamayim-nekudotayim.php)
  
<!-- slide -->

### `const`

The `::` operator can be used to access constants.

<!-- .incremental -->
```php
class Archaeologist {
  const YEAR_OF_STUDY = 5;
}
```

<!-- .incremental -->
```php
echo Archaeologist::YEAR_OF_STUDY;
```

<!-- slide -->

### `static`

The `::` operator can be used to access static methods.

<!-- .incremental -->
```php
class Archaeologist {
  public static function sayHello() {
    return 'Hello!';
  }
}
```

<!-- .incremental -->
```php
echo Archaeologist::sayHello();
```

<!-- slide -->

### `self`

The `::` operator can be used to access static methods from within an instance method.

<!-- .incremental -->
```php
class Archaeologist {
  const YEAR_OF_STUDY = 5;

  public static function greetings() {
    return 'Hello!';
  }

  public function introduceHimself() {
    $hello = self::greetings() . ", I've been studying archaeology for ";
    $hello .= self::YEAR_OF_STUDY . ' years.';
    return $hello;
  }
}
```

<!-- .incremental -->
```php
$indianaJones = new Archaeologist();
$indianaJones->introduceHimself();
```

<!-- slide -->

The `::` operator can be used to access the parent class and its methods or properties.

### `parent`

<!-- .incremental -->
```php
class Archaeologist {
  public function translate($msg, $srcLanguage, $destLanguage) {
    // Some code...
    echo "I'm the original translate method";
    return $translatedMessage;
  }
}
```

<!-- .incremental -->
```php
class IndianaJones extends Archaeologist {
  public function translate($msg, $srcLanguage, $destLanguage) {
    echo "I'm Indiana Jones translate method";
    return parent::translate($msg, $srcLanguage, $destLanguage);
  }
}
```

<!-- .incremental -->
```php
$indianaJones = new IndianaJones();
$indianaJones->translate('שלום עולם!', 'hebrew', 'english');
```

<!-- slide : cover -->

## It's a kind of magic

Magic properties and methods allow PHP developers to hide behaviour and implementation and create very smart code reuse.
  
<!-- slide -->

### Magic properties

Like in JavaScript, you can hide code behind property assignement (setter) and retrieve (getter).

<!-- .incremental -->
```php
class Archaeologist {
  private $data = array();

  public function __set($name, $value) {
    echo 'Setting ' . $name . ' to ' . $value;
    $this->data[$name] = $value;
  }

  public function __get($name) {
    echo 'Getting ' . $name;
    if (array_key_exists($name, $this->data)) {
      return $this->data[$name];
    } else { /* Some code to trigger_error... */ }
  }
}
```

<!-- .incremental -->
```php
$benjaminGates = new Archaeologist();
$benjaminGates->father = 'Patrick Henry Gates';  // Enters __set method
$benjaminGatesFather = $benjaminGates->father;   // Enters __get method
```

<!-- .useful-links -->
* [Property overloading (php.net)](http://www.php.net/manual/en/language.oop5.overloading.php#language.oop5.overloading.members)
  
<!-- slide -->

### Magic methods

If a method doesn't exist you can intercept call and do some code accordingly.

<!-- .incremental -->
```php
class Archaeologist {
  public function __call($name, $arguments) {
    echo $name . ' called with ' . count($arguments) . ' args';
  }

  /**  As of PHP 5.3.0  */
  public static function __callStatic($name, $arguments) {
    echo $name . ' static called with ' . count($arguments) . ' args';
  }
}
```

<!-- .incremental -->
```php
$laraCroft = new Archaeologist();
$laraCroft->travelTo('Africa');        // Enters __call method
Archaeologist::findOneByName('Lara');  // Enters __callStatic method
```

<!-- .useful-links -->
* [Method overloading (php.net)](http://www.php.net/manual/en/language.oop5.overloading.php#language.oop5.overloading.methods)
  
<!-- slide -->

### Other ones...

You have some other magic methods, `__construct()` and `__destruct()` are part of them...

* `__construct()`
* `__destruct()`
* `__sleep()`
* `__wakeup()`
* `__toString()`
* `__invoke()`
* `__set_state()`
* `__clone()`

<!-- .useful-links -->
* [Magic Methods (php.net)](http://www.php.net/manual/en/language.oop5.magic.php)
    
<!-- slide -->

## Exceptions

Like we saw in JavaScript, code can throw and catch exceptions.

<!-- .incremental -->
```php
function divide($a, $b) {
  if ($b === 0) {
    throw new Exception('Are you mad?');
  }
  return $a / $b;
}
```

<!-- .incremental -->
```php
try {
  echo divide(12, 4);
  echo divide(12, 0);
} catch (Exception $e) {
  echo 'Caught exception: ' . $e->getMessage();
}
```

<!-- .useful-links -->
* [Exceptions (php.net)](http://www.php.net/manual/en/language.exceptions.php)
  
<!-- slide -->

## There's more...

The language is far stronger that what we saw today. Just experiment and try stuffs, you'll discover a lot...

* [Autoloading](http://www.php.net/manual/en/language.oop5.autoload.php)
* [Traits](http://www.php.net/manual/en/language.oop5.traits.php)
* [Final Keyword](http://www.php.net/manual/en/language.oop5.final.php)
* [Object Iteration](http://www.php.net/manual/en/language.oop5.iterations.php)
* [Object Cloning](http://www.php.net/manual/en/language.oop5.cloning.php)
* [Objects and references](http://www.php.net/manual/en/language.oop5.references.php)

<div id="progress-bar"></div>

<script src="../js/dzslides.core.js"></script>
<script src="../js/jquery-1.8.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
