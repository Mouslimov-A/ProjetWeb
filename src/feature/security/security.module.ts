import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credentials, Token } from './data';



@Module({
  imports: [ TypeOrmModule.forFeature([Credentials, Token])],
})
export class SecurityModule {}
