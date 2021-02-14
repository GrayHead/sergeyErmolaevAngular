import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    UsersComponent
  ],
  providers: [UserService]
})
export class UserModule {
}
