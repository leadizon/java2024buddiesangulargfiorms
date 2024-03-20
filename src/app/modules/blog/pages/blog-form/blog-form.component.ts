import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BlogForm } from './blog-form';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss'
})
export class BlogFormComponent {
  
  blogForm: FormGroup | any
  commentsArray: FormArray

  constructor(private fb: FormBuilder){
    this.blogForm = this.fb.group({
      title: '',
      description: '',
      author:'',
      comments:this.fb.array([
        new FormControl(''),
      ])
    })

    this.commentsArray = this.blogForm.controls['comments'] as FormArray
  }

  onSubmit = () => {
    console.log(this.blogForm.getRawValue()) 
  }

  addComment(){
    this.commentsArray.push(new FormControl(''))
  }

  deleteComment(index: number){
    this.commentsArray.removeAt(index)
  }

}

