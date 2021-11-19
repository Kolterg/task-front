import { Component } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-front';

  displayCreate: boolean;

  displayRedact: boolean;

  chosenUser: User;

  user: User;

  catchDisplayCreate(value: any) {
    this.displayCreate = value;
  }

  catchDisplayRedact(value: any) {
    this.displayRedact = value;
  }

  displayCreateF() {
    this.displayRedact = false;
    this.displayCreate = true;
  }

  catchUser(value: any) {
    this.displayCreate = false;
    this.displayRedact = true;
    this.chosenUser = value;
  }
}
