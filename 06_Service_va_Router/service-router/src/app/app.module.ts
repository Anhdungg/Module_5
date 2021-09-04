import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryService} from "./dictionary.service";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubeMusicComponent } from './youtube-music/youtube-music.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {YoutubeService} from "./youtube.service";
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { RequestParamComponent } from './request-param/request-param.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    NavbarComponent,
    HomeComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    YoutubeMusicComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    RequestParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [DictionaryService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
