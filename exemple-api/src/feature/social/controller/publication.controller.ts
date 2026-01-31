import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@common/config';
import { Credentials } from '../../security/data';
import { CreatePublicationPayload } from '../data/payload/create-publication.payload';
import { PublicationService } from '../service/publication.service';

@ApiBearerAuth('access-token')
@ApiTags('Publication Controller')
@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}


  @Post('create')
  async createPublication(@User() user: Credentials, @Body() payload: CreatePublicationPayload) {
    return await this.publicationService.createPublication(user, payload);
  }

  @Get('all')
  async getAllPublication(){
    return this.publicationService.getAllPublication();
  }

  @Delete('delete/:id')
  async deletePublication(@Param('id') id: number, @User() user: Credentials) {
    return await this.publicationService.deletePublication(id, user);
  }

}