import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@common/config';
import { Credentials } from '../../security/data';
import { ConversationService } from '../service/conversation.service';

@ApiBearerAuth('access-token')
@ApiTags('Conversation Controller')
@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

    @Post('create/:usernameUser2')
    async createConversation(
        @User() user: Credentials,
        @Param('usernameUser2') usernameUser2: string
    ) {
        return await this.conversationService.createConversation(user, usernameUser2);
    }

  @Get('all')
  async getMyConversations(@User() user: Credentials) {
    return await this.conversationService.getMyConversations(user);
  }

  @Get(':idConversation/messages')
  async getMessagesByConversation(@Param('idConversation') id: number) {
    return await this.conversationService.getMessagesByConversation(id);
  }
}