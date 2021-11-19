import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-redact-user',
  templateUrl: './redact-user.component.html',
  styleUrls: ['./redact-user.component.scss']
})
export class RedactUserComponent implements OnInit {

  @Input()
  user: User

  @Output()
  eventEmitter = new EventEmitter;

  display = true;

  constructor() { }

  ngOnInit(): void {
  }

  exit(): void {
    this.display = false;
    this.eventEmitter.emit(this.display)
  }
}
