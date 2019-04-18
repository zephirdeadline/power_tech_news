import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/userService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  logout () {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
