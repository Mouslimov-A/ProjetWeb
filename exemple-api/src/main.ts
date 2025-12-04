import { NestFactory } from '@nestjs/core';
import { AppModule } from './feature/main/app.module';
import { HttpExceptionFilter, swaggerConfiguration } from '@common/config';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationException } from './feature/security/data';
import { ApiInterceptor } from '@common/api/api.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  swaggerConfiguration.config(app);
  app.useGlobalPipes(new ValidationPipe({ exceptionFactory: (validationErrors: ValidationError[] = []) => new ValidationException(validationErrors) }));
  app.useGlobalInterceptors(new ApiInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
