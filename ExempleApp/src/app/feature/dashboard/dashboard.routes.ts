import {Routes} from '@angular/router';

export const DashboardRoutes: Routes= [
  {
    path: '',
    loadComponent: ()=> import('./router').then (p =>p.DashboardRouter),
    children: [
      {
        path: 'home',
        loadComponent: ()=> import('./page').then (p =>p.DashboardHomePage)
      },
      {
        path: 'chat',
        loadChildren: ()=> import('../chat/chat.routes').then (p =>p.chatRoutes)
      }
    ]
  },

  {
    path: '**',
    loadComponent: ()=> import('./page').then (p =>p.DashboardFallbackPage)
  }
]
