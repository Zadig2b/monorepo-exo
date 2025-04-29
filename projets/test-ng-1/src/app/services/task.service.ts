import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root' // Service accessible partout
})
export class TaskService {
  private readonly tasksKey = 'tasks'; // Clé pour localStorage

  getTasks(): Task[] {
    const tasksJson = localStorage.getItem(this.tasksKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
  }
}
