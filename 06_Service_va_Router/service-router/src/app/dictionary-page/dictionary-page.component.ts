import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../dictionary.service";

interface IWord {
  key: string,
  meaning: string
}

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words!: IWord[];
  constructor(private dictionaryService: DictionaryService) {
    this.words = this.dictionaryService.words;
  }

  ngOnInit(): void {
  }

}
