import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./component/users/users.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { User } from './shared/types/user-types';
import { TasksComponent } from "./component/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, CommonModule, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  selectedUser: User | undefined = undefined;
  onSelectUser(user: User) {
      this.selectedUser = user;
  }
}
