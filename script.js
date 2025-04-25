// script.js - Généré automatiquement

const projects = [
  {
    "name": "Array filter",
    "folder": "array-filter",
    "path": "projets\\array-filter\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Form",
    "folder": "form",
    "path": "projets\\form\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Game heroes",
    "folder": "game-heroes",
    "path": "projets\\game-heroes\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Meal api",
    "folder": "meal-api",
    "path": "projets\\meal-api\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "News frontend",
    "folder": "news-frontend",
    "path": "projets\\news-frontend\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Perfume card design",
    "folder": "perfume-card-design",
    "path": "projets\\perfume-card-design\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Pierre feuille",
    "folder": "pierre-feuille",
    "path": "projets\\pierre-feuille\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Plus ou moins",
    "folder": "plus-ou-moins",
    "path": "projets\\plus-ou-moins\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Positions css",
    "folder": "positions-css",
    "path": "projets\\positions-css\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Recipe",
    "folder": "recipe",
    "path": "projets\\recipe\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Star wars",
    "folder": "star-wars",
    "path": "projets\\star-wars\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Todolist",
    "folder": "todolist",
    "path": "projets\\todolist\\index.html",
    "framework": "Vanilla"
  },
  {
    "name": "Typescript Exercism",
    "folder": "Typescript Exercism",
    "path": "projets\\Typescript Exercism\\src\\index.ts",
    "framework": "Vanilla"
  },
  {
    "name": "Typescript fetch",
    "folder": "typescript-fetch",
    "path": "projets\\typescript-fetch\\public\\index.html",
    "framework": "Vanilla"
  }
];

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder, path, framework }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title d-flex justify-content-between">
          <span>${name}</span>
          <span class="badge bg-secondary text-uppercase">${framework}</span>
        </h5>
        <p class="card-text text-muted">Voir le projet "${folder}"</p>
        <a href="${path}" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  `;
  grid.appendChild(col);
});
