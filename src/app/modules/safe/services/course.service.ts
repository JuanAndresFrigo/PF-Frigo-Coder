import { Injectable } from '@angular/core';
import { Course } from '../../../interfaces/course.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseService {
  private _urlBase: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this._urlBase}/courses`);
  }
}
