import { Component } from '@angular/core';
import {RssService} from '../services/rssService';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    rss: Rss[] ;
    constructor(public rssService: RssService) {
        this.rss = this.rssService.getRss('gogole');
    }
}
