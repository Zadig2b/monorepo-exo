import TaskList from "./tasklist.js";

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("task-name").value;
  const desc = document.getElementById("task-desc").value;
  myTaskList.addTask(name, desc);
  myTaskList.renderTasks();
  taskForm.reset(); // pour effacer le formulaire après ajout
});


const myTaskList = new TaskList();
