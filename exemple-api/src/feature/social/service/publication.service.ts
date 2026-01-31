import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicationEntity } from '../data/publication.entity';
import { Repository } from 'typeorm';
import { Credentials } from '../../security/data';
import { CreatePublicationPayload } from '../data/payload/create-publication.payload';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(PublicationEntity)
    private readonly publicationRepository: Repository<PublicationEntity>,
  ) {}

  async createPublication(
    user: Credentials,
    payload: CreatePublicationPayload,
  ) {
    const publication = new PublicationEntity();
    // publication.content = payload.content;
    Object.assign(publication, payload);

    publication.credential = user;

    return await this.publicationRepository.save(publication);
  }

  async getAllPublication() {
    const publications = await this.publicationRepository.find({
      relations: ['credential', 'likes'],
      select: { credential: { username: true } }
    });

    return publications.map(pub => ({
      publicationId: pub.publicationId,
      content: pub.content,
      createdAt: pub.createdAt,
      username: pub.credential.username,
      likeCount: pub.likes?.length || 0
    }));
  }


  async deletePublication(idPublication: number, user: Credentials) {

    const publication = await this.publicationRepository.findOne({
      where: { publicationId: idPublication },
      relations: ['credential']
    });

    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }

    if (publication.credential.credential_id !== user.credential_id) {
      throw new ForbiddenException("Vous n'êtes pas autorisé à supprimer cette publication");
    }

    return await this.publicationRepository.remove(publication);
  }


}