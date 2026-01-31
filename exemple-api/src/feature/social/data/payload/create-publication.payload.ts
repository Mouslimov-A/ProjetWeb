import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePublicationPayload {

  @ApiProperty()
  @IsNotEmpty()
  content: string;
}