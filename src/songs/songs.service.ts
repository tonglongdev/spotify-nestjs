import { Injectable } from '@nestjs/common';
import { Song } from 'src/types/song';

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(song: Song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    return this.songs;
  }
}
