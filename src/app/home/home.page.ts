import { Component } from '@angular/core';
import {RssService} from '../services/rssService';
import {Rss} from '../models/rss';
import {ChannelService} from '../services/channelService';
import {Channel} from '../models/channel';
import {forEach} from '@angular-devkit/schematics';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    rss: Rss[] = [];
    channels: Channel[] = [];
    constructor(public rssService: RssService, public  channelService: ChannelService) {
        this.rssService.getRss().subscribe((response: any[]) => {
            response.forEach(resp => {
                this.rss.push(new Rss(1,
                    resp.title,
                    resp.description,
                    resp.url_image,
                    resp.url_origin,
                    resp.is_read));
            });
        });
        this.channelService.getChannels().subscribe((response: any[]) => {
            this.channels = [
                new Channel(1, 'url1', 'channel name1'),
                new Channel(2, 'url2', 'channel name2'),
                new Channel(3, 'url3', 'channel name3')
            ];
        });
    }
}
