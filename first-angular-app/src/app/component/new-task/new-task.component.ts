import { input, signal } from '@angular/core';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
showDialog = output<boolean>();
userId = input.required<string>();
enteredTitle = signal<string>('');
enteredSummary = signal<string>('');
enteredDate = signal<Date>(new Date());
constructor(private taskService: TaskService) { }
cancelDialong() {
  this.showDialog.emit(false);
}

submitTask() {
  this.taskService.addTask({
    id: new Date(this.enteredDate()).getTime().toString(),
    title: this.enteredTitle(),
    summary: this.enteredSummary(),
    dueDate: this.enteredDate(),
    userId: this.userId()
  });
  this.cancelDialong();
}

}
