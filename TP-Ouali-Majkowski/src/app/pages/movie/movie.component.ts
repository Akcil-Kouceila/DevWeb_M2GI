import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private mService: MoviesService) { }

  ngOnInit() {
    this.mService.findOneAtRandom().then(data => {
      this.movie = data;
    });
  }

}
