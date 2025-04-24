// script.js - Généré automatiquement

const projects = [
  {
    "name": "Array filter",
    "folder": "array-filter",
    "path": "projets\\array-filter\\index.html"
  },
  {
    "name": "Game heroes",
    "folder": "game-heroes",
    "path": "projets\\game-heroes\\index.html"
  },
  {
    "name": "Meal api",
    "folder": "meal-api",
    "path": "projets\\meal-api\\index.html"
  },
  {
    "name": "News frontend",
    "folder": "news-frontend",
    "path": "projets\\news-frontend\\index.html"
  },
  {
    "name": "Perfume card design",
    "folder": "perfume-card-design",
    "path": "projets\\perfume-card-design\\index.html"
  },
  {
    "name": "Pierre feuille",
    "folder": "pierre-feuille",
    "path": "projets\\pierre-feuille\\index.html"
  },
  {
    "name": "Plus ou moins",
    "folder": "plus-ou-moins",
    "path": "projets\\plus-ou-moins\\index.html"
  },
  {
    "name": "Positions css",
    "folder": "positions-css",
    "path": "projets\\positions-css\\index.html"
  },
  {
    "name": "Star wars",
    "folder": "star-wars",
    "path": "projets\\star-wars\\index.html"
  },
  {
    "name": "Todolist",
    "folder": "todolist",
    "path": "projets\\todolist\\index.html"
  },
  {
    "name": "Typescript fetch",
    "folder": "typescript-fetch",
    "path": "projets\\typescript-fetch\\public\\index.html"
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
