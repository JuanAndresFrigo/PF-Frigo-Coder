import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EMPTY } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockSomeService = {
    login: () => EMPTY,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        GenericCardModule,
        ReactiveFormsModule,
        FormErrorsModule,
        MatFormFieldModule,
        MatInputModule,
        ButtonModule,
        MatButtonModule,
      ],
      providers: [{ provide: AuthService, useValue: mockSomeService }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Si el form es inválido, debe marcar todos los campos del form como "touched" ', () => {
    component.loginForm.patchValue({
      email: 'asdfasdfasdf',
      password: '',
    });
    component.login();
    expect(component.loginForm.controls['email'].touched).toBeTrue();
    expect(component.loginForm.controls['password'].touched).toBeTrue();
  });

  it('Si el formulario es válido, debe llamar el metodo login del AuthService', () => {
    component.loginForm.patchValue({
      email: 'fake@mail.com',
      password: '123456',
    });
    spyOn(mockSomeService, 'login').and.returnValue(EMPTY);
    component.login();
    expect(mockSomeService.login).toHaveBeenCalled();
  });
});
