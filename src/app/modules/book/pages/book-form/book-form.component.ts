import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  bookForm: FormGroup | any
  authorsArray: FormArray

  constructor(private fb: FormBuilder){
    this.bookForm = this.fb.group({
      name: '',    
      authors:this.fb.array([
        new FormControl(''),
      ]),
      isbn:'',
    })

    this.authorsArray = this.bookForm.controls['authors'] as FormArray
  }

  onSubmit = () => {
    console.log(this.bookForm.getRawValue()) 
  }

  addComment(){
    this.authorsArray.push(new FormControl(''))
  }

  deleteComment(index: number){
    this.authorsArray.removeAt(index)
  }
}
