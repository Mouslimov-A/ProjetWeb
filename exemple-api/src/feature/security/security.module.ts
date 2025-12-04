import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenService } from './jwt/token.service';
import { ConfigKey, configManager } from '@common/config';
import { JwtModule } from '@nestjs/jwt';
import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';
import { Credentials, Token } from './data';
import { JwtGuard } from './jwt/jwt.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
      signOptions: { expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN) },
    } as any),
    TypeOrmModule.forFeature([Credentials, Token])
  ],
  providers: [TokenService, SecurityService, JwtGuard],
  controllers: [SecurityController],
  exports: [SecurityService, JwtGuard],
})
export class SecurityModule {

}