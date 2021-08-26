import { Component, OnInit } from '@angular/core';
import {Student} from "../Student";
import {StudentDao} from "../StudentDAO";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  listStudent: Student[] = StudentDao;

  constructor() { }

  ngOnInit(): void {
  }

}
