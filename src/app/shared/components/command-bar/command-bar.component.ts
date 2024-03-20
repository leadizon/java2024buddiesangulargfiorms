import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {

  constructor(private router: Router){
  }

  @Input('page') page: string | any

  @Output() actionEmitter = new EventEmitter()
  add = (page: string) => {
    console.log('Add new ' + page);
    if (page == 'book'){
      this.router.navigate(['./book/form']);
    }else{
      this.router.navigate(['./blog/form']);
    }
  }
  deleteAll = (page: string) => {
    console.log('Delete all ' + page);
  }

  // executeCommand = (page: string) => {
  //   console.log('Command from ', page)
  // }

}
