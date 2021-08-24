import { Component, OnInit } from '@angular/core';
import {Student} from "../Student";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  student: Student = {
    name: "Anh Dung",
    age: 18,
    mark: 0,
    avatar: "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
  };
  constructor() { }

  ngOnInit(): void {
  }

  setMark(mark: number){
    this.student.mark = mark;
  }
}
