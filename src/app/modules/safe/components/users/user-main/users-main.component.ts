import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/modules/safe/services/user.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { FullnamePipe } from 'src/app/pipes/fullname/fullname.pipe';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.scss'],
  providers: [UserService, FullnamePipe, AuthService],
})
export class UsersMainComponent {
  public userList$?: Observable<User[]>;
  public loggedUserRol: string = '';

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
    private fullnamePipe: FullnamePipe,
    private router: Router,
    private authService: AuthService
  ) {
    authService.authUser$
      .pipe(take(1))
      .subscribe((res: any) => (this.loggedUserRol = res.rol));
    this.getUsers();
  }

  private getUsers(): void {
    console.log(this.loggedUserRol);

    this.userList$ =
      this.loggedUserRol === 'USER'
        ? this.userService.getUsersStudents().pipe(take(1))
        : this.userService.getUsers().pipe(take(1));
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

  public onInfoUserClick(userToInfo: User) {
    // Hay que navegar al detalle
    this.router.navigate(['safe/users/detail', userToInfo.id]);
  }

  public onEditUserClick(userToEdit: User): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: userToEdit,
      })
      .afterClosed()
      .subscribe({
        next: (editedUser: User) => {
          if (!editedUser) return;
          const { name, surname, docNumber, email, password, rol } = editedUser;

          const userEdited: User = {
            id: userToEdit.id,
            name,
            surname,
            docNumber,
            email,
            password,
            token: this.genetareRandomString(),
            rol,
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

  public onDeleteUserClick(userToDelete: User): void {
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
