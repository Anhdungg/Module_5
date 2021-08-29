import {Component, Input,  OnInit} from '@angular/core';
import {Articles} from "../Articles";
import {ListArticles} from "../ListArticles";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit{
  @Input() like: number = 0;
  @Input() id: number = 0;
  listArticle: Articles[] = ListArticles;
  constructor() { }

  ngOnInit(): void {
  }

  countLike(){
    this.listArticle.forEach((element) => {
      if (element.id === this.id){
        element.like++;
        this.like++;
      }
    })
  }

}
