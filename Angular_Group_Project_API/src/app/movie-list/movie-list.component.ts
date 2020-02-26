import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input()
  posts : Movies;

  @Input()
  movies : Movies[] =[];

  constructor(public service: MoviesService) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe( (data : any) => this.posts = data.results);
  }

}
