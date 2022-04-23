import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UILayoutComponent } from './ui-layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UILayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    UILayoutComponent
  ]
})
export class UILayoutModule { }
