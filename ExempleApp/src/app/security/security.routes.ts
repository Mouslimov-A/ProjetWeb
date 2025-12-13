import {Routes} from '@angular/router';

export const SecurityRoutes: Routes= [
  {
    path: '',
    loadComponent: ()=> import('./router').then (p =>p.SecurityRouter),
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
      {
        path: 'signin',
        loadComponent: ()=> import('./page').then (c =>c.SignInPage)
      },
      {
        path: 'signup',
        loadComponent: ()=> import('./page').then (c =>c.SignUpPage)
      }

    ]
  },
]
