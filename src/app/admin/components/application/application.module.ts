import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationAddComponent } from './application-add/application-add.component';
import { ApplicationUpdateComponent } from './application-update/application-update.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { RouterModule } from '@angular/router';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

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
    FormsModule,
    RouterModule.forChild([
      {path:'add',component:ApplicationAddComponent},
      {path:'detail/:id',component:ApplicationDetailComponent},
      {path:'update/:id',component:ApplicationUpdateComponent},
      {path:'list',component:ApplicationListComponent}
    ]),
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzGridModule,
    NzDividerModule
  ],
  exports:[    
    ApplicationComponent,
    ApplicationListComponent,
    ApplicationAddComponent,
    ApplicationUpdateComponent,
    ApplicationDetailComponent,
    
  ],
  providers:[]
})
export class ApplicationModule { }
