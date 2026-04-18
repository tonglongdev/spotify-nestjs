import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'This action returns a single song';
  }
  @Post('')
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }
  @Put(':id')
  update() {
    return 'This action updates a single song';
  }
  @Delete(':id')
  remove() {
    return 'This action removes a single song';
  }
}
