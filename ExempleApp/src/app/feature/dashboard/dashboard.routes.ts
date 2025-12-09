import {Routes} from '@angular/router';

export const dashboardRoutes: Routes= [
  {
    path: '',
    loadComponent: ()=> import('./router').then (p =>p.DashboardRouter),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./page').then (p =>p.DashboardHomePage)
      },
      {
        path: 'member',
         loadChildren: ()=> import('../member').then (p =>p.memberRoutes)
      },
      {
        path: 'product',
        loadChildren: ()=> import('../product').then (p =>p.productRoutes)
      }
    ]
  },

  {
    path: '**',
    loadComponent: ()=> import('./page').then (p =>p.DashboardFallbackPage)
  }
]
