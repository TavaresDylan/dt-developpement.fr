<?php
namespace App;

use Core\Controller\RouterController;
use Core\Controller\Database\DatabaseMysqlController;
use Core\Controller\Database\DatabaseController;

class App
{

    private static $INSTANCE;
    public $title;
    private $router;
    private $startTime;
    private $db_instance;

    //fonction qui permet d'instancier l'application
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

    public function getTable(string $nameTable)
    {
        $nameTable = "\\App\\Model\\Table\\" . ucfirst($nameTable) . "Table";
        return new $nameTable($this->getDb());
    }

    public function getDb(): DatabaseController
    {
        if (is_null($this->db_instance)) {
            $this->db_instance = new DatabaseMysqlController(
                getenv('MYSQL_DATABASE'),
                getenv('MYSQL_USER'),
                getenv('MYSQL_PASSWORD'),
                getenv('CONTAINER_MYSQL')
            );
        }
        return $this->db_instance;
    }
}
