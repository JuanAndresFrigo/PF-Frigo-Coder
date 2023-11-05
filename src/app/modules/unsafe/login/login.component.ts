import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

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
            alert('Usuario o contrasena invalidos');
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

  private setLocalStorage(users: User[]) {
    const authUser = users[0];
    this._authUser$.next(authUser);
    localStorage.setItem('token', authUser.token);
  }
}
