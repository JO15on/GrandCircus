import { Injectable } from '@angular/core';
import { IBook } from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: IBook[] = [
    {
      bookTitle: 'A Series of Unfortunate Typos',
      ISBN: 122342343242,
      author: 'BJ Clark',
      inWishList: false
    },
    {
      bookTitle: 'The Chronicles of Angular',
      ISBN: 123432423423,
      author: 'BJ Clark',
      inWishList: false
    },
    {
      bookTitle: 'Node time like the present',
      ISBN: 123432411123,
      author: 'BJ Clark',
      inWishList: false
    },
  ];

  constructor() { }

  getBooks(): IBook[] {
    return this.bookList;
  }

  toggleWishList(book : IBook) {
    this.bookList.forEach( ( bookItem, index ) => {
      if ( book.ISBN === bookItem.ISBN ) {
          bookItem.inWishList = !bookItem.inWishList;
      }
    })
  }

  getWishList(): IBook[] {
    return this.bookList.filter(book => book.inWishList)
  }
}