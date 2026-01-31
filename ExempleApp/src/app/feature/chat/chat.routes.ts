import {Route} from '@angular/router';

export const chatRoutes: Route[] = [
  {
    path: '',
    loadComponent:()=>import('./page').then(p =>p.ConversationListPageComponent)
  },
  {
    path: 'conversation/:conversationId',
    loadComponent:()=>import('./page').then(p =>p.ConversationDetailComponent)
  },
]
