import { Component, OnInit } from '@angular/core';
import {ListArticles} from "../ListArticles";
import {Articles} from "../Articles";


@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styleUrls: ['./hackernews.component.css']
})
export class HackernewsComponent implements OnInit {

  listArticle: Articles[] = ListArticles;

  constructor() {

  }

  ngOnInit(): void {
  }

}
