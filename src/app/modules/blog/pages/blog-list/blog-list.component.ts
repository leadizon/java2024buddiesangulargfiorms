import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit{
  public blogList: any[] = []

  constructor (private list: BlogService){}

  ngOnInit(): void {
    this.blogList = this.list.getBlogsArray()
  }
}
