import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,  
    ComponentsModule
  ],
  exports:[
    LayoutModule,
    ComponentsModule  
  ]
})
export class AdminModule { }
