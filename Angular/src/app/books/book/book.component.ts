import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';
import { Book } from '../../types/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  constructor(private cartService: CartService) {}
  isInCart: boolean = false;
  ngOnInit(): void {}
  addToCart() {
    this.isInCart = true;
    console.log(this.book);
    this.cartService.add(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
