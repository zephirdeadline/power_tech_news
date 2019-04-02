import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: '';
  password: '';
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password);
  }

  createAccount() {
    console.log('create');
    this.userService.createAccount(this.username, this.password);
  }

}
