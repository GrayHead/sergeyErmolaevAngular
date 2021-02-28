import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUser(value.id).subscribe(user => this.user = user);
    });
  }

  ngOnInit(): void {
  }

}
