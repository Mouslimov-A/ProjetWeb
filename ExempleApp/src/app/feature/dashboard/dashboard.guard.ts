import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';


export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const canAccess: boolean = true;

    const router: Router = inject(Router);
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}
