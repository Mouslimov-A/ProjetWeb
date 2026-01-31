import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from '../data/message.entity';
import { Repository } from 'typeorm';
import { ConversationEntity } from '../data/conversation.entity';
import { Credentials } from '../../security/data';
import { CreateMessagePayload } from '../data/payload/create-message.payload';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
    @InjectRepository(ConversationEntity)
    private readonly conversationRepository: Repository<ConversationEntity>,
  ) {}

  async sendMessage(
    user: Credentials,
    idConversation: number,
    payload: CreateMessagePayload
  ) {
    const conversation = await this.conversationRepository.findOne({
      where: { conversationId: idConversation },
      relations: ['user1', 'user2']
    });

    if (!conversation) {
      throw new NotFoundException('Conversation non trouvée');
    }

    // Vérifier que l'utilisateur fait partie de la conversation
    if (
      conversation.user1.credential_id !== user.credential_id &&
      conversation.user2.credential_id !== user.credential_id
    ) {
      throw new ForbiddenException('Vous ne faites pas partie de cette conversation');
    }

    const message = new MessageEntity();
    Object.assign(message, payload);
    message.sender = user;
    message.conversation = conversation;

    // Mettre à jour la date de la conversation
    conversation.updatedAt = new Date();
    await this.conversationRepository.save(conversation);

    return await this.messageRepository.save(message);
  }
}