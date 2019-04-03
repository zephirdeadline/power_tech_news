import {Injectable} from '@angular/core';
import {Rss} from '../models/rss';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './userService';
import {UrlService} from './urlService';

@Injectable()
export class RssService {
    rss: Rss[] = [];
    public constructor (public http: HttpClient,
                        public userService: UserService,
                        public urlService: UrlService) {

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
        console.log(this.rss);
    }
    public getRss() {
        this.loadRss().subscribe((response: any[]) => {
            this.setRssFromList(response);
        });
    }
    public markAsRead(id: number) {
        console.log(this.userService.isAnonyme());
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
