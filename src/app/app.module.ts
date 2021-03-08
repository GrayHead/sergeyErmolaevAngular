import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewFormComponent} from './new-form/new-form.component';
import {MyPipesComponent} from './my-pipes/my-pipes.component';
import { CustomPipe } from './my-pipes/custom.pipe';
import { SilverDirective } from './my-pipes/silver.directive';


@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    MyPipesComponent,
    CustomPipe,
    SilverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
