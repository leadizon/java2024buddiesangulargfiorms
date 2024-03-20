import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  public bookList: any[] = []

  constructor (private list: BookService){}

  ngOnInit(): void {
    this.bookList = this.list.getBooksArray()
  }
  
  executeAction = (book: Book) => {
    console.log('from parent: ', book)
  }


  // @Input('commandInput') page: string | any
  // @Output() commandEmitter = new EventEmitter<string>()
  // add = (page:string) => {
  //   console.log('Add a new ' + page)
  // }
  // deleteAll = (page:string) => {
  //   console.log('Delete all ' + page)
  // }
}
