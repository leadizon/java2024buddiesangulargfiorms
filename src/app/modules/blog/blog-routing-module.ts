import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';

const routes:Routes = [
  {
    path:'',
    component:BlogListComponent,
  },
  {
    path:'form',
    component:BlogFormComponent,
  },

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
