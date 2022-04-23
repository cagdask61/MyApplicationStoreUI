import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationAddComponent } from './application-add/application-add.component';
import { ApplicationUpdateComponent } from './application-update/application-update.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationListComponent,
    ApplicationAddComponent,
    ApplicationUpdateComponent,
    ApplicationDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'add',component:ApplicationAddComponent},
      {path:'detail/:id',component:ApplicationDetailComponent},
      {path:'update/:id',component:ApplicationUpdateComponent},
      {path:'list',component:ApplicationListComponent}
    ])
  ],
  exports:[    
    ApplicationComponent,
    ApplicationListComponent,
    ApplicationAddComponent,
    ApplicationUpdateComponent,
    ApplicationDetailComponent
  ]
})
export class ApplicationModule { }
