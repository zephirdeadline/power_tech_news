import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RssService} from './services/rssService';
import {ChannelService} from './services/channelService';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/userService';
import {UrlService} from './services/urlService';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        RssService,
        ChannelService,
        UserService,
        UrlService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
