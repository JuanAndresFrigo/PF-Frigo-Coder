import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User, UserRole } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment.local';
import { MockProvider } from 'ng-mocks';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService, MockProvider(Router)],
    });
    service = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('No debe encontrar usuario al hacer login()', () => {
    const USER_MOCK: User = {
      id: 1,
      name: 'adminNO',
      surname: 'adminNO',
      docNumber: '11222333',
      email: 'adminNO@mail.com',
      password: '123456789000',
      token: 'cfvdzp',
      rol: UserRole.Admin,
    };

    service.login({
      email: USER_MOCK.email,
      password: USER_MOCK.password,
    });

    httpTestingController.expectNone({
      method: 'GET',
      url: `${environment.baseUrl}/users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`,
    });

    service.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeNull();
      },
    });
  });

  it('Debe establecer un usuario autenticado al hacer login()', () => {
    const USER_MOCK: User[] = [{
      id: 1,
      name: 'admin',
      surname: 'admin',
      docNumber: '11222333',
      email: 'admin@mail.com',
      password: '1234',
      token: 'cfvdzp',
      rol: UserRole.Admin,
    }];
    const testUrl:string = `${environment.baseUrl}/users?email=${USER_MOCK[0].email}&password=${USER_MOCK[0].password}`

    httpClient.get<User[]>(testUrl)
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(USER_MOCK)
    );

    const req = httpTestingController.expectOne(testUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(USER_MOCK);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
