import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@common/config';
import { Credentials } from '../../security/data';
import { LikeService } from '../service/like.service';

@ApiBearerAuth('access-token')
@ApiTags('Like Controller')
@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post('add/:idPublication')
  async addLike(
    @User() user: Credentials,
    @Param('idPublication') idPublication: number
  ) {
    return await this.likeService.addLike(user, idPublication);
  }

  @Get('count/:idPublication')
  async getLikeCount(@Param('idPublication') idPublication: number) {
    return await this.likeService.getLikeCount(idPublication);
  }
}