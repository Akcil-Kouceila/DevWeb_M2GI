import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from 'src/assets/movies.mock';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getAllMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  public async findOneAtRandom() {
    let result;
    await this.getAllMovies().subscribe(data => {
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
