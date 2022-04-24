import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ApplicationModule } from './application/application.module';
import { CategoryModule } from './category/category.module';
import { DeveloperModule } from './developer/developer.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ApplicationModule,
    CategoryModule,
    DeveloperModule,
    UserModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
  ],
  exports:[
    CategoryModule
  ]
})
export class ComponentsModule { }
