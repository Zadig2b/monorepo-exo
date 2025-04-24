// script.js - Généré automatiquement

const projects = [
  {
    "name": "Array filter",
    "folder": "array-filter"
  },
  {
    "name": "Exo1",
    "folder": "exo1"
  },
  {
    "name": "Game heroes",
    "folder": "game-heroes"
  },
  {
    "name": "Js1",
    "folder": "js1"
  },
  {
    "name": "Js2",
    "folder": "js2"
  },
  {
    "name": "Meal api",
    "folder": "meal-api"
  },
  {
    "name": "News frontend",
    "folder": "news-frontend"
  },
  {
    "name": "Pierre feuille",
    "folder": "pierre-feuille"
  },
  {
    "name": "Positions css",
    "folder": "positions-css"
  },
  {
    "name": "Star wars",
    "folder": "star-wars"
  },
  {
    "name": "Todolist2",
    "folder": "todolist2"
  }
];

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${name}</h5>
        <p class="card-text text-muted">Voir le projet "${folder}"</p>
        <a href="${folder}/index.html" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  `;
  grid.appendChild(col);
});
