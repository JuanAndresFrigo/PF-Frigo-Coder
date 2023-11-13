import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take, tap } from 'rxjs/operators';
import { User, UserRole } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/modules/safe/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FullnamePipe } from 'src/app/pipes/fullname/fullname.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService, FullnamePipe],
})
export class UsersComponent {
  public userList$?: Observable<User[]>;

  public userColumns: string[] = [
    'id',
    'name',
    'docNumber',
    'email',
    'actions',
  ];

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private fullnamePipe: FullnamePipe
  ) {
    this.getUsers();
  }

  private getUsers(): void {
    this.userList$ = this.userService.getUsers().pipe(take(1));
  }

  public openUsersDialog() {
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (newUser: User) => {
          if (!newUser) return;
          const { name, surname, docNumber, email, password, rol } = newUser;

          const userToCreate: User = {
            name,
            surname,
            docNumber,
            email,
            password,
            token: this.genetareRandomString(),
            rol,
          };

          this.userService
            .createUser(userToCreate)
            .pipe(
              take(1),
              tap(() => this.getUsers())
            )
            .subscribe();
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
          if (!editedUser) return;
          const { name, surname, docNumber, email, password } = editedUser;

          const userEdited: User = {
            id: userToEdit.id,
            name,
            surname,
            docNumber,
            email,
            password,
            token: this.genetareRandomString(),
            rol: UserRole.User,
          };

          this.userService
            .editUser(userEdited)
            .pipe(
              take(1),
              tap(() => this.getUsers())
            )
            .subscribe();
        },
      });
  }

  public onDeleteUserClick(userToDelete: User) {
    const userFullname: string = this.fullnamePipe.transform(userToDelete);
    const message: string = `¿Esta seguro que quiere borrar a ${userFullname}?`;

    if (confirm(message)) {
      this.userService
        .deleteUser(userToDelete)
        .pipe(
          take(1),
          tap(() => this.getUsers())
        )
        .subscribe();
    }
  }

  private genetareRandomString(): string {
    return (Math.random() + 1).toString(36).substring(6);
  }
}
