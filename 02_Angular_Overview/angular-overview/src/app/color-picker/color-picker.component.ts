import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  red: number = 0;
  green: number = 0;
  blue: number = 0;
  color: string = "#" + this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
  constructor() { }

  ngOnInit(): void {
  }

  setRed(color: number){
    this.red = color;
    this.setColor();
  }

  setGreen(color: number){
    this.green = color;
    this.setColor();
  }

  setBlue(color: number){
    this.blue = color;
    this.setColor();
  }

  setColor(){
    this.color = "#" + this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
  }

  componentToHex(input: number){
    let hex = parseInt(input+"", 10).toString(16)
    return hex.length == 1 ? "0" + hex : hex;
  }

}
