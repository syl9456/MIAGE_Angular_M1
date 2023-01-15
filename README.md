# Projet Angular M1 MIAGE
# Sylvain Rome et Loic Hamann

## Comment lancer l'application

- Prérequis

Installer le projet `git clone https://github.com/syl9456/MIAGE_Angular_M1.git`

Installer node-js -> https://nodejs.org/en/

Télécharger npm puis lancer la commande `npm install` dans les 3 dossiers (cad api_auth, api_assignment, et assignment-app)

Quand c'est fait, les dossiers node_modules doivent etre créés dans ces trois dossiers. 

- Pour lancer en local :

Se rendre dans le dossier souche et lancer le fichier run.bat
Il appelle les fichiers run.bat pour les apis et l'application

!!! IL N'Y A PAS BESOIN DE LANCER "node server.js ou ng serve..."   les fihiers .bat s'en occupent. (Normalement...) !!!

La console affichera normalement les adresses sûr lesquelles se rendre pour voir le site fonctionner.


## HEBERGEMENT 

- Pour l'hebergement nous avions premierement creer 3 repos, 1 pour chaques applications : 

Puis nous nous sommes rendus compte que les repos pouvaient être divisés dans les sites d'hebergement. 
Celui ci est donc le final et le plus complet.

Les 2 apis sont hebergées comme des webServices et le front comme un site web statique avec Render.com.

lien du site : https://assignment-app-stat.onrender.com/
lien de l'api d'authentification : https://api-auth-9elh.onrender.com
lien de l'api pour récupérer les assignments : https://api-assignment.onrender.com


# Repartition  des tâches 

- Sylvain Rome : 

Reprise du projet de sylvain fais en tp et cours :

Back End : 
Creation des deux api grace aux tutoriels : 
https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
https://www.bezkoder.com/node-js-angular-14-jwt-auth/


api-auth :
Il a beaucoup de reprises des tutoriels, mais ajustées pour ce que l'on devait en faire. Il y a eu un mélange entre les notions de l'api donnée en cours et ces tutoriels. 
L'authentification et l'inscription se font avec une base de données mongoDB. Et utilise un token de connexion JWT, les requetes sont normalement un peu sécurisées et le mot de passe est hashé. Cependant la clé de hashage n'est pas bien dure a trouver...

api-assignment : 
A peu près la même que le cours a quelques choses près comme l'ajout de plus de champs dans les assignments, et quelques changements dans server.js pour les options de "cors".

Changements des themes avec le "dark mode".



- Loic Hamann : 

Application dans le front des angular materials avec des variables pour montrer ou non les boutons/interactions/pages si l'utilisateur est ou n'est pas connecté.
https://material.angular.io/components/categories

Mise en forme des pages sur le front en général.


#  Plus et moins de l'appli : 

 - Plus :
Elle réussit a avoir un back end protégé pour les utilisateurs et avec un token JWT.
L'interface est plutôt jolie.
L'hebergement sur une plateforme autre que heroku, car celui-ci semble être payant maintenant.
Le lancement avec des .bat qui sont plus rapides que de taper toutes les commandes.
Les fonctionnalités sont toutes là (à part les images de professeurs et matieres).
La création de deux api différentes, nous pensons que ce n'était pas nécéssaire cependant nous avons voulu repartir de 0 pour mieux comprendre les api et le fonctionnment du backend. La bonne chose est que les services sont différents, si l'un ne marche pas, l'autre lui peut marcher.
Le tri des assignement en fonction des différentes colonnes, nom, matière, rendu, date limite de rendu.
La recherche d'assignement avec le nom ou la matière de l'assignment. 
La création de deux thèmes pour le site, un "light" et un "dark" pour créer un "dark mode". Grâce à https://materialtheme.arcsine.dev/ et https://material.angular.io/guide/theming.
Utilisation de la pagination avec les outils de angular material.
Utilisation des card, de la tool-bar, de la table etc...
Le site est petit peu responsive grâce a angular, mais ce n'est pas du grand art.



 - Moins : 
Certaines redirections qui ne redirigent mal, car certains problèmes avec les routes quand on heberge sur les sites. Le problème semble venir du routing module qui ne marche pas comme voulu sur le site d'hebergement.
Pas d'images pour les matieres et professseurs. Nous avions voulu enregistrer des images en base64 dans mongoDB, mais nous n'y sommes pas arrivés.













