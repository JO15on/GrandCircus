import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input()
  post : Movies;

  @Input()
  movies : Movies[] =[];

  open : boolean = false;

  constructor(public service: MoviesService) { }

  ngOnInit(){
  }

  openModal() {
    if(this.open === false){
    this.open = true;
  } else {
    this.open = false;
  }  
}  

  closePopout(){
    this.open = false;
  }

}
