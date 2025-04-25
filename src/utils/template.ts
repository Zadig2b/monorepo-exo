// scripts/utils/template.ts
import { ProjectCard } from "../types";

/**
 * Génère le HTML JS à injecter pour chaque carte projet
 * @param p - projet enrichi
 * @returns HTML à insérer dans le DOM
 */
export function generateCardHTML({ name, folder, path, framework, github, icon }: ProjectCard): string {
  return `
    <div class="card card-project h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title d-flex justify-content-between align-items-center">
          <span>${name}</span>
          <span class="d-flex align-items-center gap-1">
            ${icon}
            <span class="badge bg-secondary text-uppercase">${framework}</span>
          </span>
        </h5>
        <p class="card-text text-muted">Voir le projet "${folder}"</p>
        <div class="mt-auto d-flex justify-content-between">
          <a href="${path}" class="btn btn-primary">Ouvrir</a>
          ${github ? `<a href="${github}" target="_blank" class="btn btn-outline-dark">GitHub</a>` : ""}
        </div>
      </div>
    </div>
  `;
}