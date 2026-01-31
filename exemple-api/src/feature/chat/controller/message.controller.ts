import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { User } from '@common/config';
import { Credentials } from '../../security/data';
import { CreateMessagePayload } from '../data/payload/create-message.payload';
import { MessageService } from '../service/message.service';

@ApiBearerAuth('access-token')
@ApiTags('Message Controller')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send/:idConversation')
  async sendMessage(
    @User() user: Credentials,
    @Param('idConversation') idConversation: number,
    @Body() payload: CreateMessagePayload
  ) {
    return await this.messageService.sendMessage(user, idConversation, payload);
  }
}