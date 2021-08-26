import {Component, Input, NgModule} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'angular-component';
  // @Input() //đánh dấu property seconds sẽ là input mà component này sẽ nhận dữ liệu
  // seconds = 11 //có thể thiêt lập giá trị mặc định nếu người dùng không truyền vào giá trị nào

  // countdownMsg = '';
  // finishCountdown() {
  //   this.countdownMsg = 'Finished!';
  // }
  //
  // runCountDown(){
  //   this.countdownMsg = '';
  // }
}
