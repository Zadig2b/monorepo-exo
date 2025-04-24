# ⚙️ Documentation - Script `generate-dashboard.js`

Ce fichier explique le fonctionnement du script `generate-dashboard.js` utilisé pour **générer dynamiquement un tableau de bord** listant les projets du monorepo sous forme de vignettes Bootstrap dans GitHub Pages.

---

## 📁 Structure attendue

Votre dépôt doit avoir cette structure :

```
monorepo-exo/
├── index.html              # Fichier racine affichant les projets
├── script.js               # Généré automatiquement par generate-dashboard.js
├── style.css               # Style des vignettes
├── generate-dashboard.js   # Script Node à exécuter
├── projet1/
│   └── index.html
├── projet2/
│   └── public/index.html
└── ...
```

---

## 🚀 Fonctionnement du script

Le script :
1. Scanne tous les **sous-dossiers du dossier racine**.
2. Vérifie si chaque sous-dossier contient un fichier `index.html` **ou** `public/index.html`.
3. Génère un fichier `script.js` qui :
   - Crée une vignette Bootstrap pour chaque projet
   - Utilise le chemin correct selon l'emplacement de `index.html` détecté

---

## 🛠️ Utilisation

### Étape 1 : Installer Node.js (si ce n’est pas déjà fait)

https://nodejs.org/

### Étape 2 : Exécuter le script

```bash
node generate-dashboard.js
```

Ou si tu as configuré ton `package.json` :

```bash
npm run build:dashboard
```

### Résultat :
Le fichier `script.js` est mis à jour avec une liste de projets basée sur l’arborescence actuelle, prenant en compte les structures classiques (React, Vite, etc.).

---

## ✏️ Personnalisation

Chaque vignette affiche :
- Le nom du projet (dérivé du nom du dossier)
- Un lien vers le bon `index.html` (dans `dossier/` ou `dossier/public/`)
- Un bouton "Ouvrir"

Tu peux modifier ce comportement dans le fichier `generate-dashboard.js` si besoin.

---

## 💡 Astuce : exécuter automatiquement avant commit

Tu peux intégrer ce script dans un Git hook `pre-commit` ou dans ton workflow de build pour qu’il soit toujours à jour.

---

## 📜 Exemple de sortie `script.js` généré

```javascript
const projects = [
  { name: "Js1", folder: "js1", path: "js1/index.html" },
  { name: "Js2", folder: "js2", path: "js2/public/index.html" }
];
...
```

---

## 🧾 Licence

Ce script est librement réutilisable dans tous vos projets monorepo.
