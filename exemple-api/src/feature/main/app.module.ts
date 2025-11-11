import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configManager } from '@common/config/config.manager';
import { AccountModule } from '../account/account.module';
import { ProfileModule } from '../profile/profile.module';


@Module({
  imports: [TypeOrmModule.forRoot(configManager.getTypeOrmConfig()), AccountModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
