<?php
namespace Core\Controller;

use App\Controller\ConstructionController;

class RouterController
{

    private $router;

    private $viewPath;

    public function __construct(string $viewPath)
    {
        $this->viewPath = $viewPath;
        $this->router = new \AltoRouter();
    }

    public function get(string $uri, string $file, string $name): self
    {
        $this->router->map('GET', $uri, $file, $name);
        return $this;
    }

    public function post(string $uri, string $file, string $name): self
    {
        $this->router->map('POST', $uri, $file, $name);
        return $this;
    }

    public function match(string $uri, string $file, string $name): self
    {
        $this->router->map('GET|POST', $uri, $file, $name);
        return $this;
    }

    public function url(string $name, array $params = []): string
    {
        return $this->router->generate($name, $params);
    }

    public function run($maintenance): void
    {
        $match = $this->router->match();
        if ($maintenance == true) {
            $this->get('/Site-en-construction', 'construction#all', "UnderConstruction");
            $match = $this->router->match();
            echo (new ConstructionController())->all();
            exit();
        }
        if (is_array($match)) {
            if (strpos($match['target'], "#")) {
                [$controller, $methode] = explode("#", $match['target']);
                $controller = "App\\Controller\\" . ucfirst($controller) . "Controller";
                try{
                echo (new $controller())->$methode(...array_values($match['params']));
                }catch(\Exception $e){
                    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
                    header("Location: /Page-non-trouvee");
                    exit();
                }
            }
        } else {
            // no route was matched
            header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
            header("Location: /Page-non-trouvee");
            exit();
        }
    }
}