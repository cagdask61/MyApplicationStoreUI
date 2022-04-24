import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent as AdminLayoutComponent } from './admin/layout/layout.component';
import { UILayoutComponent } from './ui/ui-layout/ui-layout.component';

const routes: Routes = [
  {path:'',component:UILayoutComponent,children:[
    {path:'applications',loadChildren: () => import("./ui/uicomponents/application/application.module").then(module => module.ApplicationModule)},
    {path:'categories',loadChildren: () => import("./ui/uicomponents/category/category.module").then(module => module.CategoryModule)},
  
  ]},
    
  {path:'admin-dashboard',component:AdminLayoutComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'application',loadChildren: () => import("./admin/components/application/application.module").then(module => module.ApplicationModule)},
    {path:'category',loadChildren: () => import("./admin/components/category/category.module").then(module => module.CategoryModule)},
    {path:'user',loadChildren: () => import("./admin/components/user/user.module").then(module => module.UserModule)},
    {path:'developer',loadChildren: () => import("./admin/components/developer/developer.module").then(module => module.DeveloperModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
