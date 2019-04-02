import {Injectable} from '@angular/core';
import {Rss} from '../models/rss';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './userService';

@Injectable()
export class RssService {
    rss: Rss[] = [];
    public constructor (public http: HttpClient, public userService: UserService) {

    }
    public getRss() {
        return this.http.get('https://newsserver.w4pity.fr/api/naturalrss/', this.userService.getHeader()).subscribe((response: any[]) => {
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
        return this.http.get('https://newsserver.w4pity.fr/api/rss/' + id + '/read/', this.userService.getHeader()).subscribe(
            res => { console.log(); }
        );
    }
}
