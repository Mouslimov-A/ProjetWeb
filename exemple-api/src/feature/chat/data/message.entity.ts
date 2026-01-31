import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credentials } from '../../security/data';
import { ConversationEntity } from './conversation.entity';

@Entity({ name: 'message' })
export class MessageEntity {

  @PrimaryGeneratedColumn()
  messageId: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Credentials)
  @JoinColumn({ name: 'idSender' })
  sender: Credentials;

  @ManyToOne(() => ConversationEntity, (conversation) => conversation.messages)
  @JoinColumn({ name: 'idConversation' })
  conversation: ConversationEntity;
}