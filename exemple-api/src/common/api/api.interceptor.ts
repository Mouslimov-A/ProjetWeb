import { ApiCodeResponse } from '@common/api/data';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { ConfigKey, configManager } from '@common/config';
import { Observable, map } from 'rxjs';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class ApiInterceptor implements NestInterceptor {

  private readonly logger = new Logger(ApiInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const path = ctx.getRequest().route.path;
    return next
      .handle()
      .pipe(
        map((response: any) => {
          return {code: this.map(path), data: response, result: true}
        })
      );
  }

  map(path: String): ApiCodeResponse {
    this.logger.log(`path ${path}`);

    const part = path
      .replace(configManager.getValue(ConfigKey.APP_BASE_URL), '')
      .split('/')
      .filter(s => s.length > 0)
      .slice(0, 2)
      .map(s => s.toUpperCase().replace('-', '_'));
    console.log(`${part.join('_')}_SUCCESS`);
    const code = ApiCodeResponse[`${part.join('_')}_SUCCESS` as keyof typeof ApiCodeResponse];
    return isNil(code) ? ApiCodeResponse.COMMON_SUCCESS : code;

  }

}