import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // username = new FormControl('default username', [Validators.required, Validators.minLength(10)]);
  // password = new FormControl('default passwrod', this.customValidator);
  // myFrom = new FormGroup({username: this.username, password: this.password});

  myFrom: FormGroup;

  // user = {id: 1, name: 'vaysa'};
  //
  //
  // submit(form: NgForm): void {
  //   console.log(form);
  //   // console.log(form.value);
  // }

  id = 0;


  constructor(private httpClient: HttpClient, private fb: FormBuilder) {

    this.myFrom = this.fb.group({
      username: ['username', Validators.required],
      password: ['password']
    });
  }

  select(selectForm: NgForm): void {
    console.log(selectForm);
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users/' + selectForm.value.id)
      .subscribe(value => console.log(value));

  }

  submitt(): void {
    console.log(this.myFrom);
  }

  customValidator(data: AbstractControl): any {
    console.log(data.value);
    if (data.value.includes('duck')) {
      return {duckPresent: {msg: 'change password', status: true}};
    }
  }

}
