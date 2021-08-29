import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { LikesComponent } from './likes/likes.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const router: Routes =[
  {path: '', component: ArticleComponent},
  {path: 'add', component: NewArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownComponent,
    HackernewsComponent,
    ArticleComponent,
    NewArticleComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
