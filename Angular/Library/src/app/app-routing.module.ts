import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookListComponent } from './book-list/book-list.component'


const routes: Routes = [
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: '**',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
