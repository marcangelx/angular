import { Component, output, signal } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserThumbnailComponent } from '../user-thumbnail/user-thumbnail.component';
import { User } from '../../shared/types/user-types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserThumbnailComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  constructor(private userService: UserService) { }
  users = signal<User[]>([]);
  selectedUser = output<User>();
  currentUserId = signal<string>("");

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next : (data) => {
        this.users.set((data as any).results);
      },
      complete: () => {

      },
      error: (err) => {
        console.log(err);
      }
    }
    );
  }
  onSelectUser(user: User) {
    this.selectedUser.emit(user);
    this.currentUserId.set(user.login.uuid);
  }
}

