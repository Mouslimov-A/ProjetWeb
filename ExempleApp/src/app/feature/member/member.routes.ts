import {Route} from '@angular/router';

export const memberRoutes: Route[] = [
  {
    path: '',
    loadComponent:()=>import('./page').then(p =>p.MemberHomePage)
  },
  {
    path: 'detail/:id',
    loadComponent:()=>import('./page').then(p =>p.MemberDetailPage)
  }
]
