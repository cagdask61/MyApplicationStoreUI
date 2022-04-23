import { NgModule } from '@angular/core';
import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutComponentsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
