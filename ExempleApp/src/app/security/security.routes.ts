import {Routes} from '@angular/router';

export const SecurityRoutes: Routes= [
  {
    path: '',
    loadComponent: ()=> import('./router').then (p =>p.SecurityRouter),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./page').then (p =>p.SignInPage)
      }
    ]
  },


]
