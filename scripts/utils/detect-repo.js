// scripts/utils/detect-repo.js
import { existsSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Extrait l'URL GitHub à partir du champ repository de package.json
 * @param {string} folderPath - Chemin vers le dossier projet
 * @returns {string|null} URL GitHub propre ou null
 */
export function detectGitHubRepo(folderPath) {
  const pkgPath = join(folderPath, "package.json");
  if (!existsSync(pkgPath)) return null;

  try {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
    const rawUrl = pkg.repository?.url;
    if (!rawUrl) return null;

    // Nettoyage URL (git+, .git...)
    return rawUrl.replace(/^git\+/, "").replace(/\.git$/, "");
  } catch {
    return null;
  }
}