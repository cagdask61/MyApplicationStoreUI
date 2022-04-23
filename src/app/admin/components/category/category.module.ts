import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
  ]
})
export class CategoryModule { }
