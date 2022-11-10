<?php
namespace App;

use Core\Controller\RouterController;

class App
{

    private static $INSTANCE;
    public $title;
    private $router;
    private $startTime;

    public static function getInstance()
    {
        if (is_null(self::$INSTANCE)) {
            self::$INSTANCE = new App();
        }
        return self::$INSTANCE;
    }

    public static function load()
    {
        if (session_status() != PHP_SESSION_ACTIVE){
            session_start();
        }
    }

    public function getRouter($basePath): RouterController
    {
        if (is_null($this->router)) {
            $this->router = new RouterController($basePath . 'views');
        }
        return $this->router;
    }

    public function setStartTime()
    {
        $this->startTime = microtime(true);
    }

    public function getDebugTime()
    {
        return number_format((microtime(true) - $this->startTime) *  1000, 2);
    }
}
