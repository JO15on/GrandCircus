import { Component } from '@angular/core';
import { Movies } from './movies';
import { MoviesService } from './movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movies-api';

  constructor(public service: MoviesService, private route: ActivatedRoute) { }

  fetchMovies() {
    this.service.getMovies();
  }
  
  showOnStart = false;
  show = false;
  appear(){
    this.show=!this.show;
    this.showOnStart=!this.showOnStart;
  }
}

