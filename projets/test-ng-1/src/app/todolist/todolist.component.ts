import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private readonly taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const task: Task = {
        id: Date.now(),
        title: this.newTask,
        completed: false
      };
      this.tasks.push(task);
      this.newTask = '';
      this.save();
    }
  }

  toggleCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.save();
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.save();
  }

  private save() {
    this.taskService.saveTasks(this.tasks);
  }
}
