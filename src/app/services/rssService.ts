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
    public getRss() {
        return this.http.get(this.urlService.getUrl('homeFeed'), this.userService.getHeader()).subscribe((response: any[]) => {
            response.forEach(resp => {
                console.log(resp);
                this.rss.push(new Rss(1,
                    resp.id,
                    resp.title,
                    resp.description,
                    resp.url_image,
                    resp.url_origin));
            });
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
}
