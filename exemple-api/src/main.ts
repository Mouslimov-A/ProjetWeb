import { NestFactory } from '@nestjs/core';
import { AppModule } from './feature/main/app.module';
import { HttpExceptionFilter, swaggerConfiguration } from '@common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());

  swaggerConfiguration.config(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
