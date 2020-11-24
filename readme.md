# DT-Developpement.fr

<div style="text-align: center;">
    <img src="www/public/assets/img/Logo testV2.4.png" width="200" height="200">
</div>

# Résumé :

**Version 1**

*Dt-developpement.fr est un portfolio ou CV en ligne il montrera ma capacité a créer un site web dynamique en langage principal PHP.*

**Version 2**

Puis le site sera destiné à devenir mon site d'auto-entrepreuneur.
Site pro développeur web avec page d'acceuil mettant en avant les différentes prestations possible (page tape à l'oeil).
La page d'acceuil présente un menu avec les différentes page disponible à la lecture.

## Techno utilisées

### Docker

<div style="text-align: center;">
    <img src="https://jolicode.com/media/original/2013/10/homepage-docker-logo.png" width="145" height="120">
</div>

**Les Containers docker :**

Tout les containers docker sont trouvable sur le site [hub.docker.com](https://hub.docker.com/r/chialab/php-dev/)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" width="120"> 

[PHP7.2-Apache](https://hub.docker.com/r/chialab/php-dev/) : Language de programmation du site

<img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" width="120"> 

[Mysql](https://hub.docker.com/_/mysql) : Base de donnée du site

-----

### Composer

<div style="text-align: center;">
    <img src="https://cdn.freebiesupply.com/logos/large/2x/composer-logo-png-transparent.png" width="120">
</div>

Toutes les dépendances sont trouvable sur le site [Packagist.org](https://packagist.org/)

**Pour la prod :**

[Altorouter](https://packagist.org/packages/altorouter/altorouter) : A lightning fast router for PHP

[Twig](https://packagist.org/packages/twig/twig) : Twig, the flexible, fast, and secure template language for PHP

**Pour le dev :**

[Var Dumper](https://packagist.org/packages/symfony/var-dumper) : Symfony mechanism for exploring and dumping PHP variables

[Whoops](https://packagist.org/packages/filp/whoops) : Php error handling for cool kids

----

### Sass

<div style="text-align: center;">
    <img src="https://blog.elao.com/images/posts/thumbnails/sass.png" width="120">
</div>

Pour faire du css plus complexe. L'extension des fichier est **.scss**

La structure des dossier sera la suivante :

- assets (Racine)
    - css (sorti css)
    - sass (entrée sass)
        - libs (dossier pour les modules)

Layout Principal :
 - Header (Contient le menu )
 - Footer

Pour les modules

- Barre de réseaux sociaux
- Nav boutons


----

### Javascript 

<div style="text-align: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120">
</div>

Pour l'animation et la dynamisation

Un fichier principal **App.js** celui-ci contient toutes les fonctionnalités basique de l'application


# Design

Utilisation de [FontAwesome](https://fontawesome.com/) pour les icônes réseaux sociaux :

    <script src="https://kit.fontawesome.com/62f8a9d523.js"></script>

Couleurs :

Bleu / Noir(bleu très foncé) pour le Principal
Jaune pour le détachement

## Maquettes

# Version 1 : Page de construction ( **DONE** )

Nombre de pages : **1**

## Page de construction

*La page présente le logo , les réseaux sociaux et indique avec une petite illustration pour indiqué que le site est en construction*

------

# Version 2 : Site minimal - contact et CV (EN COURS)

Nombre de pages : **3**

## Page d'acceuil

*La page est simple, fond d'écran parralax logo en haut avec menu en bas permettant d'aller au 2 autres pages*


## A propos

*La page s'intitule *"Qui suis-je"* et comprend en tête de page une carte avec ma photo ainsi que mon nom , prénom , mon poste , un texte me décrivant ( mon parcours , mes envies , et mon expérience)*

## Contact

*Tout les moyens de me contacter : Téléphone , Mail , et courrier postal , ainsi que les réseaux sociaux*

### Autres notes pour la version 2

*Dans le footer on y trouve juste la mention Site and design created by Dt-developpement.fr*
*La page d'erreur 404 est personnalisée*

-------

# Version 3 : Site Final de l'entreprise - présentation et prestations

Nombre de pages : **5**

Résumé :

Version Complète avec mise en avant de l'entreprise , mise en retrait des info perso (mais toujours accessible et limité à mon identité et mon histoire donc pas de CV ou d'illustration de niveau de compétances)

## Page d'acceuil

*La page présente un logo en milleu ainsi qu'un menu permettant d'aller au 4 autres pages. Elle met également en avant les préstations proposées*

## A propos

* La page s'intitule *"Qui suis-je"* et comprend en tête de page une carte avec ma photo ainsi que mon nom , prénom , mon poste , un texte me décrivant ( mon parcours , mes envies , et mon expérience)*

## Contact

*Tout les moyens de me contacter : Téléphone , Mail , et courrier postal , une carte openstreet map ainsi que les réseaux sociaux*

Les différents réseaux :

- Linkedin obligatoire
- Facebook page DT-Developpement

## Prestations

*La page des prestations présente toute les prestations possibles. Elle commence par la présentation de création de site vitrine*

## Travaux faits

*La page présente les travaux déjà effectuer (une sorte de portfolio)*

## Mention légales

*La page présente toutes les mentions légales a propos du site et de l'entreprise, elle possède aussi une section FAQ*

---------

-----

# Réseaux Sociaux

Facebook:

La page facebook consacrée à l'entreprise permet de mettre des satus à propos de l'entreprise et de l'actualité de celle-ci

Linkedin:

La page est ma page personnel comprennant mes propres informations , il faudra ouvrir une page similaire à celle de facebook concernant l'entreprise

-----

# TODO

1 - Créer le layout
2 - Refaire un logo beaucoup plus corporate
3 - Revoir la modale surtout pour la version mobile

## Avant mise en Ligne

Faire un git du site en version 1.0
Modifier le .env : ENV_DEV=false
Modifier le fichier .gitignore
Vérifier la présence de tout les alt pour les images
Ne pas avoir plusieurs H1 sur la même page
Rédiger la meta description pour toutes les pages

# Hebergement web

Type d'hebergement sera un VPS avec acces SSH afin de pouvoir installer composer et d'acceder directement au serveur via les lignes de commandes

## Comment fonctionne mon VPS ?

Pour acceder au serveur :

MacOs :

Via le terminal 

    ssh nomdelhote@ip.du.vps
    mot de passe

Distribution : Debian10

Logiciels installer manuellement :

- Composer
- Php / Apache2
- 

# Remerciement et droits

Toutes les images utilisées pour l'illustration du site sont libre de droit

Crédit images :

- pixabay.com

En dehors des images l'intégralité du site à été designer par Dylan Tavarès propriétaire de dt-developpement.fr

Crédit îcones :

- fontawsome.com

Toutes les îcones présentes sur le site proviennent du site fontawsome disponible par la version gratuite

## Informations légales

1. Informations légales :
Statut du propriétaire : particulier
Le Propriétaire est : Dylan Tavarès
Adresse postale du propriétaire : 7 Chemin du Baron 31200 Toulouse

Le Créateur du site est : dt-developpement.fr
Le Responsable de la  publication est : Dylan Tavarès
Contacter le responsable de la publication : contact@dt-developpement.fr
Le responsable de la publication est une personne physique

Le Webmaster est  : DT-développement.fr
Contacter le Webmaster :  contact@dt-developpement.fr
L’hebergeur du site est : OVH - 3 Rue Lapeyrouse, 31000 Toulouse, France
Les mentions légales ont étés rédigées par le webmaster