// scripts/utils/detect-entry.ts
import { existsSync } from "fs";
import { join } from "path";

// Liste des fichiers HTML exploitables par le navigateur
const htmlCandidates: string[] = [
  "index.html",
  "public/index.html",
  "src/index.html"
];

/**
 * Recherche un fichier HTML exploitable dans le dossier d’un projet
 * @param folderPath - Chemin absolu du projet
 * @returns Chemin relatif trouvé ou null
 */
export function findHtmlEntry(folderPath: string): string | null {
  for (const candidate of htmlCandidates) {
    const fullPath = join(folderPath, candidate);
    if (existsSync(fullPath)) {
      return candidate;
    }
  }
  return null;
}