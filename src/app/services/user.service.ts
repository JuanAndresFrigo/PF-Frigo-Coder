import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'nombre1',
    surname: 'apellido1',
    docNumber: '12345678',
    email: 'email1@mail.com',
    rol: { id: 100, rolDescription: 'adm' },
  },
  {
    id: 2,
    name: 'nombre2',
    surname: 'apellido2',
    docNumber: '12345678',
    email: 'email2@mail.com',
    rol: { id: 200, rolDescription: 'user' },
  },
  {
    id: 3,
    name: 'nombre3',
    surname: 'apellido3',
    docNumber: '12345678',
    email: 'email3@mail.com',
    rol: { id: 200, rolDescription: 'user' },
  },
];

@Injectable()
export class UserService {
  // Este servicio va a ser utilizado para obtener los alumnos
  constructor() {}

  // Retorna el listado de alumnos
  public getUsers(): Observable<User[]>{
    return of(mockUsers)
  }
}
