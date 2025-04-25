// scripts/utils/framework-icons.js
import { existsSync } from "fs";
import { join } from "path";

/**
 * Retourne un <img> HTML pointant vers l'icône du framework
 * @param {string} framework - nom détecté (React, Angular, etc.)
 * @returns {string} balise <img> ou SVG générique
 */
export function getFrameworkIcon(framework:string): string {
  const fileName = framework.replace(/\s+/g, "") + ".svg";
  const iconPath = join("assets/framework-icons", fileName);

  if (existsSync(iconPath)) {
    return `<img src="${iconPath}" alt="${framework} logo" width="20" height="20">`;
  }

  // fallback générique SVG inline
  return `<img src="assets/framework-icons/Vanilla.svg" alt="Vanilla logo" width="20" height="20">`;

}
