import {Injectable} from '@angular/core';
import {Rss} from '../models/rss';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RssService {
    public constructor (public http: HttpClient) {}
    public getRss() {
        let url = 'https://news.ycombinator.com/rss?rss_url=';
        url += 'https://www.zdnet.fr/feeds/rss/actualites/';
        return this.http.get(url);
    }
}
