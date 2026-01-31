import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConversationEntity } from '../data/conversation.entity';
import { Repository } from 'typeorm';
import { Credentials } from '../../security/data';

@Injectable()
export class ConversationService {
  constructor(
    @InjectRepository(ConversationEntity)
    private readonly conversationRepository: Repository<ConversationEntity>,
    @InjectRepository(Credentials)
    private readonly credentialsRepository: Repository<Credentials>,
  ) {}

  async createConversation(user: Credentials, username: string) {
    const user2 = await this.credentialsRepository.findOne({
      where: { username }
    });

    if (!user2) {
      throw new NotFoundException('Utilisateur non trouvÃ©');
    }

    const conversation = new ConversationEntity();
    conversation.user1 = user;
    conversation.user2 = user2;

    return await this.conversationRepository.save(conversation);
  }

  async getMyConversations(user: Credentials) {
    return await this.conversationRepository.find({
      where: [
        { user1: { credential_id: user.credential_id } },
        { user2: { credential_id: user.credential_id } }
      ],
      relations: ['user1', 'user2'],
      select: {
        user1: { credential_id: true, username: true },
        user2: { credential_id: true, username: true }
      },
      order: { updatedAt: 'DESC' }
    });
  }

  async getMessagesByConversation(conversationId: number) {
    const conversation = await this.conversationRepository.findOne({
      where: { conversationId }
    });

    if (!conversation) {
      throw new NotFoundException('Conversation non trouvée');
    }

    return await this.conversationRepository.findOne({
      where: { conversationId },
      relations: ['messages', 'messages.sender'],
      select: {
        messages: {
          messageId: true,
          content: true,
          createdAt: true,
          sender: { credential_id: true, username: true }
        }
      },
      order: {
        messages: { createdAt: 'ASC' }
      }
    });
  }
}