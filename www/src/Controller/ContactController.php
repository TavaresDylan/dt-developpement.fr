<?php
// Nom de l'emplacement du fichier courant (src = App)
namespace App\Controller;

// Utilisation du fichier \Core\Controller\Controller.php par le fichier courant
use Core\Controller\Controller;

// Class étendue du fichier \Core\Controller\Controller.php
class ContactController extends Controller
{
    // Fonction de construction chargeant le model
    public function __construct()
    {
        //$this->loadModel('contact');
    }

    public function all()
    {
        //dump("passe dans le controller");
        $auth = $_SESSION['auth'];
        $tabTitle = 'Contact |';
        
        return $this->render(
            'Pages/contact',
            [
                "auth" => $auth,
                "tabTitle" => $tabTitle,
            ]
        );
    }
}
