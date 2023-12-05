import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable()
export class UserService {
  private _urlBase: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this._urlBase}/users`);
  }

  public getUsersStudents(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this._urlBase}/users?rol=STUDENT`);
  }

  public getUsersById(idUser: number): Observable<User> {
    return this.httpClient.get<User>(`${this._urlBase}/users/${idUser}`);
  }

  public createUser(userToCreate: User): Observable<User> {
    return this.httpClient.post<User>(`${this._urlBase}/users`, userToCreate);
  }

  public editUser(userToEdit: User): Observable<User> {
    return this.httpClient.put<User>(`${this._urlBase}/users/${userToEdit.id}`, userToEdit);
  }

  public deleteUser(userToDelete: User): Observable<User> {
    return this.httpClient.delete<User>(`${this._urlBase}/users/${userToDelete.id}`);
  }
}
