import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Output()
  eventEmitter = new EventEmitter();

  user: User;
  display = true;

  usernameControl = new FormControl('username');
  firstNameControl = new FormControl('f');
  lastNameControl = new FormControl('l');
  emailControl = new FormControl('e');
  typeControl = new FormControl('t');
  passwordControl = new  FormControl('p');
  rPasswordControl = new FormControl('r');

  myForm: FormGroup = new FormGroup({
    username: this.usernameControl,
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    type: this.typeControl,
    password: this.passwordControl,
    rPassword: this.rPasswordControl
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  exit(): void {
    this.display = false;
    this.eventEmitter.emit(this.display)
  }

  createUser() {
    this.user.username = this.myForm.controls.username.value;
    this.user.first_name = this.myForm.controls.firstName.value;
    this.user.last_name = this.myForm.controls.lastName.value;
    this.user.email = this.myForm.controls.email.value;
    this.user.user_type = this.myForm.controls.type.value;
    this.user.password = this.myForm.controls.password.value;
    this.user.repeat_password = this.myForm.controls.rPassword.value;
    this.userService.postUsers(this.user);
  }
}
