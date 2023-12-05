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

  public getCourseById(idCourse: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this._urlBase}/courses/${idCourse}`);
  }

  public createCourse(courseToCreate: Course): Observable<Course> {
    return this.httpClient.post<Course>(
      `${this._urlBase}/courses`,
      courseToCreate
    );
  }

  public editCourse(courseToEdit: Course): Observable<Course> {
    return this.httpClient.put<Course>(
      `${this._urlBase}/courses/${courseToEdit.id}`,
      courseToEdit
    );
  }

  public deleteCourse(courseToDelete: Course): Observable<Course> {
    return this.httpClient.delete<Course>(
      `${this._urlBase}/courses/${courseToDelete.id}`
    );
  }
}
