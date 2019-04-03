import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './urlService';
import {Channel} from '../models/channel';
import {UserService} from './userService';
import {Rss} from '../models/rss';

@Injectable()
export class ChannelService {
    channels: Channel[] = [];
    public constructor(private http: HttpClient,
                       private urlService: UrlService,
                       private userService: UserService) {}

    public getChannels() {
        return this.http.get(this.urlService.getUrl('channel'), this.userService.getHeader()).subscribe((data: any[])  => {
            this.channels = [];
            data.forEach(resp => {
                this.channels.push(new Channel(
                    resp.id,
                    resp.name,
                    resp.url));
            });
        });
    }

    delete(channel_id: number) {
        return this.http.delete(this.urlService.getUrl('deleteChannel', channel_id), this.userService.getHeader());
    }
}
