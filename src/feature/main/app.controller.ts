import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { TestException } from './app.exception';
// 1. Nouveaux imports
import { ApiOperation, ApiTags } from '@nestjs/swagger';

// 2. Nouveau Tag (p. 29, ligne 636)
@ApiTags('Route de base')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 3. Nouvelle Opération (p. 30, ligne 660)
  @ApiOperation({
    summary: 'Opération HelloWorld()',
    description: 'Cette opération est celle de base',
  })
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
