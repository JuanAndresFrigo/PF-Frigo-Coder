import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../interfaces/login-payload.interface';

@Injectable()
export class AuthService {
  private _urlBase: string = environment.baseUrl;
  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

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
    this._authUser$.next(authUser);
    localStorage.setItem('token', authUser.token);
  }

  public logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/unsafe']);
  }
}
