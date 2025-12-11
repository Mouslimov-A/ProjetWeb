import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';

import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {HttpInterceptor} from '../shared/api';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors( [HttpInterceptor]))
  ],
};
