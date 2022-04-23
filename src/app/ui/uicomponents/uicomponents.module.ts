import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from './application/application.module';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    ApplicationModule,
    CategoryModule,
    HomeModule
  ]
})
export class UIComponentsModule { }
