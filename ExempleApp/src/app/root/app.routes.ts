import { Routes } from '@angular/router';
import {dashboardRoutes} from '../feature/dashboard';
import {DashboardGuard} from '../feature/dashboard/dashboard.guard';
import {AppNode} from '../shared/ui/app.node';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  // http://localhost:4200/sign-in
  {
    path: 'public',
    loadChildren: ()=>
      import('../security/security.routes').then(p => p.SecurityRoutes)
  },
  // http://localhost:4200/dashboard
  {
    path: 'dashboard',
    canActivate: [DashboardGuard()],
    loadChildren: ()=>
      import('../feature/dashboard/page').then(p => dashboardRoutes)
  },

  {
    path:'**', loadComponent: ()=>
      import('../shared/ui/page').then(p => p.CommonFallBackPage)
  }
];
