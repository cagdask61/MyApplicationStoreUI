import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { RouterModule } from '@angular/router';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {path:'add',component:CategoryAddComponent},
    {path:'detail/:id',component:CategoryDetailComponent},
    {path:'update/:id',component:CategoryUpdateComponent},
    {path:'list',component:CategoryListComponent}
    ]),
    NzListModule,    
    NzDividerModule,
    NzButtonModule

  ],
  exports:[
    CategoryComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ]
})
export class CategoryModule { }
