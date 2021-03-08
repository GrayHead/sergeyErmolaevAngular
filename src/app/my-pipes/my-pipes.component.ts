import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {

  user: any;
  date = new Date();
  wallet = 100;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://jsonplaceholder.typicode.com/users/1')
      .subscribe(value => this.user = value);

  }

  ngOnInit(): void {
  }

}
