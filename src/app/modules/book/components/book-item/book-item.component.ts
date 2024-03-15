import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {

  @Input('bookInput') book: Book | any

  @Output() actionEmitter = new EventEmitter<Book>()
  edit = (id : number) => {
    console.log('Edit this Book Id: ' + this.book.id);
    // this.actionEmitter.emit(this.book)
  }
  delete = (id : number) => {
    console.log('Delete this Book Id: ' + this.book.id);
    // this.actionEmitter.emit(this.book)
  }

}
