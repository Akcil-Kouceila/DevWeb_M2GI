import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  colMovies: Movie[];

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.colMovies = this.mService.findAll();
  }

}
