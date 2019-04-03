import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/userService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  logout () {
    this.userService.logout();
  }

}
