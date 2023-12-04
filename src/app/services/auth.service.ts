import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../interfaces/login-payload.interface';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/auth.actions';
import { selectAuthUser } from '../store/auth/auth.selectors';

@Injectable()
export class AuthService {
  private _urlBase: string = environment.baseUrl;
  public authUser$ = this.store.select(selectAuthUser);

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  public login(payload: LoginPayload): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${this._urlBase}/users?email=${payload.email}&password=${payload.password}`
    );
  }

  public verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${this._urlBase}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            this.setLocalStorage(users);
            return true;
          }
        })
      );
  }

  private setLocalStorage(users: User[]) {
    const authUser = users[0];
    this.store.dispatch(AuthActions.setAuthUser({ data: authUser }));
    localStorage.setItem('token', authUser.token);
  }

  public logout(): void {

    this.store.dispatch(AuthActions.resetState());
    localStorage.removeItem('token');
    this.router.navigate(['/unsafe']);
  }

  public registerUser(userToRegister: User): Observable<User> {
    return this.httpClient.post<User>(`${this._urlBase}/users`, userToRegister);
  }
}
