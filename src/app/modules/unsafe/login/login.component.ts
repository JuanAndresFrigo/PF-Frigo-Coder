import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;
  private _authUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: (response) => {
          if (!response.length) {
            Swal.fire({
              title: 'Error',
              text: 'Usuario o contrasena invalidos',
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
            text: 'Error de conexión',
            icon: 'error',
          });
        },
      });
    }
  }

  private setLocalStorage(users: User[]) {
    const authUser = users[0];
    this._authUser$.next(authUser);
    localStorage.setItem('token', authUser.token);
  }

  public goToRegister(){
    this.router.navigate(['unsafe/register']);
  }
}
