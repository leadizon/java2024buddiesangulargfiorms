import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooksArray () {
    return [
      {
        id: 1,
        name: 'The Alchemist',
        author: ['Paulo Coelho'],
        isbn: '0062390627'
      },
      {
        id: 2,
        name: 'The Power of Now',
        author: ['Eckhart Tolle'],
        isbn: '1577314808'
      },
      {
        id: 3,
        name: 'Atomic Habits',
        author: ['James Clear'],
        isbn: '1847941842'
      },
      {
        id: 4,
        name: 'The Seven Husbands of Evelyn Hugo',
        author: ['Taylor Jenkins Reid', 'Nan Siver'],
        isbn: '1501161938'
      },
      {
        id: 5,
        name: 'Tuesdays with Morrie',
        author: ['Mitch Albom'],
        isbn: '076790592X'
      },
    ]
  }

}
