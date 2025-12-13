import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credentials } from './credentials.entity';

@Entity()
export class Token {
  @PrimaryGeneratedColumn("uuid")
  token_id: string;

  @Column({ nullable: false })
  token: string;
  @Column({ nullable: false })
  refreshToken: string;
  @OneToOne(() => Credentials, { eager: true })
  @JoinColumn({ name: 'credential_id' })
  credential: Credentials;
}