import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentaireEntity } from '../data/commentaire.entity';
import { Repository } from 'typeorm';
import { PublicationEntity } from '../data/publication.entity';
import { Credentials } from '../../security/data';
import { CreateCommentairePayload } from '../data/payload/create-commentaire.payload';
import { UpdateCommentairePayload } from '../data/payload/update-commentaire.payload';

@Injectable()
export class CommentaireService {
  constructor(
    @InjectRepository(CommentaireEntity)
    private readonly commentaireRepository: Repository<CommentaireEntity>,
    @InjectRepository(PublicationEntity)
    private readonly publicationRepository: Repository<PublicationEntity>,
  ) {}

  async createCommentaire(
    user: Credentials,
    idPublication: number,
    payload: CreateCommentairePayload,
  ) {
    const publication = await this.publicationRepository.findOne({
      where: { publicationId: idPublication }
    });

    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }

    const commentaire = new CommentaireEntity();
    Object.assign(commentaire, payload);
    commentaire.credential = user;
    commentaire.publication = publication;

    return await this.commentaireRepository.save(commentaire);
  }

  async getCommentairesByPublication(idPublication: number) {
    const publication = await this.publicationRepository.findOne({
      where: { publicationId: idPublication }
    });

    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }

    return await this.commentaireRepository.find({
      where: { publication: { publicationId: idPublication } },
      relations: ['credential'],
      select: { credential: { username: true } },
      order: { createdAt: 'DESC' }
    });
  }

  async updateCommentaire(
    idCommentaire: number,
    user: Credentials,
    payload: UpdateCommentairePayload,
  ) {
    const commentaire = await this.commentaireRepository.findOne({
      where: { commentaireId: idCommentaire },
      relations: ['credential']
    });

    if (!commentaire) {
      throw new NotFoundException('Commentaire non trouvé');
    }

    if (commentaire.credential.credential_id !== user.credential_id) {
      throw new ForbiddenException("Vous n'êtes pas autorisé à modifier ce commentaire");
    }

    Object.assign(commentaire, payload);
    return await this.commentaireRepository.save(commentaire);
  }

  async deleteCommentaire(idCommentaire: number, user: Credentials) {
    const commentaire = await this.commentaireRepository.findOne({
      where: { commentaireId: idCommentaire },
      relations: ['credential']
    });

    if (!commentaire) {
      throw new NotFoundException('Commentaire non trouvé');
    }

    if (commentaire.credential.credential_id !== user.credential_id) {
      throw new ForbiddenException("Vous n'êtes pas autorisé à supprimer ce commentaire");
    }

    return await this.commentaireRepository.remove(commentaire);
  }
}