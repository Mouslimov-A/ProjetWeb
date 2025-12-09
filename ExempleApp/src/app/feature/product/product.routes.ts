import {Route} from '@angular/router';

export const productRoutes: Route[] = [
  {
    path: '',
    loadComponent:()=>import('./page').then(p =>p.ProductHomePage)
  }
]
