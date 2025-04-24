# 🧰 Tutoriel : Créer un Monorepo Git avec Historique des Repos Individuels

Ce guide explique comment fusionner plusieurs dépôts GitHub individuels dans un **monorepo centralisé**, en **conservant l'historique de chaque projet** dans des sous-dossiers dédiés.

---

## ✅ Pré-requis

- Git installé
- Accès en lecture aux anciens dépôts (privés ou publics)
- Un dépôt Git vide pour le monorepo, ou un projet de base déjà initialisé

---

## 🛠 Étapes pour intégrer un dépôt dans le monorepo

### 1. Cloner le monorepo

```bash
git clone git@github.com:<user>/monorepo-exo.git
cd monorepo-exo
```

### 2. Ajouter le dépôt distant à importer et importer le contenu dans un sous-dossier avec historique

```bash
git remote add js1 git@github.com:<user>/js1.git
git fetch js1
git read-tree --prefix=js1/ -u js1/main  # ou autre branche ex: js1/feature
```

> 🔁 Tu peux répéter cette étape pour d'autres projets (`js2`, `react-demo`, etc.).

---

## 🔍 Vérifier que l'historique a bien été conservé

```bash
git log -- js1/
# ou avec un graphe :
git log --graph --oneline --all --decorate
```

---

## 🧹 Nettoyage post-import (si besoin)

Si tu veux ré-importer un projet proprement :

```bash
git rm -r --cached js1
rm -rf js1             # ou PowerShell : Remove-Item -Recurse -Force js1
git commit -m "Nettoyage du projet js1 pour réimport"
```

Puis recommencer l'import depuis la branche désirée.

---

## 🧾 Notes importantes

- Les anciens dépôts peuvent ensuite être **archivés ou supprimés** si tu n’en as plus besoin.
- Le `read-tree` **préserve l’historique des commits** : tu peux naviguer avec `git log -- <dossier>`.

---

## 🚀 Astuce : tableau de bord avec GitHub Pages

Tu peux créer un `index.html` à la racine pour accéder à chaque projet en vignette (voir [⚙️ Script Dashboard](DOC_GENERATE_DASHBOARD.md)).

---

## 🎉 Félicitations !

Ton monorepo est prêt, structuré proprement avec tous les projets centralisés et versionnés proprement ✅
