import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {UrlService} from './urlService';
import {RssService} from './rssService';
import {Events} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserService {
    user: User = null;
    public constructor (private http: HttpClient,
                        private router: Router,
                        private urlService: UrlService,
                        public events: Events,
                        public storage: Storage) {
        this.user = new User();
    }

    login(username: '', password: '') {
        return this.http.post(this.urlService.getUrl('login'), {username: username, password: password}).subscribe(
            (res: any) => {
                console.log(res);
                this.user.token = res.auth_token;
                this.storage.set('token', res.auth_token);
                this.events.publish('user:login');
                this.router.navigateByUrl('/home');
        });
    }

    createAccount(username: '', password: '') {
        console.log('createaccount ', username, password);
        return this.http.post(this.urlService.getUrl('createUser'),
            {username: username, password: password}).subscribe(result => {
                this.login(username, password);
        });
    }

    getHeader() {
        return this.user.token ? {
            headers: new HttpHeaders().set('Authorization', 'token ' + this.user.token),
        } : {} ;
    }

    isAnonyme() {
        return this.user.token === null;
    }

    logout() {
        this.user.token = null;
    }
}
