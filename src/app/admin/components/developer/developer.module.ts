import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './developer.component';
import { DeveloperUpdateComponent } from './developer-update/developer-update.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperAddComponent } from './developer-add/developer-add.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';



@NgModule({
  declarations: [
    DeveloperComponent,
    DeveloperUpdateComponent,
    DeveloperListComponent,
    DeveloperAddComponent,
    DeveloperDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeveloperModule { }
