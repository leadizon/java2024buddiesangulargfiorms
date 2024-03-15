import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

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
  
}
