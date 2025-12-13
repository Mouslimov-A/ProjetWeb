import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {SecurityService} from '../../security/service/security.service';


export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const securityService:  SecurityService = inject(SecurityService);
    const canAccess: boolean = securityService.isAuthenticated$();
    const router: Router = inject(Router);  //nous fesons une DI pour recuperer le systeme de Router
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}
