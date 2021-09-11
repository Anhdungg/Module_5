import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {CustomerDAOService} from "../customer-dao.service";
import {ReactiveForm} from "../../reactive-form";
import {ICustomer} from "../ICustomer";
import {ICustomerType} from "../icustomer-type";
import {ShareServiceService} from "../../share-service.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: '../create-customer/create-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  listCustomerType!: ICustomerType[];
  customerForm!: FormGroup;
  isSubmit: boolean = false;
  action: string = 'edit';
  existsId: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerDAO: CustomerDAOService,
              private shareService: ShareServiceService) { }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name customer';
    this.customerDAO.findAllCustomerType().subscribe((value) => {this.listCustomerType = value});
    this.route.queryParams.subscribe(param => {
      if (param.id != undefined){
        this.customerDAO.findById(param.id).subscribe((data: ICustomer) => {
          let reactiveForm: ReactiveForm = new ReactiveForm();
          reactiveForm.setFormCustomer(data);
          this.customerForm = reactiveForm.formCustomer;
        },
          error => this.router.navigate(['/customer/list']));
      }else {
        this.router.navigate(['/customer/list']);
      }
    });
  }

  get customer(){
    return this.customerForm.controls;
  }

  onUpdate(){
    this.isSubmit = true;
    if (this.customerForm.valid){
      this.customerDAO.update( new ICustomer(this.customer.id.value, this.customer.name.value, this.customer.dateOfBirth.value,
        this.customer.gender.value, this.customer.idCard.value, this.customer.phoneNumber.value, this.customer.email.value,
        this.customer.address.value, this.customer.customerType.value)).subscribe(next => {
        this.customerDAO.statusSuccess = 'edit';
        this.router.navigate(['/customer/list']);
      },error => (this.existsId = true))
    }

  }
  onCreate() {

  }

  compareFn(c1: ICustomer, c2: ICustomer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
