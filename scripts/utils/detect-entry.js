// scripts/utils/detect-entry.js
import { existsSync } from "fs";
import { join } from "path";

// Liste des fichiers HTML exploitables par le navigateur
const htmlCandidates = [
  "index.html",
  "public/index.html",
  "src/index.html"
];

/**
 * Recherche un fichier HTML exploitable dans le dossier d’un projet
 * @param {string} folderPath - Chemin absolu du projet
 * @returns {string|null} Chemin relatif trouvé ou null
 */
export function findHtmlEntry(folderPath) {
  for (const candidate of htmlCandidates) {
    const fullPath = join(folderPath, candidate);
    if (existsSync(fullPath)) {
      return candidate;
    }
  }
  return null;
}