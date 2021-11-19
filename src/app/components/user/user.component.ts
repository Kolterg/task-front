import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  eventEmitter = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  choseUser() {
    this.eventEmitter.emit(this.user);
  }
}
