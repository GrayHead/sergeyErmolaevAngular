import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  myFrom = new FormGroup({});

  username: FormControl;
  password: FormControl;


  constructor() {
  }

  ngOnInit(): void {
  }

  submitt() {
    console.log('.');
  }
}
