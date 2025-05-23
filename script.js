// script.js - Généré automatiquement

  const projects = [
  {
    "name": "Array Filter",
    "folder": "array-filter",
    "path": "projets\\array-filter\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/array-filter/README.md"
  },
  {
    "name": "Form",
    "folder": "form",
    "path": "projets\\form\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/form/README.md"
  },
  {
    "name": "Game Heroes",
    "folder": "game-heroes",
    "path": "projets\\game-heroes\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/game-heroes/README.md"
  },
  {
    "name": "Js1",
    "folder": "js1",
    "path": "projets\\js1\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/js1/README.md"
  },
  {
    "name": "Meal Api",
    "folder": "meal-api",
    "path": "projets\\meal-api\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/meal-api/README.md"
  },
  {
    "name": "News Frontend",
    "folder": "news-frontend",
    "path": "projets\\news-frontend\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/news-frontend/README.md"
  },
  {
    "name": "Perfume Card Design",
    "folder": "perfume-card-design",
    "path": "projets\\perfume-card-design\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/perfume-card-design/README.md"
  },
  {
    "name": "Pierre Feuille",
    "folder": "pierre-feuille",
    "path": "projets\\pierre-feuille\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/pierre-feuille/README.md"
  },
  {
    "name": "Plus Ou Moins",
    "folder": "plus-ou-moins",
    "path": "projets\\plus-ou-moins\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/plus-ou-moins/README.md"
  },
  {
    "name": "Positions Css",
    "folder": "positions-css",
    "path": "projets\\positions-css\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/positions-css/README.md"
  },
  {
    "name": "Recipe",
    "folder": "recipe",
    "path": "projets\\recipe\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/recipe/README.md"
  },
  {
    "name": "Star Wars",
    "folder": "star-wars",
    "path": "projets\\star-wars\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/star-wars/README.md"
  },
  {
    "name": "Todolist",
    "folder": "todolist",
    "path": "projets\\todolist\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/todolist/README.md"
  },
  {
    "name": "Typescript Fetch",
    "folder": "typescript-fetch",
    "path": "projets\\typescript-fetch\\public\\index.html",
    "framework": "Vanilla",
    "github": null,
    "icon": "<img src=\"assets\\framework-icons\\Vanilla.svg\" alt=\"Vanilla logo\" width=\"20\" height=\"20\">",
    "readmePath": "/projets/typescript-fetch/readme.md"
  }
];
  
  const grid = document.getElementById("projects-grid");
  
  // Fonction d’injection HTML
  function generateCardHTML({ name, folder, path, framework, github, icon, readmepath }) {
    return `
      <div class="card card-project h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title d-flex justify-content-between align-items-center">
            <span>${name}</span>
            <span class="d-flex align-items-center gap-1">
              ${icon}
              <span class="badge bg-secondary text-uppercase">${framework}</span>
            </span>
          </h5>
          <p class="card-text text-muted">Voir le projet "${folder}"</p>
          <div class="mt-auto d-flex justify-content-between">
            <a href="${path}" class="btn btn-primary">Ouvrir</a>
            ${github ? `<a href="${github}" target="_blank" class="btn btn-outline-dark">GitHub</a>` : ""}
                      ${readmepath ? `<a href="${readmepath}" class="btn btn-outline-secondary">README</a>` : ""}

          </div>
        </div>
      </div>
    `;
  }
  
  projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = generateCardHTML(project);
    grid.appendChild(col);
  });
  