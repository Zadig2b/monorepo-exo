// scripts/utils/detect-framework.js
import { existsSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Détecte le framework utilisé à partir de fichiers et dépendances connus
 * @param {string} folderPath - Chemin du dossier du projet
 * @returns {string} Nom du framework (ou "Vanilla")
 */
export function detectFramework(folderPath) {
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

  return "Vanilla";
}