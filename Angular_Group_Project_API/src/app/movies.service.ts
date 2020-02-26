import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  baseUrl = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=4d8fef2e8a014d827398469430bb0145"

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.baseUrl);
  }
}
