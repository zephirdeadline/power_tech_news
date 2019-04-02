import {Injectable} from '@angular/core';

@Injectable()
export class UrlService {
    // baseUrl = 'https://newsserver.w4pity.fr/';
    baseUrl = 'http://localhost:8000/';
    urls: any[] = [];

    public constructor() {
        this.urls.push({ 'name': 'createUser', url: () => this.baseUrl + 'auth/users/'});
        this.urls.push({ 'name': 'login', url: () => this.baseUrl + 'auth/token/login/'});
        this.urls.push({ 'name': 'homeFeed', url: () => this.baseUrl + 'api/naturalrss/'});
        this.urls.push({ 'name': 'markAsRead', url: (id) => this.markAsRead(id)});
    }
    private markAsRead(id: number) {
        return this.baseUrl + 'api/rss/' + id + '/read/';
    }
    public getUrl(name: string, ...arg) {
        const u = this.urls.find(obj => obj.name === name).url(arg);
        console.log(typeof u, u);
        return u;
    }
}
