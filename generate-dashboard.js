// generate-dashboard.js
import { readdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join, extname } from "path";

const ROOT_DIR = "projets";
const outputScriptPath = join(".", "script.js");

const entryCandidates = [
  "index.html",
  "public/index.html",
  "src/index.html",
  "index.ts",
  "index.js",
  "src/index.ts",
  "src/index.js",
  "src/main.ts",
  "src/main.js",
  "src/main.tsx",
  "src/main.jsx",
  "src/index.tsx",
  "src/index.jsx",
  "app/page.tsx",
  "app/page.jsx",
  "src/app/page.tsx",
  "src/app/page.jsx",
];

function findEntryPoint(folderPath) {
  for (const candidate of entryCandidates) {
    const fullPath = join(folderPath, candidate);
    if (existsSync(fullPath)) {
      return candidate;
    }
  }
  return null;
}

function detectFramework(folderPath) {
  const pkgPath = join(folderPath, "package.json");
  if (existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
      const deps = { ...pkg.dependencies, ...pkg.devDependencies };

      if ("next" in deps) return "Next.js";
      if ("react" in deps) return "React";
      if ("vue" in deps) return "Vue";
    } catch (e) {
      return "Unknown";
    }
  }

  if (existsSync(join(folderPath, "angular.json"))) return "Angular";
  if (existsSync(join(folderPath, "src", "main.ts"))) return "Angular";

  const allFiles = entryCandidates.map((f) => join(folderPath, f)).filter(existsSync);
  for (const file of allFiles) {
    const ext = extname(file);
    if (ext === ".tsx" || ext === ".jsx") return "React";
  }

  return "Vanilla";
}

const folders = readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => {
    const folderPath = join(ROOT_DIR, dirent.name);
    const entry = findEntryPoint(folderPath);
    if (!entry) return null;

    const framework = detectFramework(folderPath);
    return {
      name: dirent.name.replace(/[-_]/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
      folder: dirent.name,
      path: join(ROOT_DIR, dirent.name, entry),
      framework,
    };
  })
  .filter(Boolean); // supprime les null

const output = `// script.js - Généré automatiquement

const projects = ${JSON.stringify(folders, null, 2)};

const grid = document.getElementById("projects-grid");

projects.forEach(({ name, folder, path, framework }) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = \`
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title d-flex justify-content-between">
          <span>\${name}</span>
          <span class="badge bg-secondary text-uppercase">\${framework}</span>
        </h5>
        <p class="card-text text-muted">Voir le projet "\${folder}"</p>
        <a href="\${path}" class="btn btn-primary mt-auto">Ouvrir</a>
      </div>
    </div>
  \`;
  grid.appendChild(col);
});
`;

writeFileSync(outputScriptPath, output);
console.log(`✅ script.js généré avec ${folders.length} projets.`);
