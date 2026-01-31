import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credentials } from '../../security/data';
import { PublicationEntity } from './publication.entity';

@Entity({ name: 'commentaire'})
export class CommentaireEntity  {

  @PrimaryGeneratedColumn()
  commentaireId: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Credentials, (credential) => credential.commentaires)
  @JoinColumn({ name: 'idCredential' })
  credential: Credentials;

  @ManyToOne(() => PublicationEntity, (publication) => publication.commentaires)
  @JoinColumn({ name: 'idPublication' })
  publication: PublicationEntity;

}