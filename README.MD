# PROQUIZZ
Cette application est un programme de simulation d'entrainement pour la maîtrise des connaissance dans des domaines bien spécifiques de l'informatique, notamment la programmation. Le premier sujet ciblé est le langage c++. Il est basé sur un principe simple de QCM où à chaque fois l'application présente à l'utilisateur une question ainsi qu'un certain nombre de réponses possibles où il doit faire un choix et tester.

## Démo
L'application est disponnible depuis l'adresse https://proquizz.web.app

## Cas concret de cas d'utilisation
Dans cette partie nous présentons le flux pour un utilisateur quelconque afin de lui permettre d'utiliser l'application.

### Une présentation
Si l'utilisateur est nouveau sur la plateforme (c'est-à-dire que c'est sa première fois de consulter le site), un message de bienvenue lui est affiché.
Ce message consiste en la présentation à travers une interface assez conviviale l'objectif de l'application ainsi que comment s'en servir pour bénéficier du maximum des fonctionnalités qu'elle offre.

Cependant si l'utilisateur n'est pas nouveau, il ne sera pas nécessaire de lui présenter l'interface de bienvenue mais cette interface sera toujours disponnible à la demande de l'utilisateur.

### Vous êtes dans la room
A partir de l'interface d'accueil, qui s'affiche directement à l'ouverture de l'application (si l'utilisateur n'est pas nouveau) ou après la présentation de l'application (si l'utilisateur est nouveau), nous proposerons de classer les différents topics qui pourraient notament interesser l'utilisateur. (Car chaque question appartient à une catégorie bien définie ou plusieurs d'ailleurs...).

Ainsi disons simplement que l'utilisateur entrera dans la ROOM où il lui sera présenté des questions auxquelles il devra répondre.

Pour l'instant les questions sont du type :
* Vrai ou faux
* QCM
* Réponse unique

S'il s'agit d'une question de type Vrai ou faux, l'utilisateur aura un apperçu de la question et il devra faire un choix (soit vrai, soit faux) et puis directement il passe au CHECKER en appuyant sur un bouton VALIDER. Nous expliquerons ultérieurement le rôle du CHECKER.

Si la question sur laquelle tombe l'utilisateur est du type QCM, l'application lui affiche non seulement la question mais également une série de réponses potentielles dont l'ordre est hasardeux à chaque fois.
A ce niveau, une question pourrait avoir plusieurs choix de réponses possible ou au contraire qu'une seule réponse soit possible.
De toute évidence, l'application propose les deux possibilités (réponse unique et plusieurs réponses). Si le nombre de choix possible est limité à un, l'utilisateur ne saurait sélectionner plus d'une option. Là aussi, il choisit le nombre de réponses qui lui semblent adéquates puis passe au CHECKER.

Finalement, si la question est du type réponse unique, cette fois, l'application va lui poser une question et la réponse sera à saisir par l'utilisateur lui même. Une fois qu'il saisit sa réponse, il peut passer au CHECKER.

### Maintenant au CHECKER
Pour ce qui concerne le checker, cette interface se charge de pont de justice vers la nouvelle room. C'est-à-dire que dans cette interface, l'utilisateur saura si oui ou non il a fourni une bonne réponse ainsi qu'une explication du pourquoi.
L'application se contente d'expliquer brièvement la bonne réponse. Mais à côté de cela, nous aurons en addition:

* Une image significative randomisée pour symboliser la réussite ou l'échec de l'utilisateur
* Une idée du score de l'utilisateur, ça peut être le nombre de questions trouvées sur le nombre de questions au total qu'il a testé ou ou autre chose.
* Egalement un bouton de transition vers la nouvelle room où il lui sera posé une nouvelle question.

## Piochage (ou choix) des questions
L'idée pour les questions c'est une sur deux :

* On utilise des sous-dictionnaires séparées (chaque sous-dictionnaire contenant un seul type de questions) et à chaque fois que l'utilisateur s'apprête à entrer dans la room, nous choisissons au hasard un sous-dictionnaire puis une question dans ce dictionnaire.
* On utilise un dictionnaire unique qui centralise toutes les questions et là, à chaque entrée dans la room, il s'agira de tirer une question au hasard pour ensuite la poser à l'utilisateur.

Egalement, nous pourrions faire en sorte que les questions posées soient marquées (comme déjà posées) et puis de temps à autre, reposer une question déjà posée juste pour vérifier la constance de l'utilisateur.

## Informations sur les utilisateurs
L'application ne diffuse aucune information sur les utilisateurs étant donné que toutes les informations sont stockés dans la machine propre de ces derniers, garantissant ainsi leur sécurité.

Si c'est dans le site web, l'avantage c'est que l'utilisateur sera au courant des dernières mises à jours directement dès leur visite.
Alors que dans le cas de l'application mobile, il leur est nécessaire d'installer chaque mise à jour, surtout si des amélioration sont apportées au niveau des questions ou alors de l'interface.

Nous pourrions aussi proposer sur le site lui-même un lien de téléchargement pour l'application mobile une fois construite.
