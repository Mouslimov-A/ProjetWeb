import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationController } from './controller/conversation.controller';
import { MessageController } from './controller/message.controller';
import { ConversationService } from './service/conversation.service';
import { MessageService } from './service/message.service';
import { ConversationEntity } from './data/conversation.entity';
import { MessageEntity } from './data/message.entity';
import { Credentials } from '../security/data';

@Module({
  imports: [TypeOrmModule.forFeature([ConversationEntity, MessageEntity, Credentials])],
  controllers: [ConversationController, MessageController],
  providers: [ConversationService, MessageService]
})
export class ChatModule {

}