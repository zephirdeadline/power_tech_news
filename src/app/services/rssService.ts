import {Injectable} from '@angular/core';
import {Rss} from '../models/rss';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RssService {
    public constructor (public http: HttpClient) {}
    public getRss() {
        return this.http.get('http://localhost:8000/api/naturalrss/');
    }
}
