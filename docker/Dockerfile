# La commande FROM permet de charger une image de base téléchargeable dans le Hub Docker ou dans un répertoire privé.
# Attention : Un fichier Dockerfile doit contenir 1 seule instruction FROM
FROM chialab/php-dev:7.2-apache

# Métadata (informations sur l'image et le créateur de l'image)
LABEL maintainer="tavares.dylan03@gmail.com"
LABEL langage = "fr"
LABEL version = "1.0"
LABEL description = ""

# On expose le port 80
EXPOSE 80

# Chemin du fichier des variables d'environnement
ENV APACHE_DOCUMENT_ROOT /var/www/public

# Lignes de commandes d'execution
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf

RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN apt-get update && apt-get install -y locales

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Modification du fihier /etc/locale.gen dans le container pour définir l'encodage en UTF-8
RUN echo fr_FR.UTF-8 UTF-8 > /etc/locale.gen && locale-gen

# L'instruction WORKDIR permet de se déplacer dans l'arboresence de l'image.
# Exemple, nous nous plaçons dans le répertoire de /var/www avant de poursuivre les commandes du Dockerfile
# Attention, WORKDIR doit toujours contenir un chemin absolu.
WORKDIR /var/www