import { Component, OnInit } from '@angular/core';
import {UrlService} from '../../services/urlService';
import {RssService} from '../../services/rssService';

@Component({
  selector: 'app-addrss',
  templateUrl: './addrss.page.html',
  styleUrls: ['./addrss.page.scss'],
})
export class AddrssPage implements OnInit {
  url: string;
  constructor(public rssService: RssService) { }

  ngOnInit() {
  }
  fetch () {
    this.rssService.fetch(this.url).subscribe(response => {
      console.log(response);
    });
  }
}
