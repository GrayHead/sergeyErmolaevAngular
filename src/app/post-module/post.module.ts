import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';


@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PostsComponent
  ],
  providers: [PostService]
})
export class PostModule {
}
