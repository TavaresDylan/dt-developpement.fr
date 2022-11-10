<?php
// Nom de l'emplacement du fichier courant (src = App)
namespace App\Controller;

// Utilisation du fichier \Core\Controller\Controller.php par le fichier courant
use \Core\Controller\Controller;

// Class étendue du fichier \Core\Controller\Controller.php
class ConstructionController extends Controller
{
    public function all()
    {
        return $this->render(
            'pages/construction'
        );
    }
}
