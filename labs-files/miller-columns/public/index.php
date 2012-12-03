<?php

// Auto load stuffs
set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . '/../model' . PATH_SEPARATOR . dirname(__FILE__) . '/../controllers');
function __autoload($className)
{
  require_once $className . '.class.php';
}

// Root path from configuration
// TODO set $rootPath to correct value using Config class

// Get path from the GET query parameters
if (isset($_GET['path'])) {
  $basePath = $_GET['path'];
} else {
  $basePath = $rootPath;
}

// Create a MillerDirectory for the base path
//$base = new MillerDirectory($basePath);
//$directories = array($base);

// Add up to 4 directories from base path to root path
//while($base->getPath() !== $rootPath && count($directories) < 4) {
//  $base = new MillerDirectory($base->getParentPath());
//  array_unshift($directories, $base);
//}

include_once '../view/layout.php';
