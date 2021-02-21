import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {UserComponent} from './user/user.component';
import {FullUserComponent} from './full-user/full-user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      // /users/1
      {path: ':id', component: FullUserComponent}
    ]
  },
  {path: 'posts', component: PostsComponent},

  // /users/1 -> app.component (RO)
  // {path: 'users/:id', component: FullUserComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // router outlet -> app.component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
