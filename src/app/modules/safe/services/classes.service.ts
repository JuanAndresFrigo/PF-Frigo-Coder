import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseClass } from 'src/app/interfaces/course.interface';
import { environment } from 'src/environments/environment.local';

@Injectable()
export class ClassesService {
  private _urlBase: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getClasses(): Observable<CourseClass[]> {
    return this.httpClient.get<CourseClass[]>(`${this._urlBase}/classes`);
  }

  public getClassesById(idClass:number): Observable<CourseClass[]> {
    return this.httpClient.get<CourseClass[]>(`${this._urlBase}/classes/${idClass}`);
  }
}
