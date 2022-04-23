import { NgModule } from '@angular/core';
import { ApplicationModule } from './application/application.module';
import { CategoryModule } from './category/category.module';
import { DeveloperModule } from './developer/developer.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
  ],
  imports: [
    ApplicationModule,
    CategoryModule,
    DeveloperModule,
    UserModule
  ]
})
export class ComponentsModule { }
