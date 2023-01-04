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

- Pour l'hebergement nous avons creer 3 repos, 1 pour chaques applications : 

https://github.com/syl9456/assignment-app-Heroku
https://github.com/syl9456/api-assignment-Heroku
https://github.com/syl9456/api-auth-Heroku

Les versions sur ces git change de celle-ci car les url ne sont pas les même... 

Les 2 apis sont hebergées avec Render.com comme des WebServices
Et le front : assignment-app est hebergé sur netilify :
https://roaring-beignet-d972e5.netlify.app



# Repartition  des tâches 

- Sylvain Rome : 

Reprise du projet de sylvain fais en tp et cours :

Back End : 
Creation des deux api grace aux tutoriels : 
https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
https://www.bezkoder.com/node-js-angular-14-jwt-auth/


api-auth :
Il a beaucoup de reprises, mais ajustées pour ce que l'on devait en faire. Il y a eu un mélange entre les notions de l'api donnée en cours et ces tutoriels. 
L'authentification et l'inscription se font avec une base de données mongoDB. Et utilise un token de connexion, les requetes sont normalement un peu sécurisées et le mot de passe est hashé. Cependant la clé de hashage n'est pas bien dure a trouver...

api-assignment : 
A peu près la même que le cours a quelques choses près comme l'ajout de plus de champs dans les assignments, et quelques changements dans server.js .



- Loic Hamann : 

Application dans le front des angular materials avec des variables pour montrer ou non les boutons/interactions/pages si l'utilisateur est ou n'est pas connecté.
https://material.angular.io/components/categories

Mise en forme des pages sur le front en général.


#  Plus et moins de l'appli : 

-Plus :
Elle réussit a avoir un back end protégé pour les utilisateurs et avec du JWT.
L'interface est plutôt jolie.
L'hebergement sur une plateforme autre que heroku car celui-ci semble être payant maintenant.
Le lancement avec des .bat qui sont plus rapides que de taper toutes les commandes.
Les fonctionnalités sont toutes là (à part les images de profs et matieres).


-Moins : 
La création de deux api car manque d'experience et trop peu de temps vers la fin pour rassembler les deux api en une. 
Mais avoir la connexion et les assignments sur deux api différentes n'est pas non plus trop mal !
Certaines redirections qui ne redirigent pas grand chose. Problemes sur les routes surrement mais nous n'arrivons pas a trouver les erreurs.
La creation de plusieurs repos git, et la mauvaise utilisation de celui-ci (Nous avons dû refaire un repos car l'ancien était "corrompu" a cause de mauvais .gitignore)













