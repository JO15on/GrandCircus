import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'watchlist',
    component: WatchlistPageComponent
  },
  {
    path: 'searchcriteria',
    component: SearchCriteriaComponent
  },
  {
    path: 'movielist',
    component: MovieListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
