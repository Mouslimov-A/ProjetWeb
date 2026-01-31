import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentaireEntity } from './data/commentaire.entity';
import { PublicationEntity } from './data/publication.entity';
import { PublicationController } from './controller/publication.controller';
import { PublicationService } from './service/publication.service';
import { CommentaireController } from './controller/commentaire.controller';
import { CommentaireService } from './service/commentaire.service';
import { LikeController } from './controller/like.controller';
import { LikeService } from './service/like.service';
import { LikeEntity } from './data/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentaireEntity, PublicationEntity, LikeEntity])],
  controllers: [PublicationController, CommentaireController, LikeController],
  providers: [PublicationService, CommentaireService, LikeService]
})
export class SocialModule {

}