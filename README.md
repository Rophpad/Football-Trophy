#  Documentation 


## 🚀 Instructions

### Prérequis
Avant de commencer, assurez-vous d'avoir :
1. **Tous les fichiers du projet** dans un seul dossier.
2. **npm** (Node Package Manager) installé sur votre machine.   
   👉 [Guide pour vérifier et installer npm](https://www.google.com/search?q=how+to+check+if+npm+is+insalled+and+install+npm)

---

### Étapes pour lancer le jeu
1. Ouvrez votre terminal.
2. Naviguez dans le dossier contenant les fichiers :
   ```bash
    cd nom_du_dossier_contenant_tous_les_fichiers  # Normalement football-trophy sinon le nom du dossier dans lequel les fichiers sont;
    npm install -g http-server # Installer un seveur Http
    http-server # lancer le serveur

    # Si vous êtes sur un système linux vous pouvez juste lancer le ficher run.sh

    ./run.sh
    ```

Rendez-vous à l'addresse indiquer dans le terminal (vous pouvez la copier coller en le votre navigateur préféré)
Normalement c'est l'addresse: http://127.0.0.1:8081/

## 📁 Structure des fichiers

### **`index.html`**  
Contient le **squelette** de la page HTML. Ce fichier est le point d'entrée du jeu et lie tous les autres éléments du projet.

### **`style.css`**  
Contient le code **CSS** utilisé pour styliser la page. Il est relié au fichier `index.html` via la balise `<link>`.  
**Rôle principal** : Styliser la mise en page, la disposition, et les couleurs du jeu.

### **`main.js`**  
Contient le code JavaScript **principal** pour faire fonctionner le jeu. Ce fichier :
- **Initialise** un joueur et une balle.
- **Détecte les collisions** entre le joueur et la balle pour augmenter le score.
- Gère les **interactions de l'utilisateur** via des boutons (initialisation, démarrage, pause, affichage des scores ou de l'aide).
- Met en place une **boucle de jeu** pour contrôler en continu les collisions et les mouvements.
- **Sauvegarde et affiche** le score.

### **`ball.js`**  
Contient le code pour la classe **Ball**. Ce fichier gère le comportement complet de la balle dans le jeu :
- **Création et affichage** de la balle.
- **Mouvement automatique vertical** de la balle.
- **Redirection** de la balle lorsqu'elle entre en collision avec le joueur.
- Détection des **limites de la zone de jeu** pour réinitialiser sa position ou déclencher la fin de la partie.

### **`player.js`**  
Contient le code pour la classe **Player**. Ce fichier permet de :
- Créer visuellement un **joueur** sous forme d'une icône SVG.
- Ajouter ce joueur dans la **zone de jeu** et le positionner initialement au centre.
- Permettre au joueur de se déplacer à **gauche** et à **droite** en utilisant les touches du clavier.
- Limiter les déplacements du joueur pour qu'il reste dans les **limites définies** de la zone de jeu.

### **`utils.js`**  
Contient des fonctions **utilitaires** pour le jeu. Ce fichier permet de :
- **Enregistrer le score** d'une partie dans le stockage local.
- **Afficher le meilleur score**.
- Fournir les **instructions** pour jouer au jeu.


## A faire

- Gérer correctement la redirection random de la ball au contact avec le Player
- Faire fonctionner le boutton: "Activer/Désactiver le son"
- Rendre le code compatible à tous les navigateurs
- Rendre le code propre

