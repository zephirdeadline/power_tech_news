import {Injectable} from '@angular/core';

@Injectable()
export class UrlService {
    baseUrl = 'https://newsserver.w4pity.fr/';
    // baseUrl = 'http://localhost:8000/';
    urls: any[] = [];

    public constructor() {
        this.urls.push({ 'name': 'createUser', url: () => this.baseUrl + 'auth/users/'});
        this.urls.push({ 'name': 'login', url: () => this.baseUrl + 'auth/token/login/'});
        this.urls.push({ 'name': 'homeFeed', url: () => this.baseUrl + 'api/naturalrss/'});
        this.urls.push({ 'name': 'markAsRead', url: (id) => this.markAsRead(id)});
        this.urls.push({ 'name': 'fetch', url: (url) => this.baseUrl + 'api/fetch/?url=' + url });
        this.urls.push({ 'name': 'channel', url: () => this.baseUrl + 'api/channel/' });
        this.urls.push({ 'name': 'deleteChannel', url: (id) => this.baseUrl + 'api/channel/' + id + '/' });
    }
    private markAsRead(id: number) {
        return this.baseUrl + 'api/rss/' + id + '/read/';
    }
    public getUrl(name: string, ...arg) {
        const u = this.urls.find(obj => obj.name === name).url(arg);
        console.log(typeof u, u, arg);
        return u;
    }
}
