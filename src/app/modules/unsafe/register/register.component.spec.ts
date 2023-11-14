import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
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

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockSomeService = {
    registerUser: () => EMPTY
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Si el form es inválido, debe marcar todos los campos del form como "touched" ', () => {
    component.registerForm.patchValue({
      name: '',
      surname: '',
      docNumber: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
    component.register();
    expect(component.registerForm.controls['name'].touched).toBeTrue();
    expect(component.registerForm.controls['surname'].touched).toBeTrue();
    expect(component.registerForm.controls['docNumber'].touched).toBeTrue();
    expect(component.registerForm.controls['email'].touched).toBeTrue();
    expect(component.registerForm.controls['password'].touched).toBeTrue();
    expect(
      component.registerForm.controls['repeatPassword'].touched
    ).toBeTrue();
  });

  it('Si el formulario es válido, debe llamar el metodo registerUser del AuthService', () => {

    component.registerForm.patchValue({
      name: 'juan',
      surname: 'frigo',
      docNumber: '112233',
      email: 'juantest@mail.com',
      password: '1234',
      repeatPassword: '1234',
    });

    spyOn(mockSomeService, 'registerUser').and.returnValue(EMPTY);

    component.register();

    expect(mockSomeService.registerUser).toHaveBeenCalled();
  });
});
