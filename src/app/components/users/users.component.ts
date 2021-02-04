import {Component} from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: User[];
  user: User;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  catchEmitt(o: User): void {
    this.user = o;
  }
}


