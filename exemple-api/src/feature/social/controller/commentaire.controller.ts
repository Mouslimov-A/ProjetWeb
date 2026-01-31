import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@common/config';
import { Credentials } from '../../security/data';
import { CommentaireService } from '../service/commentaire.service';
import { CreateCommentairePayload } from '../data/payload/create-commentaire.payload';
import { UpdateCommentairePayload } from '../data/payload/update-commentaire.payload';

@ApiBearerAuth('access-token')
@ApiTags('Commentaire Controller')
@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Post('create/:idPublication')
  async createCommentaire(
    @User() user: Credentials,
    @Param('idPublication') idPublication: number,
    @Body() payload: CreateCommentairePayload
  ) {
    return await this.commentaireService.createCommentaire(user, idPublication, payload);
  }

  @Get('publication/:idPublication')
  async getCommentairesByPublication(@Param('idPublication') idPublication: number) {
    return await this.commentaireService.getCommentairesByPublication(idPublication);
  }

  @Put('update/:id')
  async updateCommentaire(
    @Param('id') id: number,
    @User() user: Credentials,
    @Body() payload: UpdateCommentairePayload
  ) {
    return await this.commentaireService.updateCommentaire(id, user, payload);
  }

  @Delete('delete/:id')
  async deleteCommentaire(@Param('id') id: number, @User() user: Credentials) {
    return await this.commentaireService.deleteCommentaire(id, user);
  }
}