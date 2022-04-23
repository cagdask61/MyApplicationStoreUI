import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavigationComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports:[    
    NavigationComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class LayoutComponentsModule { }
