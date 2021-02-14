import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserModule} from './user-module/user.module';
import {PostModule} from './post-module/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
