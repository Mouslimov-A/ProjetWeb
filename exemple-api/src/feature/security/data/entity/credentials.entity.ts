import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { PublicationEntity } from '../../../social/data/publication.entity';
import { CommentaireEntity } from '../../../social/data/commentaire.entity';
import { LikeEntity } from '../../../social/data/like.entity';

@Entity()
export class Credentials {

  @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` })
  credential_id: string;

  @Column({nullable: false, unique: true})
  username: string;

  @Column({nullable: true})
  password: string;

  @Column({nullable: false, unique: true})
  mail: string;

  @Column({default:false})
  isAdmin:boolean;

  @CreateDateColumn()
  created: Date;

  @CreateDateColumn()
  updated: Date;

  @OneToMany(() => PublicationEntity, (publication) => publication.credential)
  publications: PublicationEntity[];

  @OneToMany(() => CommentaireEntity, (commentaire) => commentaire.credential)
  commentaires: CommentaireEntity[];

  @OneToMany(() => LikeEntity, (like) => like.credential)
  likes: LikeEntity[];
}