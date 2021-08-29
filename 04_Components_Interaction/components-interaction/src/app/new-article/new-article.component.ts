import { Component, OnInit } from '@angular/core';
import {Articles} from "../Articles";
import {ListArticles} from "../ListArticles";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  title: string = '';
  url: string = '';
  listArticle: Articles[] = ListArticles;
  constructor() { }

  ngOnInit(): void {
  }

  addArticle(){
    let lastId = this.listArticle[0].id;
    this.listArticle.forEach((element) => {
      if (element.id > lastId){
        lastId = element.id;
      }
    });
    console.log(this.title + ": " + this.url);
    this.listArticle.push({
      id: ++lastId,
      title: this.title,
      url: this.url,
      like: 0
    });
    this.title = '';
    this.url = '';
  }

}
