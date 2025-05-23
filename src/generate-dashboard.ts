// scripts/generate-dashboard.js
import { readdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { findHtmlEntry } from "./utils/detect-entry.js";
import { detectFramework } from "./utils/detect-framework.js";
import { detectGitHubRepo } from "./utils/detect-repo.js";
import { getFrameworkIcon } from "./utils/framework-icons.js";
import { generateCardHTML } from "./utils/template.js";

const ROOT_DIR = "projets";
const outputScriptPath = join(".", "script.js");

const folders = readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => {
    const folderPath = join(ROOT_DIR, dirent.name);
    const entry = findHtmlEntry(folderPath);
    if (!entry) return null;

    const framework = detectFramework(folderPath);
    const github = detectGitHubRepo(folderPath);
    const icon = getFrameworkIcon(framework);
    const readmeFile = readdirSync(folderPath).find(
      (file) => file.toLowerCase() === "readme.md"
    );

    const readmePath = readmeFile
      ? `/projets/${dirent.name}/${readmeFile}`
      : null;

    return {
      name: dirent.name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      folder: dirent.name,
      path: join(ROOT_DIR, dirent.name, entry),
      framework,
      github,
      icon,
      readmePath,
    };
  })
  .filter(Boolean);

const output = `// script.js - Généré automatiquement

  const projects = ${JSON.stringify(folders, null, 2)};
  
  const grid = document.getElementById("projects-grid");
  
  // Fonction d’injection HTML
  function generateCardHTML({ name, folder, path, framework, github, icon, readmepath }) {
    return \`
      <div class="card card-project h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title d-flex justify-content-between align-items-center">
            <span>\${name}</span>
            <span class="d-flex align-items-center gap-1">
              \${icon}
              <span class="badge bg-secondary text-uppercase">\${framework}</span>
            </span>
          </h5>
          <p class="card-text text-muted">Voir le projet "\${folder}"</p>
          <div class="mt-auto d-flex justify-content-between">
            <a href="\${path}" class="btn btn-primary">Ouvrir</a>
            \${github ? \`<a href="\${github}" target="_blank" class="btn btn-outline-dark">GitHub</a>\` : ""}
                      \${readmepath ? \`<a href="\${readmepath}" class="btn btn-outline-secondary">README</a>\` : ""}

          </div>
        </div>
      </div>
    \`;
  }
  
  projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = generateCardHTML(project);
    grid.appendChild(col);
  });
  `;

writeFileSync(outputScriptPath, output);
console.log(`✅ script.js généré avec ${folders.length} projets.`);
