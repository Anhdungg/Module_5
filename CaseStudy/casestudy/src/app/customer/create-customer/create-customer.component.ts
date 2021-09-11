import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerDAOService} from "../customer-dao.service";
import {ICustomer} from "../ICustomer";
import {ActivatedRoute, Router} from "@angular/router";
import {ReactiveForm} from "../../reactive-form";
import {ICustomerType} from "../icustomer-type";
import {HttpClient} from "@angular/common/http";
import {ShareServiceService} from "../../share-service.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  listCustomerType!: ICustomerType[];
  customerForm!: FormGroup;
  isSubmit: boolean = false;
  action: string = 'create';
  existsId: boolean = false;

  constructor(private customerDAO: CustomerDAOService,
              private router: Router,
              private shareService: ShareServiceService) { }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name customer';
    let reactiveForm: ReactiveForm = new ReactiveForm();
    reactiveForm.setFormCustomer(undefined);
    this.customerForm = reactiveForm.formCustomer;
    this.customerDAO.findAllCustomerType().subscribe((value) => this.listCustomerType = value);
  }

  onCreate() {
    this.isSubmit = true;
    if(this.customerForm.valid){
      this.customerDAO.save(new ICustomer(this.customer.id.value, this.customer.name.value, this.customer.dateOfBirth.value,
        this.customer.gender.value, this.customer.idCard.value, this.customer.phoneNumber.value, this.customer.email.value,
        this.customer.address.value, this.customer.customerType.value)).subscribe(next => {
        this.customerDAO.statusSuccess = 'create';
        this.router.navigate(['/customer/list']);
      },error => (this.existsId = true));

    }
  }

  onUpdate(){
  }

  get customer(){
    return this.customerForm.controls;
  }
  compareFn(c1: ICustomer, c2: ICustomer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
