import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: MoviesService) { }

  ngOnInit() {
  }

  fetchMovies() {
    this.service.getMovies();
  }
  
  showOnStart = true;
  show = false;
  appear(){
    this.show=!this.show;
    this.showOnStart=!this.showOnStart;
  }

}
