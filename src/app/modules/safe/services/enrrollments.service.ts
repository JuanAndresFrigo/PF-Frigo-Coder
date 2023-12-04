import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import {
  CreateEnrollmentPayload,
  Enrrollment,
} from 'src/app/interfaces/enrrollment.interface';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment.local';

@Injectable()
export class EnrrollmentsService {
  private _urlBase: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getEnrrollments(): Observable<Enrrollment[]> {
    return this.httpClient.get<Enrrollment[]>(
      `${this._urlBase}/enrrollments?_expand=course&_expand=user`
    );
  }

  public getEnrrollmentsByUserId(idUser: number): Observable<Enrrollment[]> {
    return this.httpClient.get<Enrrollment[]>(
      `${this._urlBase}/enrrollments?userId=${idUser}&_expand=course&_expand=user`
    );
  }

  public getEnrrollmentsByCourseId(idCourse: number): Observable<Enrrollment[]> {
    return this.httpClient.get<Enrrollment[]>(
      `${this._urlBase}/enrrollments?courseId=${idCourse}`
    );
  }

  public getEnrollmentDialogOptions(): Observable<{
    courses: Course[];
    students: User[];
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<User[]>(`${environment.baseUrl}/users?rol=STUDENT`),
    ]).pipe(
      map(([courses, students]) => {
        return {
          courses,
          students,
        };
      })
    );
  }

  public createEnrollment(
    payload: CreateEnrollmentPayload
  ): Observable<Enrrollment> {
    return this.httpClient.post<Enrrollment>(
      `${environment.baseUrl}/enrrollments`,
      payload
    );
  }

  public editEnrollment(
    enrrollmentToEdit: Enrrollment
  ): Observable<Enrrollment> {
    return this.httpClient.put<Enrrollment>(
      `${environment.baseUrl}/enrrollments/${enrrollmentToEdit.id}`,
      enrrollmentToEdit
    );
  }

  public deleteEnrollment(
    enrrollmentToDelete: Enrrollment
  ): Observable<Enrrollment> {
    return this.httpClient.delete<Enrrollment>(
      `${environment.baseUrl}/enrrollments/${enrrollmentToDelete.id}`
    );
  }
}
