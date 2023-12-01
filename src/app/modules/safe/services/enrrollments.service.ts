import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrrollment } from 'src/app/interfaces/enrrollment.interface';
import { environment } from 'src/environments/environment.local';

@Injectable()
export class EnrrollmentsService {
  private _urlBase: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getEnrrollments(): Observable<Enrrollment[]> {
    return this.httpClient.get<Enrrollment[]>(`${this._urlBase}/enrrollments`);
  }

  public getEnrrollmentsByUserId(idUser: number): Observable<Enrrollment> {
    return this.httpClient.get<Enrrollment>(
      `${this._urlBase}/enrrollments?userId=${idUser}`
    );
  }

  public getEnrrollmentsByCourseId(idCourse: number): Observable<Enrrollment> {
    return this.httpClient.get<Enrrollment>(
      `${this._urlBase}/enrrollments?courseId=${idCourse}`
    );
  }
}
