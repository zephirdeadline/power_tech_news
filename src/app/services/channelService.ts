import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChannelService {
    public constructor(private http: HttpClient) {}
    public getChannels() {
        let url = 'https://news.ycombinator.com/rss?rss_url=';
        url += 'https://www.zdnet.fr/feeds/rss/actualites/';
        return this.http.get(url);
    }
}
