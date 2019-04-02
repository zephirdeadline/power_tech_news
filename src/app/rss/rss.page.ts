import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Platform} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import {UserService} from '../services/userService';
import {RssService} from '../services/rssService';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.page.html',
  styleUrls: ['./rss.page.scss'],
})
export class RssPage implements OnInit {
  urlOrigin = '';
  constructor(private platform: Platform,
              public sanitizer: DomSanitizer,
              public userService: UserService,
              public rssService: RssService) {}

  ngOnInit() {
    this.urlOrigin = this.platform.getQueryParam('url');
    const id = parseInt(this.platform.getQueryParam('id'), 10);
    if (this.userService.user.token !== null) {
      this.rssService.markAsRead(id);
    }
    this.rssService.rss.forEach(rss => { if (rss.id === id) { rss.isRead = true; } });
  }

}
