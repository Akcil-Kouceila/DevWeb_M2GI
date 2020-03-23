import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  @Output() delete: EventEmitter<Movie>;

  constructor(private mService: MoviesService) {
    this.delete = new EventEmitter<Movie>();
  }

  ngOnInit() {
  }

  deleteMovie() {
    console.log('DELETE MOVIE');
    this.mService.deleteMovie(this.movie);
  }
}
