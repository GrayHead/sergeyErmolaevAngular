import {Component, OnInit} from '@angular/core';
import {users} from '../data/db';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users = users;

  constructor() {
  }


}
