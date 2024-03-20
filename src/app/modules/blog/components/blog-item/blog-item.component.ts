import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})


export class BlogItemComponent {

  constructor(private router: Router){

  }

  @Input('blogInput') blog: Blog | any

  @Output() actionEmitter = new EventEmitter<Blog>()
  edit = (id : number) => {
    console.log('Edit this Blog Id: ' + this.blog.id);
    this.actionEmitter.emit(this.blog)
    this.router.navigate(['./blog/form']);
  }
  delete = (id : number) => {
    console.log('Delete this Blog Id: ' + this.blog.id);
    this.actionEmitter.emit(this.blog)
  }


}
