import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService],
})
export class UsersComponent {
  public userList: User[] = [];
  public userColumns: string[] = [
    'id',
    'name',
    'docNumber',
    'email',
    'actions',
  ];

  constructor(private userService: UserService, private matDialog: MatDialog) {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService
      .getUsers()
      .pipe(take(1))
      .subscribe((users: User[]) => (this.userList = users));
  }

  public openUsersDialog(){   
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: () => {
        },
      });
  }
}
