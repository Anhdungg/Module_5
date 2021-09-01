import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-reactive-form',
  templateUrl: './demo-reactive-form.component.html',
  styleUrls: ['./demo-reactive-form.component.css']
})
export class DemoReactiveFormComponent implements OnInit {
  studentForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      mark: ['', [Validators.required]]
    })
  }

  get student(){
    return this.studentForm.controls;
  }
  onSubmit(){
    if (this.studentForm.valid){
      alert("Tạo mới thành công")
    }
  }

}
