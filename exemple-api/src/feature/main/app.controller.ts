import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '@common/config/metadata';


@ApiTags('Route de base')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @ApiOperation({
    summary: 'Opération HelloWorld()',
    description: 'Cette opération est celle de base',
  })
  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(): void {

  }

  @Patch()
  patchOneValue(name:string): void {

  }

  @Put()
  update(): void {

  }

  @Delete()
  delete(): void {

  }
}
