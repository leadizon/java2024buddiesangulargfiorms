import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {

  @Input('blogInput') blog: Blog | any

  @Output() actionEmitter = new EventEmitter<Blog>()
  edit = (id : number) => {
    console.log('Edit this Blog Id: ' + this.blog.id);
    // this.actionEmitter.emit(this.blog)
  }
  delete = (id : number) => {
    console.log('Delete this Blog Id: ' + this.blog.id);
    // this.actionEmitter.emit(this.blog)
  }


}
