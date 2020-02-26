import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  
  books : IBook[];

  constructor(public service : BookService) { }

  ngOnInit() {
    this.books = this.service.getWishList();
  }

}
