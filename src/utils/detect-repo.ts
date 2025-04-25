// scripts/utils/detect-repo.ts
import { existsSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Extrait l'URL GitHub à partir du champ repository de package.json
 * @param folderPath - Chemin vers le dossier projet
 * @returns URL GitHub propre ou null
 */
export function detectGitHubRepo(folderPath: string): string | null {
  const pkgPath = join(folderPath, "package.json");
  if (!existsSync(pkgPath)) return null;

  try {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as {
      repository?: { url?: string } | string;
    };

    let rawUrl: string | undefined;

    if (typeof pkg.repository === "string") {
      rawUrl = pkg.repository;
    } else {
      rawUrl = pkg.repository?.url;
    }

    if (!rawUrl) return null;

    // Nettoyage URL (git+, .git...)
    return rawUrl.replace(/^git\+/, "").replace(/\.git$/, "");
  } catch {
    return null;
  }
}