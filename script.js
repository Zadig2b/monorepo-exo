// script.js - Généré automatiquement

const projects = [
  {
    "name": "Array filter",
    "folder": "array-filter",
    "path": "array-filter/index.html"
  },
  {
    "name": "Game heroes",
    "folder": "game-heroes",
    "path": "game-heroes/index.html"
  },
  {
    "name": "Meal api",
    "folder": "meal-api",
    "path": "meal-api/index.html"
  },
  {
    "name": "News frontend",
    "folder": "news-frontend",
    "path": "news-frontend/index.html"
  },
  {
    "name": "Perfume card design",
    "folder": "perfume-card-design",
    "path": "perfume-card-design/index.html"
  },
  {
    "name": "Pierre feuille",
    "folder": "pierre-feuille",
    "path": "pierre-feuille/index.html"
  },
  {
    "name": "Plus ou moins",
    "folder": "plus-ou-moins",
    "path": "plus-ou-moins/index.html"
  },
  {
    "name": "Positions css",
    "folder": "positions-css",
    "path": "positions-css/index.html"
  },
  {
    "name": "Star wars",
    "folder": "star-wars",
    "path": "star-wars/index.html"
  },
  {
    "name": "Todolist",
    "folder": "todolist",
    "path": "todolist/index.html"
  },
  {
    "name": "Typescript fetch",
    "folder": "typescript-fetch",
    "path": "typescript-fetch/public/index.html"
  }
];

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder, path }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${name}</h5>
        <p class="card-text text-muted">Voir le projet "${folder}"</p>
        <a href="${path}" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  `;
  grid.appendChild(col);
});
