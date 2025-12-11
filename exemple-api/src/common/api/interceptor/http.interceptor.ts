import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap(() => console.log('exemple de route que l\'on intercepte'))
  );
};