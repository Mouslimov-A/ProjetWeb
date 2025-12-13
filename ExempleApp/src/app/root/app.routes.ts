import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'public',
    loadChildren: ()=>
      import('../security/security.routes').then(r => r.SecurityRoutes)
  },
  {
    path: 'dashboard',
    loadChildren: ()=>
      import('../feature/dashboard/').then(r => r.DashboardRoutes)
  },

  {
    path:'**', loadComponent: ()=>
      import('../shared/ui/page').then(p => p.CommonFallBackPage)
  }
];
