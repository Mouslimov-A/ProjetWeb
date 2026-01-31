import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeEntity } from '../data/like.entity';
import { Repository } from 'typeorm';
import { PublicationEntity } from '../data/publication.entity';
import { Credentials } from '../../security/data';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>,
    @InjectRepository(PublicationEntity)
    private readonly publicationRepository: Repository<PublicationEntity>,
  ) {}

  async addLike(user: Credentials, idPublication: number) {
    const publication = await this.publicationRepository.findOne({
      where: { publicationId: idPublication }
    });

    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }

    const like = new LikeEntity();
    like.credential = user;
    like.publication = publication;

    return await this.likeRepository.save(like);
  }

  async getLikeCount(idPublication: number) {
    const publication = await this.publicationRepository.findOne({
      where: { publicationId: idPublication }
    });

    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }

    const count = await this.likeRepository.count({
      where: { publication: { publicationId: idPublication } }
    });

    return { publicationId: idPublication, likeCount: count };
  }
}