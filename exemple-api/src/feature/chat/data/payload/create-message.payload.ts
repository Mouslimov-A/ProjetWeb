import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMessagePayload {
  @ApiProperty()
  @IsNotEmpty()
  content: string;
}