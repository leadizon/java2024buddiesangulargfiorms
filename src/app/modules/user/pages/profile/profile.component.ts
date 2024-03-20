import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  profileForm: FormGroup 
  constructor(private fb: FormBuilder){
    this.profileForm = this.fb.group({

      email:[{value:'', disabled:false}, Validators.email],
      name:'',
      bio:'',
      active:'',
    })
  }

  onSubmit = () => {
    console.log(this.profileForm.getRawValue()) 
  }
  ngOnInit(): void {
    // this.profileForm.valueChanges.subscribe((x)=> console.log(x))
  }


}
