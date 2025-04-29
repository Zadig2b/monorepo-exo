import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() task!: Task;
@Output() toggle = new EventEmitter<void>();
@Output() delete = new EventEmitter<void>();
}
