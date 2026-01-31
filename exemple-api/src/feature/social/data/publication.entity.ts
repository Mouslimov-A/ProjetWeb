import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credentials } from '../../security/data';
import { CommentaireEntity } from './commentaire.entity';
import { LikeEntity } from './like.entity';

@Entity({ name: 'publication'})
export class PublicationEntity  {

  @PrimaryGeneratedColumn()
  publicationId: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;


  @ManyToOne(() => Credentials, (credential) => credential.publications)
  @JoinColumn({ name: 'idCredential' })
  credential: Credentials;

  @OneToMany(() => CommentaireEntity, (commentaire) => commentaire.publication)
  commentaires: CommentaireEntity[];

  @OneToMany(() => LikeEntity, (like) => like.publication)
  likes: LikeEntity[];
}