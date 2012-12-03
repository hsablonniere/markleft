<?php

class Config
{
  private static $_instance = null;
  private $configs;

  private function __construct()
  {
    $json = file_get_contents('../config.json');
    $this->configs = json_decode($json, true);
  }

  /**
   * Return the only instance of Config class
   * @return Config
   */
  public static function getInstance()
  {
    if (is_null(self::$_instance)) {
      self::$_instance = new Config();
    }

    return self::$_instance;
  }

  /**
   * Get a config value using its key
   * @param $key
   * @return String
   */
  public function get($key)
  {
    return $this->configs[$key];
  }
}
