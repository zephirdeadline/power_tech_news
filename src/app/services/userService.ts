import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {UrlService} from './urlService';

@Injectable()
export class UserService {
    user: User = null;
    public constructor (public http: HttpClient,
                        public router: Router,
                        public urlService: UrlService) {
        this.user = new User();
    }

    login(username: '', password: '') {
        return this.http.post(this.urlService.getUrl('login'), {username: username, password: password}).subscribe(
            (res: any) => {
                console.log(res);
                this.user.token = res.auth_token;
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
}
