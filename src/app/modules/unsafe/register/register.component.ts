import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User, UserRole } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { onlyNumbersValidator } from 'src/app/utils/only-number-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm: FormGroup;
  private _authUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        docNumber: [
          '',
          [
            Validators.required,
            Validators.maxLength(8),
            onlyNumbersValidator(),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validators: (control) => {
          if (control.value.password !== control.value.repeatPassword) {
            control.get('repeatPassword')?.setErrors({ notSame: true });
          }
          return null;
        },
      }
    );
  }

  private genetareRandomString(): string {
    return (Math.random() + 1).toString(36).substring(6);
  }

  public register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    } else {
      const { name, surname, docNumber, email, password } =
        this.registerForm.getRawValue();

      const userToRegister: User = {
        name,
        surname,
        docNumber,
        email,
        password,
        token: this.genetareRandomString(),
        rol: UserRole.User,
      };

      this.authService.registerUser(userToRegister).subscribe({
        next: (response) => {
          if (!response) {
            Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error',
              icon: 'error',
            });
            return;
          }
          this.setLocalStorage(response);
          this.router.navigate(['/safe']);
        },
        error: (err) => {
          Swal.fire({
            title: 'Error',
            text: 'Error de conexion',
            icon: 'error',
          });
        },
      });
    }
  }

  private setLocalStorage(users: User) {
    const authUser = users;
    this._authUser$.next(authUser);
    localStorage.setItem('token', authUser.token);
  }

  public goToLogin() {
    this.router.navigate(['unsafe/login']);
  }
}
