import { Component, OnInit, Input,} from '@angular/core';
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

  @Input()
  open : boolean = false;
  

  constructor(public service: MoviesService) { }

  ngOnInit(): void {
    this.service.getMovies();
  }

  addMovie(post){
    this.service.addToWatchList(post)
  }

}
