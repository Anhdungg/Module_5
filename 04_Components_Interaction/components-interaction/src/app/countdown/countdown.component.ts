import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

interface Countdown {
  minute: number,
  seconds: number,
  active: boolean
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() minute: number = 0;
  @Input() seconds: number = 0;
  @Output() emitter = new EventEmitter();

  minuteOut: string = '';
  secondsOut: string = '';
  timer: any;
  saveTime: Countdown = {
    minute: 0,
    seconds: 0,
    active: false
  };
  constructor() { }

  ngOnInit(): void {
    this.saveTime.minute = this.minute;
    this.saveTime.seconds = this.seconds;
    this.saveTime.active = true;
    this.display();
  }

  countDown(): void{
    this.seconds--;
    if(this.seconds<0){
      this.seconds = 59;
      --this.minute;
      if(this.minute<0){
        this.minute = 0;
        this.seconds = 0;
        clearInterval(this.timer);
        this.saveTime.active = false;
        this.emitter.emit("Finish");
      }
    }
    this.display();
  }

  display(): void{
    if (this.minute<10){
      this.minuteOut = "0" + this.minute;
    }else{
      this.minuteOut = "" + this.minute;
    }
    if (this.seconds<10){
      this.secondsOut = "0" + this.seconds;
    }else{
      this.secondsOut = "" + this.seconds;
    }
  }

  start(): void{
    if(this.saveTime.active){
      this.timer = setInterval(() =>{this.countDown()}, 500)
    }
  }

  pause(): void{
    clearInterval(this.timer);
  }

  reset(): void{
    this.saveTime.active = true;
    this.minute = this.saveTime.minute;
    this.seconds = this.saveTime.seconds;
    this.display();
    this.pause();
    this.emitter.emit("Countdown");
  }
}
