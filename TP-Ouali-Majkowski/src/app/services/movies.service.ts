import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from 'src/assets/movies.mock';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  addedMovie: Movie;
  constructor() { }

  public getAllMovies(): Promise<Movie[]> {
    return of(MOVIES).toPromise();
  }

  public async findOneAtRandom() {
    let result;
    await this.getAllMovies().then(data => {
      result = data[Math.floor(Math.random() * data.length)];
    });
    return result;
  }
}


/*

public async getAllMovies() {
  const result = await of(MOVIES).toPromise();
  return result;
}

*/
