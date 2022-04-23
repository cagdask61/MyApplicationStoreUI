import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutComponentsModule,
    RouterModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
