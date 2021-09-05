import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {CustomerDAOService} from "../../customer-dao.service";
import {ReactiveForm} from "../reactive-form";
import {ICustomer} from "../../ICustomer";

@Component({
  selector: 'app-edit-customer',
  templateUrl: '../create-customer/create-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  isSubmit: boolean = false;
  action: string = 'edit';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerDAO: CustomerDAOService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param.id != undefined){
        let customer = this.customerDAO.findById(param.id);
        if (customer != undefined){
          this.customerForm = new ReactiveForm(customer).formCustomer;
        }else{
          this.router.navigate(['/customer/list']);
        }
      }else {
        this.router.navigate(['/customer/list']);
      }

    })
  }

  get customer(){
    return this.customerForm.controls;
  }

  onUpdate(){
    this.isSubmit = true;
    if (this.customerForm.valid){
      this.customerDAO.update( new ICustomer(this.customer.id.value, this.customer.name.value, this.customer.dateOfBirth.value,
        this.customer.gender.value, this.customer.idCard.value, this.customer.phoneNumber.value, this.customer.email.value,
        this.customer.address.value, this.customer.customerType.value))
    }
    this.customerDAO.statusSuccess = 'edit';
    this.router.navigate(['/customer/list']);
  }
  onCreate() {

  }
}
