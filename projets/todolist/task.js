export default class Task {
    static currentId = 1;
    constructor(name, desc = "") {
      this.id = Task.currentId++;
      this.name = name;
      this.desc = desc;
      this.done = false;
    }
  
    toggle() {
      this.done = !this.done;
    }
  }