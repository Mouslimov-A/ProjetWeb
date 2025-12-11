import { NestFactory } from '@nestjs/core';
import { AppModule } from './feature/main/app.module';
import {
  ConfigKey,
  configManager,
  HttpExceptionFilter,
  swaggerConfiguration,
} from '@common/config';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationException } from './feature/security/data';
import { ApiInterceptor } from '@common/api/api.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix(configManager.getValue(ConfigKey.APP_BASE_URL));
  swaggerConfiguration.config(app);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) =>
        new ValidationException(validationErrors),
    }),
  );
  app.useGlobalInterceptors(new ApiInterceptor());
  await app.listen(configManager.getValue(ConfigKey.APP_PORT) ?? 3000);
}
bootstrap().then();
