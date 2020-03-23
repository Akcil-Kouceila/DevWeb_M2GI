import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Movie } from '../Movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  private movies: Movie[] =  [
    {
      title: 'Lololol',
      img: 'Immgmgmgmg',
      synopsis: 'test'
    },
    {
      title: 'ahahahah',
      img: 'sdkqsjdkllqsdjkqs',
      synopsis: 'dsy,pdsqdjkol'
    }
  ]

  findAll(): Movie[]{
    return this.movies;
  }

  findOneAtRandom(): Movie{
    return this.movies[Math.floor(Math.random() * this.movies.length)];
  }


}
