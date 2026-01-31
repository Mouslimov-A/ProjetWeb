import { PublicationEntity } from './publication.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credentials } from '../../security/data';

@Entity({ name: 'like' })
export class LikeEntity {

  @PrimaryGeneratedColumn()
  likeId: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Credentials, (credential) => credential.likes)
  @JoinColumn({ name: 'idCredential' })
  credential: Credentials;

  @ManyToOne(() => PublicationEntity, (publication) => publication.likes)
  @JoinColumn({ name: 'idPublication' })
  publication: PublicationEntity;


}