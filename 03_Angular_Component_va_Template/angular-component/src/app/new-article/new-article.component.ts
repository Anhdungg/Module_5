import { Component, OnInit } from '@angular/core';
import {Articles} from "../Articles";
import {ListArticles} from "../ListArticles";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  articles: Articles[] = ListArticles;
  constructor() { }

  ngOnInit(): void {
  }

  addArticle(){
    // @ts-ignore
    let titleInput = document.getElementById("title").value;
    // @ts-ignore
    document.getElementById("title").value = '';
    // @ts-ignore
    let urlInput = document.getElementById("url").value;
    // @ts-ignore
    document.getElementById("url").value = '';
    if (titleInput !== '' && urlInput !== ''){
      this.articles.push({
        title: titleInput,
        url: urlInput
      })
    }

  }
}
