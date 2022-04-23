import { NgModule } from '@angular/core';
import { UILayoutModule } from './ui-layout/ui-layout.module';
import { UIComponentsModule } from './uicomponents/uicomponents.module';



@NgModule({
  declarations: [],
  imports: [
    UIComponentsModule,
    UILayoutModule
  ],
  exports:[
    UIComponentsModule,
    UILayoutModule
  ]
})
export class UiModule { }
