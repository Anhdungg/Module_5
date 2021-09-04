import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

interface IWord {
  key: string,
  meaning: string
}

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  key: string = '';
  result: string = '';
  constructor(private dictionaryService: DictionaryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null){
        this.key = id;
        this.result = this.dictionaryService.search(this.key);
      }
    });
  }

}
