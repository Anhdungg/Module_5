import { Injectable } from '@angular/core';
import {YoutubeData} from "./YoutubeData";
import {HttpClient} from "@angular/common/http";

interface Video {
  id: string
  title: string,
  image: string,
  author: string
}

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist: string[] = ['JGwWNGJdvx8', 'kJQP7kiw5Fk', 'fRh_vgS2dFE', 'RgKAFK5djSk', '09R8_2nJtjg', 'OPf0YbXqDm0'
    , 'NUsoVlDFqZg', 'CevxZvSJLk8', '9bZkp7q19f0', 'KYniUCGPGLs'];
  listVideo: Video[] = [];
  constructor(private http: HttpClient) {
    this.playlist.forEach((id) =>{
      http.get<YoutubeData>('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyAtkxyTCrjn3Vz-canIb-q6CArnBjpq-dY&part=snippet,contentDetails,statistics,status', {responseType: 'json'})
        .subscribe(data => {
          this.listVideo.push({
            id: data.items[0].id,
            title: data.items[0].snippet.title,
            image: data.items[0].snippet.thumbnails.default.url,
            author: data.items[0].snippet.channelTitle.replace('VEVO', '')
          })
        });
    })
  }

  getPlayList(): string[]{
    return this.playlist;
  }

  find(id: string){
    return this.playlist.find(item => id===item);
  }
}
