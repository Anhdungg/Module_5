import {Component, NgModule, OnInit} from '@angular/core';
import {Articles} from "../Articles";
import {ListArticles} from "../ListArticles";


@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {
  articles: Articles[] = ListArticles;


  constructor() { }

  ngOnInit(): void {
  }


}
