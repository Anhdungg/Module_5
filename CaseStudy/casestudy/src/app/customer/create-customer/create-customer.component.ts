import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerDAOService} from "../../customer-dao.service";
import {ICustomer} from "../../ICustomer";
import {ActivatedRoute, Router} from "@angular/router";
import {ReactiveForm} from "../reactive-form";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  isSubmit: boolean = false;
  action: string = 'create';

  constructor(private customerDAO: CustomerDAOService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.customerForm = new ReactiveForm(undefined).formCustomer;
  }

  onCreate() {
    this.isSubmit = true;
    if(this.customerForm.valid){
      this.customerDAO.save(new ICustomer(this.customer.id.value, this.customer.name.value, this.customer.dateOfBirth.value,
        this.customer.gender.value, this.customer.idCard.value, this.customer.phoneNumber.value, this.customer.email.value,
        this.customer.address.value, this.customer.customerType.value));
      this.customerDAO.statusSuccess = 'create';
      this.router.navigate(['/customer/list']);

    }
  }

  onUpdate(){
    console.log(":((((");
  }

  get customer(){
    return this.customerForm.controls;
  }
}
