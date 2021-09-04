import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {YoutubeData} from "../YoutubeData";

@Component({
  selector: 'app-youtube-music',
  templateUrl: './youtube-music.component.html',
  styleUrls: ['./youtube-music.component.css']
})
export class YoutubeMusicComponent implements OnInit {
  value: string = '';
  constructor(private http:HttpClient) {
    this.http
      .get<YoutubeData>('https://www.googleapis.com/youtube/v3/videos?id=pNyeKhC6vtQ&key=AIzaSyAtkxyTCrjn3Vz-canIb-q6CArnBjpq-dY&part=snippet,contentDetails,statistics,status', {responseType: 'json'})
      .subscribe(data => {
        this.value = data.items[0].snippet.localized.title;
      });

  }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.value);
  }

}
