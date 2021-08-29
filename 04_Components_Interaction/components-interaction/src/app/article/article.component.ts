import { Component, OnInit, Input } from '@angular/core';
import {Articles} from "../Articles";
import {ListArticles} from "../ListArticles";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  listArticle: Articles[] = ListArticles;
  constructor() {
  }

  ngOnInit(): void {

  }

}
