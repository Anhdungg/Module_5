import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { DemoComponent } from './demo/demo.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import {FormsModule} from "@angular/forms";
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewArticleComponent } from './new-article/new-article.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'add', component: NewArticleComponent},
  {path: '', component: HackerNewsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    DemoComponent,
    HackerNewsComponent,
    LikesComponent,
    NavbarComponent,
    FooterComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
