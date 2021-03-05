import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {

  user = {name: 'vaysa', age: 123};

  date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
