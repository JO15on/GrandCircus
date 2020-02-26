import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : IBook[];

  constructor(public service : BookService) { }

  ngOnInit() {
    this.books = this.service.getBooks();
    console.log(this.books);
  }

}
