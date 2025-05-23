// script.ui.js
import { projects } from './script.data.js';
import { generateCardHTML } from './scripts/utils/template.js';

const grid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = generateCardHTML(project);
  grid.appendChild(col);
});
