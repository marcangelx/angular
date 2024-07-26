import { Component, computed, input, output, signal } from '@angular/core';
import { User } from '../../shared/types/user-types';
import { getFullName } from '../../shared/util/user-util';

@Component({
  selector: 'app-user-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './user-thumbnail.component.html',
  styleUrl: './user-thumbnail.component.css'
})
export class UserThumbnailComponent {
  userDetail = input.required<User>();
  fullName = computed(() => getFullName(this.userDetail()));
  onSelectedUser = output<User>();
  selected = input.required<boolean>();

  onSelect() {
    this.onSelectedUser.emit(this.userDetail());
  }
}
