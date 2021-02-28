import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // user = {id: 1, name: 'vaysa'};
  //
  //
  // submit(form: NgForm): void {
  //   console.log(form);
  //   // console.log(form.value);
  // }

  id = 0;


  constructor(private httpClient: HttpClient) {
  }

  select(selectForm: NgForm): void {
    console.log(selectForm);
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users/' + selectForm.value.id)
      .subscribe(value => console.log(value));

  }
}
