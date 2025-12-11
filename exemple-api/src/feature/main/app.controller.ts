import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '@common/config/metadata';
import { AppControllerHelloWorld } from './app.swagger';


@ApiTags('Route de base')
@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Public()
  @ApiOperation(AppControllerHelloWorld)
  @Get('hello-world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Get()
  getHelloV2(): string {
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
