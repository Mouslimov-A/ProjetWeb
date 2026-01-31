import {MessageDto} from './message-list.dto';

export interface ConversationWithMessagesDto {
  conversationId: number;
  createdAt: Date;
  updatedAt: Date;
  messages: MessageDto[];
}
