L'exo :  Exercice TypeScript + Fetch API JSONPlaceholder
Objectif : Revoir la création d’interfaces TypeScript, la logique fetch, la structuration de fonctions, et l’affichage console.

 Étape 1 — Définir les interfaces
Créer une interface User contenant les propriétés essentielles d’un utilisateur (id, nom, email...).

Créer une interface Post correspondant aux articles publiés par un utilisateur.

Étape 2 — Récupérer les utilisateurs
Créer une fonction asynchrone fetchUsers qui fait un appel HTTP GET vers l’endpoint /users.

Gérer les erreurs avec un bloc try/catch.

Retourner un tableau d’objets typés User.

Étape 3 — Afficher les utilisateurs
Créer une fonction displayUser qui prend un User en paramètre et affiche ses infos dans la console (nom, email, etc.).

Créer une fonction displayAllUsers qui appelle fetchUsers puis affiche chaque utilisateur avec displayUser.

Étape 4 — Récupérer les posts d’un utilisateur
Créer une fonction asynchrone fetchPostsByUserId qui prend l’id d’un utilisateur et fait un fetch vers /posts?userId={id}.

Gérer les erreurs, puis retourner un tableau typé Post.

Étape 5 — Afficher les posts d’un utilisateur
Créer une fonction displayPost qui affiche les propriétés principales d’un post (titre + contenu).

Créer une fonction displayPostsForUser qui :

Affiche un titre indiquant de quel utilisateur il s’agit

Récupère ses posts via fetchPostsByUserId

Affiche chaque post avec displayPost

Étape 6 — Tout assembler
Créer une fonction main qui :

Récupère la liste des utilisateurs

Pour chacun :

Affiche l’utilisateur

Affiche ses posts

Appeler main() pour lancer le tout.