import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configManager } from '@common/config/config.manager';

import { SecurityModule } from '../security';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from '../security/jwt/jwt.guard';
import {SocialModule} from "../social/social.module";
import {ChatModule} from "../chat/chat.module";


@Module({
  imports: [SecurityModule, SocialModule, ChatModule, TypeOrmModule.forRoot(configManager.getTypeOrmConfig())],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtGuard }],

})
export class AppModule {}
