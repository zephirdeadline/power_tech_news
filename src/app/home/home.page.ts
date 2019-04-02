import { Component } from '@angular/core';
import {RssService} from '../services/rssService';
import {Rss} from '../models/rss';
import {ChannelService} from '../services/channelService';
import {Channel} from '../models/channel';
import {forEach} from '@angular-devkit/schematics';
import {Router, RouterLink} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(public rssService: RssService, public  channelService: ChannelService, public router: Router) {
        this.rssService.getRss();
    }
    open(url: string, id: number) {
        this.router.navigateByUrl('/rss?url=' + url + '&id=' + id);
    }
}
