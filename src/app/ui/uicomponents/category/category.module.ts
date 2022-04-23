import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'category',component:CategoryComponent}
    ])
  ]
})
export class CategoryModule { }
