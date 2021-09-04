import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../youtube.service";
import {HttpClient} from "@angular/common/http";
import {YoutubeData} from "../YoutubeData";

interface Video {
  id: string
  title: string,
  image: string,
  author: string
}

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {
  listVideo: Video[] = this.ytService.listVideo;

  constructor(private ytService: YoutubeService) {

  }

  ngOnInit(): void {
  }

}
