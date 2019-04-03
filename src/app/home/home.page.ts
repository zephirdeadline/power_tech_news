import {Component, OnInit} from '@angular/core';
import {RssService} from '../services/rssService';
import {Rss} from '../models/rss';
import {ChannelService} from '../services/channelService';
import {Channel} from '../models/channel';
import {forEach} from '@angular-devkit/schematics';
import {Router, RouterLink} from '@angular/router';
import {Events, LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    loading = false;
    constructor(public rssService: RssService,
                public router: Router,
                public events: Events,
                public storage: Storage) {
        if (this.rssService.rss.length === 0) {
            this.loading = true;
            this.storage.get('token').then((val) => {
                rssService.userService.user.token = val;
                this.rssService.getRss();
            }).catch((error) => {
                this.rssService.getRss();
            });
        }
        events.subscribe('user:login', () => {
            this.rssService.getRss();
        });
        events.subscribe('rss:loaded', () => {
            this.loading = false;
        });
    }
    ngOnInit() {
    }
    open(url: string, id: number) {
        this.router.navigateByUrl('/rss?url=' + url + '&id=' + id);
    }
    closeSwipe(item) {
        item.close();
    }

    doRefresh(refresher) {
        this.rssService.loadRss().subscribe(response => {
                this.rssService.setRssFromList(response);
                refresher.complete();
            }
        );
    }
}
