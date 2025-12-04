import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configManager } from '@common/config/config.manager';
import { AccountModule } from '../account/account.module';
import { ProfileModule } from '../profile/profile.module';
import { SecurityModule } from '../security';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from '../security/jwt/jwt.guard';


@Module({
  imports: [SecurityModule, TypeOrmModule.forRoot(configManager.getTypeOrmConfig()), AccountModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtGuard }],

})
export class AppModule {}
