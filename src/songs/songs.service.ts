import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: string[] = [];

  create(song: string) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    return this.songs;
  }
}
