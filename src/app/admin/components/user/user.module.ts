import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserAddComponent } from './user-add/user-add.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    UserUpdateComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'add',component:UserAddComponent},
      {path:'detail/:id',component:UserDetailComponent},
      {path:'update/:id',component:UserUpdateComponent},
      {path:'list',component:UserListComponent}
    ])
  ]
})
export class UserModule { }
