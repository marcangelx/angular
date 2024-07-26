import { Component, input } from '@angular/core';
import { Task } from '../../shared/types/task-types';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  constructor(private taskService: TaskService) {

  }
  taskComplete() {
   this.taskService.deleteTask(this.task().id);
  }
}
