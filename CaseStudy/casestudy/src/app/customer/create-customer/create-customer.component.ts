import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  isSubmit: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
        id: new FormControl('', [Validators.required, Validators.pattern('^(KH-)[\\d]{4}$')]),
        name: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        idCard: new FormControl('', [Validators.required, Validators.pattern('^([\\d]{9}|[\\d]{12})$')]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^((\\(84\\)\\+)|(0))((91)|(90))[\\d]{7}$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', [Validators.required]),
        customerType: new FormControl('', [Validators.required]),
      });
  }

  onSubmit() {
    this.isSubmit = true;
  }

  get customer(){
    return this.customerForm.controls;
  }
}
