import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Credentials } from '../../security/data';
import { MessageEntity } from './message.entity';

@Entity({ name: 'conversation' })
export class ConversationEntity {

  @PrimaryGeneratedColumn()
  conversationId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Credentials)
  @JoinColumn({ name: 'idUser1' })
  user1: Credentials;

  @ManyToOne(() => Credentials)
  @JoinColumn({ name: 'idUser2' })
  user2: Credentials;

  @OneToMany(() => MessageEntity, (message) => message.conversation)
  messages: MessageEntity[];
}