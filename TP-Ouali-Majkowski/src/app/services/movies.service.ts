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

  findOneAtRandom(): Observable<Movie> {
    var allmovies;
    this.getAllMovies().subscribe(data => {
      allmovies = data;
    })
    return allmovies[Math.floor(Math.random() * allmovies.length)];
  }
}
