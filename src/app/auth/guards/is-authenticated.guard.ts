import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);

  if (authService.authStatus() == AuthStatus.authenticated) {
    return true;
  }

  router.navigateByUrl('/auth/login');

  return false;
};
