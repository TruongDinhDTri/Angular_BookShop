import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];
  constructor() {}

  add(book: Book) {
    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  remove(book: Book) {
    this.cart = this.cart.filter((b) => b != book);
    // This means: When you click to remove a book. Then you call the carService to help you remove your book. But a book component holds only one book alone. so when ever a component is click you call the function removeFromCart() and remove it. Then inside of that CartService you'll return every book in the array, except that book has just been click.
  }
}
