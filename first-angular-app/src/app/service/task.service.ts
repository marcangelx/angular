import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../shared/types/task-types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>([]);
  constructor() { }

  addTask (task: Task) {
    this.tasks.set([...this.tasks(), task]);
  }

  updateTask (task: Task) {
    const tasks = this.tasks();
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      this.tasks.set(tasks);
    }
  }

  deleteTask (id: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  getTaskByUserId (userId: string) {
    return this.tasks().filter(t => t.userId === userId);
  }

}
