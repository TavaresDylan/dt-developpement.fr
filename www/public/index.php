<?php
session_start();

//Définition d'une variable qui contiens le chemin de base : /var/www/
$basePath = dirname(__dir__) . DIRECTORY_SEPARATOR;

// Réquisition du fichier chargeant les dépendances (ex: altorouter , swiftmailer ...ect)
require $basePath. "vendor/autoload.php";

// Démarre une instance en appelant la méthode du fichier (App)src/app.php
$app = App\App::getInstance();
$app->setStartTime();
$app::load();

// Déclaration des routes
$app->getRouter($basePath)

// Routes GET
    ->get('/', 'home#all', 'Home')
    ->get('/contact', 'contact#all', 'Contact')
    ->get('/apropos', 'apropos#all', 'A Propos')
    ->get('/aproposbis', 'aproposbis#all', 'A Propos bis')
    ->get('/Page-non-trouvee', 'notfound#all', '404 not found')
    ->run();
?>