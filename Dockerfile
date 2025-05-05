# Étape 1 : Utiliser une image de base simple
FROM nginx:alpine

# Étape 2 : Supprimer les fichiers par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Étape 3 : Copier ton contenu dans le dossier public de nginx
COPY . /usr/share/nginx/html

# Étape 4 : Exposer le port
EXPOSE 80

