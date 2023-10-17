import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService],
})
export class UsersComponent {
  public userList: User[] = [];
  public userColumns: string[] = ['id', 'name', 'docNumber', 'email'];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService
      .getUsers()
      .pipe(take(1))
      .subscribe((users: User[]) => (this.userList = users));
  }
}
