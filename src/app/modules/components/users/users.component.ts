import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FullnamePipe } from 'src/app/pipes/fullname/fullname.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService, FullnamePipe],
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

  constructor(private userService: UserService, private matDialog: MatDialog, private fullnamePipe:FullnamePipe) {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService
      .getUsers()
      .pipe(take(1))
      .subscribe((users: User[]) => (this.userList = users));
  }

  public openUsersDialog() {
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (newUser: User) => {
          if (newUser) {
            this.userList = [
              ...this.userList,
              {
                ...newUser,
                id: 5,
              },
            ];
          }
        },
      });
  }

  public onEditUserClick(userToEdit: User) {
    this.matDialog
      .open(UserDialogComponent, {
        data: userToEdit,
      })
      .afterClosed()
      .subscribe({
        next: (editedUser: User) => {
          if (editedUser) {
            this.userList = this.userList.map((user: User) =>
              user.id === userToEdit.id ? { ...user, ...editedUser } : user
            );
          }
        },
      });
  }

  public onDeleteUserClick(userToDelete: User) {
    const userFullname:string = this.fullnamePipe.transform(userToDelete)
    const message:string = `¿Esta seguro que quiere borrar a ${userFullname}?`

    if (confirm(message)) {
      this.userList = this.userList.filter((u) => u.id !== userToDelete.id);
    }
  }
}
