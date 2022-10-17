import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  books: Book[] = [];

  card: Book[] = [];

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  myName: string = 'tri';
  isShowing: boolean = true;
  count: number = 0;
  handle() {
    this.isShowing = !this.isShowing;
  }
  addToCard(book: Book) {
    console.log(book);
  }
}
