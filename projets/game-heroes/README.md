# 🦸‍♂️ Game Heroes - Jeu de Combat Tour par Tour

**Game Heroes** est un jeu de combat web immersif, où des super-héros inspirés des technologies web s'affrontent dans une arène interactive. 
Basé sur HTML, CSS et JavaScript, ce jeu combine stratégie, effets visuels dynamiques et personnalités uniques.

## 🎮 Fonctionnalités

- **Sélection de héros** avec détails (origine, personnalité, pouvoirs).
- **Système de combat tour par tour** avec sorts à cooldown, buffs/malus et effets secondaires.
- **Interface utilisateur animée** avec barres de PV, effets visuels (flashs de coup, tooltips...).
- **Design responsive**

## 🧠 Technologies utilisées

- **HTML5 / CSS3** : Structure et style.
- **JavaScript (modules ES6)** : Logique du jeu, composants réutilisables.
- **LocalStorage** : Stockage temporaire des héros sélectionnés.
- **Programmation orientée objet** : Gestion des héros, sorts et effets.

## 📁 Structure du projet

```
.
├── index.html              # Page de sélection des héros
├── game.html               # Page de combat
├── /style
│   ├── main.css            # Styles page d'accueil
│   └── game.css            # Styles page de combat
├── /js
│   ├── main.js             # Logique de sélection des héros
│   ├── game.js             # Logique de combat
|__ /classes
│   ├── heroes.js           # Classe Hero
│   ├── sort.js             # Classe Sort
|__ /components
│   └── powerCard.js        # Rendu des pouvoirs/spells
├── /data
│   └── heroes.json         # Données des héros
└── /assets/heroes          # Images des héros et de leurs pouvoirs
```

## 🧪 Lancer le projet

1. Cloner ce repo ou télécharger le dossier zip

2. Lancer un serveur local (ex : avec VS Code + Live Server, ou Python) :


3. Ouvrez `http://localhost:numéro du port/index.html` dans votre navigateur.



## 🙌 Remerciements

Ce projet a été créé  pour apprendre la POO, la structuration de projets front-end.
