import {Injectable} from '@angular/core';
import {Rss} from '../models/rss';

@Injectable()
export class RssService {
    public getRss(url: string) {
        return [
            new Rss(1, 'title', 'desc', 'url image', 'url origin', 'content', true),
            new Rss(1, 'title2', 'desc', 'url image', 'url origin', 'content', true),
            new Rss(1, 'title3', 'desc', 'url image', 'url origin', 'content', true),
        ];
    }
}
