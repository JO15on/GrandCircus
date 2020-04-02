import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  watchList = [];
  baseUrl = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=4d8fef2e8a014d827398469430bb0145"

  movies = [];

  isGerman : boolean = false;
  lowVote : boolean = false;
  highVote : boolean = false;
  popular : boolean = false;
  notPopular : boolean = false;


  constructor(private http: HttpClient) { }

  getMovies() {

    let baseUrl = this.baseUrl;

    if ( this.isGerman ) {
      baseUrl += `&language=de`;
    }

    if (this.lowVote){
      baseUrl += '&vote_average.lte=5';
    }

    if (this.highVote){
      baseUrl += '&vote_average.gte=6';
    }

    if (this.popular){
      baseUrl += '&vote_count.gte=40';
    }

    if (this.notPopular){
      baseUrl += '&vote_count.lte=35';
    }


    return this.http.get(baseUrl).subscribe( (data : any) => this.movies = data.results);
  }
  addToWatchList(post){
    this.watchList.push(post)
  }
}
