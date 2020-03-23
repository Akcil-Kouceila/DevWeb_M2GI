import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  colMovies: Movie[];
  addedTitle: string;
  addedImg: string;
  addedSynopsis: string;
  addedMovie: Movie = {id: '', title: '', synopsis: '', img: ''};
  addedMovie2: Movie = { id: '', title: '', synopsis: '', img: ''};

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.mService.getAllMovies().then(data => {
      this.colMovies = data;
    });
  }

  onSubmit(form: any) {
    this.addedMovie.title = this.addedTitle;
    this.addedMovie.img = this.addedImg;
    this.addedSynopsis = this.addedSynopsis;
    this.colMovies.push(this.addedMovie);
    this.addedMovie = this.addedMovie2;
  }

  deleteMovie(movie: Movie) {
    console.log('DELETE MOVIESSSS');
    this.mService.deleteMovie(movie);
  }
}
