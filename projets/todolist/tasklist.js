import Task from "./task.js";

export default class TaskList {
  constructor() {
    this.tasks = [];
    this.taskList = document.getElementById("task-list");
    this.nameInput = document.getElementById("task-name");
    this.descInput = document.getElementById("task-desc");
  }

  addTask(name, desc) {
    const newTask = new Task(name, desc);
    this.tasks.push(newTask);
    this.renderTasks();
  }

  renderTasks() {
    this.taskList.innerHTML = "";

    this.tasks.forEach((task) => {
      // création de l'élément vide li
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      // création de l'élément div et remplissage avec données
      const content = document.createElement("div");
      content.innerHTML = `<strong>${task.name}</strong><br><small>${task.desc}</small>`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.done;
      checkbox.classList.add("form-check-input", "me-2");

      //toggle la tâche au clic
      checkbox.addEventListener("change", () => {
        task.toggle();
        li.classList.toggle("bg-secondary", task.done);
      });

      const removeBtn = document.createElement("button");
      removeBtn.className = "btn btn-sm btn-danger";
      removeBtn.innerText = "Supprimer";

      removeBtn.addEventListener("click", () => {
        this.tasks = this.tasks.filter((t) => t !== task);
        this.taskList.innerHTML = ""; // clear old list
        this.renderTasks(); // rerender
      });

      const left = document.createElement("div");
      left.className = "d-flex align-items-center gap-2";
      left.appendChild(checkbox);
      left.appendChild(content);

      li.appendChild(left);
      li.appendChild(removeBtn);
      this.taskList.appendChild(li);
    });
  }
}
