import { Component } from '@angular/core';

import {Events, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public pageCommon = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
  ];
  public pageNotConnected = [
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    }
  ];
  public pageConnected = [
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Options',
      url: '/options',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];
  public appPage: any[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    public storage: Storage
  ) {
    events.subscribe('user:login', () => {
      this.appPage = this.pageCommon.slice();
      this.appPage.push(...this.pageConnected);
    });
    events.subscribe('user:logout', () => {
      this.appPage = this.pageCommon.slice();
      this.appPage.push(...this.pageNotConnected);
    });
    this.storage.get('token').then(token => {
      if (token !== null) {
        this.events.publish('user:login');
      } else {
        this.events.publish('user:logout');
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }
}
