import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User, UserRole } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

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
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      docNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
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
            alert('Ocurrió un error');
            return;
          }
          this.setLocalStorage(response);
          this.router.navigate(['/safe']);
        },
        error: (err) => {
          alert('Error de conexion');
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
