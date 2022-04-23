import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserAddComponent } from './user-add/user-add.component';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    UserUpdateComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
