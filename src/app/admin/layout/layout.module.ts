import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
registerLocaleData(en);

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutComponentsModule,
    RouterModule,  
    FormsModule,
    HttpClientModule,

    IconsProviderModule,

    NzTypographyModule,
    NzMenuModule,
    NzLayoutModule,
    NzButtonModule
  ],
  exports:[
    LayoutComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class LayoutModule { }
