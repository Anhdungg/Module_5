import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  fontSize:number = 14;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:number){
    this.fontSize = value;
  }
}
