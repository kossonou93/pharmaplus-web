# Utilise l'image officielle de Node.js comme base
FROM node:latest

# Définit le répertoire de travail à /app
WORKDIR /app

# Copie les fichiers de package.json et package-lock.json vers le conteneur
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie le reste des fichiers vers le conteneur
COPY . .

# Compile l'application Angular en mode production
RUN npm run build --prod
