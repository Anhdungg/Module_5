import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  private _seconds = 11;
  constructor() { }
  @Input('remaining-time')
  get seconds(): number{
    return this._seconds;
  }

  set seconds(v){
    v = typeof v === 'undefined' ? 11 : v;
    const vFixed = Number(v);
    this._seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    this.message = this._seconds + " seconds and counting";
    this.remainingTime = this._seconds;
  }


  @Output()
  finish = new EventEmitter<boolean>();

  countDown(){
    this.remainingTime--;
    if (this.remainingTime === 0) {
      clearInterval(this.intervalId);
      this.finish.emit(true);
    }
  };

  @Output()
  run = new EventEmitter<boolean>()

  //Angular component lifecycle, các hàm này sẽ được Angular
  // tự động gọi khi khởi tạo(ngOnInit) và khi huỷ(ngOnDestroy) component
  ngOnInit(): void {
  }

  clearTimer(){}

  start(){
    if (this.remainingTime == 0){
      this.remainingTime = this._seconds;
    }
    this.intervalId = setInterval(()=>{
      this.countDown();
    }, 500);
    this.run.emit(true);
  }
  stop(){
    clearInterval(this.intervalId);
  }
  reset(){
    this.remainingTime = this._seconds;
    clearInterval(this.intervalId);
  }
  private intervalId: any;
  message = "";

  remainingTime: number = 0;






}
