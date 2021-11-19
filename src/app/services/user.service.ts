import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/';

  private usersUrl = this.url + "users/";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl);
  }

  postUsers(user: User) {
    this.httpClient.post(this.usersUrl, user);
  }
}
