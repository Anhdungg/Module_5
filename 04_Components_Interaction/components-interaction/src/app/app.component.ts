import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-interaction';
  statusCountdown: string = '';
  finish(value: any) {
    if (value === 'Finish'){
      this.statusCountdown = value;
    }else {
      this.statusCountdown = '';
    }

  }
}
