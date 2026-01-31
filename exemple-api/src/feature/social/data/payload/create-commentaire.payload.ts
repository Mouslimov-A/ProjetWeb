import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentairePayload {
  @ApiProperty()
  @IsNotEmpty()
  content: string;
}