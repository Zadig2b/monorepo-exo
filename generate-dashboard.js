// generate-dashboard.js
import { readdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT_DIR = ".";
const outputScriptPath = join(ROOT_DIR, "script.js");

const folders = readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      existsSync(join(ROOT_DIR, dirent.name, "index.html"))
  )
  .map((dirent) => dirent.name);

// Génération du contenu JS
const output = `// script.js - Généré automatiquement

const projects = ${JSON.stringify(
  folders.map((f) => ({
    name: f.replace(/[-_]/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
    folder: f,
  })),
  null,
  2
)};

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = \`
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">\${name}</h5>
        <p class="card-text text-muted">Voir le projet "\${folder}"</p>
        <a href="\${folder}/index.html" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  \`;
  grid.appendChild(col);
});
`;

writeFileSync(outputScriptPath, output);
console.log(`✅ script.js généré avec ${folders.length} projets.`);
