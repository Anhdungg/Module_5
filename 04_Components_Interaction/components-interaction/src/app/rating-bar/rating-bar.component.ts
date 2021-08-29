import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
interface RatingUnit {
  active: boolean
  color: string
}
@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  @Input() max: number = 5;

  ratingUnit: Array<RatingUnit> = [];
  vote: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ratingUnit = Array.from({length: this.max}, () => ({active: false, color: 'black'}));
  }

  mouseOver(pos: number){
    this.reset();
    for (let i=0; i<=pos; i++){
      if (!this.ratingUnit[i].active){
        this.ratingUnit[i].color = 'yellow';
      }
    }
  }

  reset(){
    for (let i=0; i<this.ratingUnit.length; i++){
      if (!this.ratingUnit[i].active) {
        this.ratingUnit[i].color = 'black';
      }
    }
  }

  voting(pos: number){
    this.vote = pos+1;
    this.ratingUnit.forEach(element => {
      if (element.active){
        element.active=false;
        element.color='black';
      }
    });
    for (let i=0; i<=pos; i++){
        this.ratingUnit[i].color = 'yellow';
        this.ratingUnit[i].active = true;
    }
  }

}
