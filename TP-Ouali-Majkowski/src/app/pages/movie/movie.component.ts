import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() delete: EventEmitter<Movie>;

  constructor(private mService: MoviesService) {
    this.delete = new EventEmitter<Movie>();
  }

  ngOnInit() {
    this.mService.findOneAtRandom().then(data => {
      this.movie = data;
    });
  }

  deleteMovie() {
    console.log('DELETE MOVIE');
    this.mService.deleteMovie(this.movie);
  }

  refresh() {
    window.location.reload();
  }
}
