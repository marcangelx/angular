import { Component, computed, input, signal } from '@angular/core';
import { User } from '../../shared/types/user-types';
import { CommonModule } from '@angular/common';
import { getFullName } from '../../shared/util/user-util';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../service/task.service';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Task } from '../../shared/types/task-types';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  fullName = computed(() => getFullName(this.user()));
  userTasks = computed(() => this.taskService.getTaskByUserId(this.user().login.uuid));
  taskList: Task[] = [];
  showAddTask = signal<boolean>(false);
  constructor(private taskService: TaskService) {

  }
  addTask() {
   this.showAddTask.set(true);
  }

  onShowDialong() {
    this.showAddTask.set(false);
  }
}


