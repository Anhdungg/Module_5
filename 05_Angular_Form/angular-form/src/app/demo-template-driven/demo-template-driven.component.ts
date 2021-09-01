import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-demo-template-driven',
  templateUrl: './demo-template-driven.component.html',
  styleUrls: ['./demo-template-driven.component.css']
})
export class DemoTemplateDrivenComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(studentForm: NgForm) {
    if (studentForm.valid){
      alert("Tạo mới thành công")
    }
  }
}
