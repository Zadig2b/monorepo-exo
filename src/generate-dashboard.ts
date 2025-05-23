import { readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { findHtmlEntry } from "./utils/detect-entry.js";
import { detectFramework } from "./utils/detect-framework.js";
import { detectGitHubRepo } from "./utils/detect-repo.js";
import { getFrameworkIcon } from "./utils/framework-icons.js";
import { ProjectCard } from "./types";

const ROOT_DIR = "projets";
const outputDataPath = join(".", "script.data.js");

const folders: ProjectCard[] = readdirSync(ROOT_DIR, { withFileTypes: true })
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

    const readmepath = readmeFile
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
      readmepath,
    };
  })
  .filter((p): p is ProjectCard => p !== null);

// Génération de `script.data.js`
const dataOutput = `// script.data.js - Généré automatiquement
export const projects = ${JSON.stringify(folders, null, 2)};
`;
writeFileSync(outputDataPath, dataOutput);



console.log("✅ Fichiers script.data.js généré.");
