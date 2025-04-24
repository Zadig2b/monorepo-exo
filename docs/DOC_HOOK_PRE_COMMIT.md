# 🪝 Tutoriel : Git Hook `pre-commit` - Génération automatique du Dashboard

Ce fichier explique l'intérêt d'utiliser un **hook Git `pre-commit`** et comment mettre en place ce mécanisme dans ton monorepo pour **exécuter automatiquement `generate-dashboard.js` avant chaque commit**.

---

## 🤔 Pourquoi un hook `pre-commit` ?

Le hook `pre-commit` permet d'automatiser des tâches **avant qu'un commit soit validé**, par exemple :

- Vérifier la qualité du code (`lint`)
- Lancer des tests
- **Mettre à jour automatiquement des fichiers générés** (comme notre `script.js`)

Dans notre cas, il garantit que le tableau de bord (`script.js`) est **toujours à jour** avec les projets présents dans le monorepo, sans dépendre de l’oubli humain 💡

---

## 🛠️ Mise en place du hook `pre-commit`

### Étape 1 : Créer le fichier

Depuis PowerShell ou ton éditeur :

```bash
notepad .git/hooks/pre-commit
```

> ✅ Le fichier ne doit **pas avoir d’extension** (`.txt`).

### Étape 2 : Contenu du hook

Colle ce script dans le fichier :

```bash
#!/bin/sh
echo "📦 Génération automatique du dashboard..."
node generate-dashboard.js
git add script.js
```

### Étape 3 : Le rendre exécutable (Linux/macOS uniquement)

```bash
chmod +x .git/hooks/pre-commit
```

> ⚠️ Sur Windows, cette étape n’est pas obligatoire, mais assure-toi que le fichier s’appelle bien `pre-commit` sans extension `.txt`.

---

## 🧪 Tester le hook

Modifie un fichier puis fais :

```bash
git commit -am "Test du hook"
```

Tu devrais voir :

```
📦 Génération automatique du dashboard...
✅ script.js généré avec X projets.
```

Et le fichier `script.js` sera inclus dans ton commit automatiquement s’il a été modifié.

---

## 🧰 Désactiver temporairement le hook

Si tu veux bypasser le hook ponctuellement :

```bash
git commit --no-verify -m "commit sans hook"
```

---

## 💡 Astuce

Tu peux ajouter une info dans ton `README.md` pour prévenir les collaborateurs que le tableau de bord est généré automatiquement via ce hook.

---

## 📁 Où le fichier doit-il être placé ?

```
monorepo-exo/
└── .git/
    └── hooks/
        └── pre-commit  ✅
```

---

## 🎉 Résultat

Tu n'oublieras plus jamais de mettre à jour ton tableau de bord. Le hook travaille pour toi 🧠✨
