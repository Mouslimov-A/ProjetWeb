import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, MaxLength } from 'class-validator';

export class SignInPayload {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(8)// USERNAME_IS_NOT_EMPTY
  username: string;
  @IsNotEmpty()     // PASSWORD_IS_NOT_EMPTY
  @ApiProperty()
  password: string;
}