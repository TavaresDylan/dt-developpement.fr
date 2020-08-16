<?php
// Nom de l'emplacement du fichier courant (src = App)
namespace App\Model\Entity;

// Utilisation du fichier Core\Model\Entity.php par le fichier courant
use Core\Model\Entity;
// Utilisation du fichier use Core\Controller\Helpers\TextController.php par le fichier courant
use Core\Controller\Helpers\TextController;

// Class étendue du fichier \Core\Controller\Controller.php
class ContactEntity extends Entity
{
    private $title;

    /**
     * Get the value of title
     */
    public function getTitle()
    {
        return $this->title;
    }

}
