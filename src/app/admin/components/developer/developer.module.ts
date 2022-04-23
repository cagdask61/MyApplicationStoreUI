import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './developer.component';
import { DeveloperUpdateComponent } from './developer-update/developer-update.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperAddComponent } from './developer-add/developer-add.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeveloperComponent,
    DeveloperUpdateComponent,
    DeveloperListComponent,
    DeveloperAddComponent,
    DeveloperDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'add',component:DeveloperAddComponent},
      {path:'detail/:id',component:DeveloperDetailComponent},
      {path:'update/:id',component:DeveloperUpdateComponent},
      {path:'list',component:DeveloperListComponent}
    ])
  ]
})
export class DeveloperModule { }
