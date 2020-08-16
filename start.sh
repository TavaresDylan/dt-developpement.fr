#!/bin/bash
# FICHIER DE LIGNES DE COMMANDES POUR DEMARRER DOCKER

# Condition pour savoir si le fichier .env contenant les variables d'environement existe
if [ -e .env ]; then
    source .env
else
    echo "Please set up your .env file before starting your environment."
    exit 1
fi

# Construcion de l'image docker
docker-compose build
# Utilisation du fichier docker-compose.yml
docker-compose -f docker-compose.yml up -d

# Attente 4 secondes
sleep 4;

# Mise à jour de composer du container
docker exec $CONTAINER_NAME composer update

# Attente 4 secondes
sleep 4;

# Condition pour savoir si on est en environemment de développement 
if [ $ENV_DEV == true ]; then
# Si on est en environnement de développement alors on éxécute la commande suivante avec le flag --demo
    #docker exec $CONTAINER_NAME commands/createsql --demo
    #docker exec $CONTAINER_NAME php commands/createsql --demo
    docker exec $CONTAINER_NAME; php commands/createsql --demo
else
    docker exec $CONTAINER_NAME php commands/createsql
fi

echo
echo "#--------------------------------------------------"
echo "#"
echo "# Please check your browser to see if it is running"
echo "#"
echo "#--------------------------------------------------"
echo

exit 0
