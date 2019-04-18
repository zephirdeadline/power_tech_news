import {Injectable} from '@angular/core';
import {Rss} from '../models/rss';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './userService';
import {UrlService} from './urlService';
import {Events} from '@ionic/angular';

@Injectable()
export class RssService {
    rss: Rss[] = [];
    public constructor (public http: HttpClient,
                        public userService: UserService,
                        public urlService: UrlService,
                        public events: Events) {
        events.subscribe('user:login', () => {
           this.getRss();
        });
    }
    public loadRss() {
        return this.http.get(this.urlService.getUrl('homeFeed'), this.userService.getHeader());
    }
    public setRssFromList(list) {
        this.rss = [];
        list.forEach(resp => {
            this.rss.push(new Rss(1,
                resp.id,
                resp.title,
                resp.description,
                resp.url_image,
                resp.url_origin,
                false,
                resp.date));
        });
    }
    public getRss() {
        this.rss = [];
        this.events.publish('rss:loading');
        this.loadRss().subscribe((response: any[]) => {
            this.setRssFromList(response);
            this.events.publish('rss:loaded');
        });
    }
    public markAsRead(id: number) {
        console.log(id);
        if (this.userService.isAnonyme()) {
            return;
        }
        return this.http.get(this.urlService.getUrl('markAsRead', id), this.userService.getHeader()).subscribe(
            res => { console.log(); }
        );
    }
    public fetch(url: string) {
        return this.http.get(this.urlService.getUrl('fetch', url), this.userService.getHeader());
    }
}
