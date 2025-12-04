import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty } from 'class-validator';

export class SignInPayload {
  @ApiProperty()
  @IsNotEmpty()     // USERNAME_IS_NOT_EMPTY
  username: string;
  @IsNotEmpty()     // PASSWORD_IS_NOT_EMPTY
  @ApiProperty()
  password: string;
}