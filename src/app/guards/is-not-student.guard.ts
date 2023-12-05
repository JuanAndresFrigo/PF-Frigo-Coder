import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const isNotStudentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.authUser$.pipe(
    map((user) =>
      user?.rol !== 'STUDENT' ? true : router.createUrlTree(['/safe/courses'])
    )
  );
};
