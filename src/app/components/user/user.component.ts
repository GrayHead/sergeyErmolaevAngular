import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: User;
  @Output()
  emitterX = new EventEmitter<User>();

  constructor() {
  }

  details(): void {
    this.emitterX.emit(this.user);
  }
}
