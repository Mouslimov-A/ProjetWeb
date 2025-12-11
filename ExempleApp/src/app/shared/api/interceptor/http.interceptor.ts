import { tap } from 'rxjs';
import {HttpInterceptorFn} from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap(() => console.log('exemple de route que l\'on intercepte',req))
  );
};
