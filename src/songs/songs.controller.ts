import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'This action returns all songs';
  }
  @Get(':id')
  findOne() {
    return 'This action returns a single song';
  }
  @Post('')
  create() {
    return 'This action creates a new song';
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
