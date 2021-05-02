<?php
// Nom de l'emplacement du fichier courant (src = App)
namespace App\Controller;

// Utilisation du fichier \Core\Controller\Controller.php par le fichier courant
use \Core\Controller\Controller;

// Class étendue du fichier \Core\Controller\Controller.php
class NotfoundController extends Controller
{
    // Fonction de construction chargeant le model
    public function __construct()
    {
        $this->loadModel('notfound');
    }

    public function all()
    {
        $auth = $_SESSION['auth'];
        $tabTitle = '404 |';
        return $this->render(
            'pages/notfound',
            [
                "auth" => $auth,
                "tabTitle" => $tabTitle,
            ]
        );
    }
}
