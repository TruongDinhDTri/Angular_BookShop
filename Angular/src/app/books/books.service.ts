import { Injectable } from '@angular/core';

@Injectable()
// This help to adds it to the Root Module Injector and makes the it application wide singleton.
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'You love me',
        author: 'Colean Hoover',
        scr: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41bJax9SVRS._SX322_BO1,204,203,200_.jpg',
        price: 700,
      },
      {
        name: 'Fairy Tail',
        author: 'Stephen King',
        scr: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg',
        price: 800,
      },
      {
        name: 'It end with us',
        author: 'Jenifer',
        scr: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41lFmWyDIYL._SX320_BO1,204,203,200_.jpg',
        price: 900,
      },
      {
        name: 'Ugly Love',
        author: 'Noseee',
        scr: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31ywyPFFDZL._SX320_BO1,204,203,200_.jpg',
        price: 1000,
      },
    ];
  }
}
