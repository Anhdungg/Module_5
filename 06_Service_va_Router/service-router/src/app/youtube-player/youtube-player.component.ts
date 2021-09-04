import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {YoutubeService} from "../youtube.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy {
  url: string = '';
  constructor( private route: ActivatedRoute, private ytService: YoutubeService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null){
        this.url = id;
      }
    });
  }

  getUrl(){
    const url = 'https://www.youtube.com/embed/' + this.url;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {

  }
}
