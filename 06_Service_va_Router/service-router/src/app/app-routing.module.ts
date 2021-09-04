import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TimelinesComponent} from "./timelines/timelines.component";
import {YoutubeMusicComponent} from "./youtube-music/youtube-music.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {RequestParamComponent} from "./request-param/request-param.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'timelines', component: TimelinesComponent},
  {path: 'music', component: YoutubeMusicComponent, children: [{path: ':id', component: YoutubePlayerComponent}]},
  {path: 'dictionary', component: DictionaryPageComponent, children: [{path: ':key', component: DictionaryDetailComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
