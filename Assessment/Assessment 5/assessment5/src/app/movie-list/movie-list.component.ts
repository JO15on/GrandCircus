import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(public service : MovieService) { }

  movies : IMovie[];

  ngOnInit() {
    this.movies = this.service.getMovies();
  }

}
