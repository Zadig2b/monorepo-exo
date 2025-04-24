// script.js - Généré automatiquement

const projects = [
  {
    "name": "Array filter",
    "folder": "array-filter"
  },
  {
    "name": "Game heroes",
    "folder": "game-heroes"
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
    "name": "Perfume card design",
    "folder": "perfume-card-design"
  },
  {
    "name": "Pierre feuille",
    "folder": "pierre-feuille"
  },
  {
    "name": "Plus ou moins",
    "folder": "plus-ou-moins"
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
    "name": "Todolist",
    "folder": "todolist"
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
