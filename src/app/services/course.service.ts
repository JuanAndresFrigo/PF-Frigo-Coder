import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { Observable, of } from 'rxjs';

const mockCourse: Course[] = [
{
  id: 1,
  name: 'curso1',
  classes: [
    {id:1, name:'clase1'},
    {id:2, name:'clase2'},
    {id:3, name:'clase3'},
  ],
  users: [
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
  ]
},
{
  id: 2,
  name: 'curso2',
  classes: [
    {id:1, name:'clase1'},
    {id:2, name:'clase2'},
    {id:3, name:'clase3'},
  ],
  users: [
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
  ]
},
{
  id: 3,
  name: 'curso3',
  classes: [
    {id:1, name:'clase1'},
    {id:2, name:'clase2'},
    {id:3, name:'clase3'},
  ],
  users: [
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
  ]
}
];
@Injectable()
export class CourseService {
  // Este servicio va a servir para obtener un listado de cursos, con las clases y alumnos de cada uno
  constructor() {}

    // Retorna el listado de cursos
    public getCourses(): Observable<Course[]>{
      return of(mockCourse)
    }
}
