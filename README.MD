# 📚 Monorepo CDA - Exercices Simplon

Bienvenue dans ce **monorepo** regroupant l'ensemble des exercices réalisés dans le cadre de la formation **Concepteur Développeur d'Applications (CDA)** chez Simplon.

---

## 📑 Sommaire

- [📄 Présentation du projet](#-présentation-du-projet)
- [🗂️ Fonctionnement du monorepo](#️-fonctionnement-du-monorepo)
- [📁 Structure](#-structure)
- [📚 Documentation](#-documentation)
- [📅 Formation CDA Simplon](#-formation-cda-simplon)

---

## 📄 Présentation du projet

Ce dépôt centralise tous les exercices et projets réalisés durant la formation dans des **sous-dossiers indépendants**. Chaque dossier correspond à un projet ou exercice spécifique, avec son propre `index.html`, code source et éventuelles ressources.

> ✅ L'objectif est de simplifier la gestion, la mise en ligne (via GitHub Pages) et le suivi de l'évolution des projets dans un seul dépôt Git.

---

## 🗂️ Fonctionnement du monorepo

- Chaque projet est contenu dans un **sous-dossier** (`js1/`, `react-demo/`, etc.)
- Chaque sous-dossier contient un fichier `index.html`, ou `public/index.html` si généré par un framework.
- Un tableau de bord (`index.html` à la racine) permet de visualiser et accéder à tous les projets via GitHub Pages.
- Un script (`generate-dashboard.js`) scanne automatiquement les sous-dossiers pour mettre à jour le fichier `script.js` du tableau de bord.

---

## 📁 Structure

```
monorepo-exo/
├── index.html              # Tableau de bord principal
├── script.js               # Généré via generate-dashboard.js
├── style.css               # Mise en forme optionnelle
├── generate-dashboard.js   # Script Node.js de génération
├── js1/
│   └── index.html
├── react-demo/
│   └── public/index.html
└── ...
```

---

## 📚 Documentation

- [📦 Tutoriel Monorepo](docs/TUTO_MONOREPO.md)
- [⚙️ Script Dashboard](docs/DOC_GENERATE_DASHBOARD.md)
- [🪝 Hook Git `pre-commit`](docs/DOC_HOOK_PRE_COMMIT.md)

---

## 📅 Formation CDA Simplon

Ce projet s’inscrit dans la dynamique d’apprentissage autour du développement web fullstack, avec des technologies telles que :

- HTML/CSS/JavaScript
- Node.js
- React / Angular
- Java / Spring Boot
- Git / GitHub
