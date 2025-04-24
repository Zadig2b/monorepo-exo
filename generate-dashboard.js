// generate-dashboard.js
import { readdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";

const ROOT_DIR = "projets";
const outputScriptPath = join(".", "script.js");

const folders = readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter((dirent) => {
    if (!dirent.isDirectory()) return false;
    const folderPath = join(ROOT_DIR, dirent.name);
    return (
      existsSync(join(folderPath, "index.html")) ||
      existsSync(join(folderPath, "public", "index.html"))
    );
  })
  .map((dirent) => dirent.name);

const projects = folders.map((f) => {
  const localPath = existsSync(join(ROOT_DIR, f, "index.html"))
    ? `${f}/index.html`
    : `${f}/public/index.html`;

  return {
    name: f.replace(/[-_]/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
    folder: f,
    path: join("projets", localPath),
  };
});

const output = `// script.js - Généré automatiquement

const projects = ${JSON.stringify(projects, null, 2)};

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder, path }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = \`
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">\${name}</h5>
        <p class="card-text text-muted">Voir le projet "\${folder}"</p>
        <a href="\${path}" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  \`;
  grid.appendChild(col);
});
`;

writeFileSync(outputScriptPath, output);
console.log(`✅ script.js généré avec ${projects.length} projets.`);
