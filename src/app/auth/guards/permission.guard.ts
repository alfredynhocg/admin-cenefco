import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../application/services/auth.service';

export function permissionGuard(permiso: string): CanActivateFn {
  return () => {
    const auth   = inject(AuthService);
    const router = inject(Router);

    if (auth.hasPermission(permiso)) {
      return true;
    }

    return router.createUrlTree(['/dashboards/cenefco']);
  };
}
