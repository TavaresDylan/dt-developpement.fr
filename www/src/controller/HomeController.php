<?php
// Nom de l'emplacement du fichier courant (src = App)
namespace App\Controller;

// Utilisation du fichier \Core\Controller\Controller.php par le fichier courant
use Core\Controller\Controller;

// Class étendue du fichier \Core\Controller\Controller.php
class HomeController extends Controller
{
    // Fonction de construction chargeant le model
    public function __construct()
    {
        $this->loadModel('home');
    }

    public function all()
    {
        $auth = $_SESSION['auth'];
        $tabTitle = 'Accueil |';
        
        return $this->render(
            'pages/home',
            [
                "auth" => $auth,
                "tabTitle" => $tabTitle,
            ]
        );
    }
}
