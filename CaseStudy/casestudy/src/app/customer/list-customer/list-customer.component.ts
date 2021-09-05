import { Component, OnInit } from '@angular/core';
import {CustomerDAOService} from "../../customer-dao.service";
import {ICustomer} from "../../ICustomer";
import { Modal } from 'bootstrap';
import * as $ from "jquery";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer: ICustomer[] = [];
  id: string = '';
  constructor(private customerDAO: CustomerDAOService
              ){

  }

  ngOnInit(): void {
    let status: boolean = this.customerDAO.statusSuccess != '';
    this.listCustomer = this.customerDAO.findAll();
    if (this.customerDAO.statusSuccess == 'create'){
      $("#modalTitle").text('Create customer');
      $("#modalContent").text('Create customer success');
    }else if (this.customerDAO.statusSuccess == 'edit'){
      $("#modalTitle").text('Update customer');
      $("#modalContent").text('Update customer success');
    }if (this.customerDAO.statusSuccess == 'delete'){
      $("#modalTitle").text('Delete customer');
      $("#modalContent").text('Delete customer success');
    }
    this.customerDAO.statusSuccess = '';
    $(document).ready(function () {
      if (status){
        $("#launch").click();
        status = false;
      }
    });


  }

  detail(id: string) {
    let customer = this.customerDAO.findById(id);
    if (customer != undefined){
      $("#idCustomer").val(customer.id);
      $("#nameCustomer").val(customer.name);
      $("#addressCustomer").val(customer.address);
      $("#emailCustomer").val(customer.email);
      $("#idCardCustomer").val(customer.idCard);
      $("#phoneNumberCustomer").val(customer.phoneNumber);
      $("#typeCustomer").val(customer.customerType);
      $("#dateOfBirthCustomer").val(customer.dateOfBirth.replace('/', '-').replace('/', '-'));
      let $radios = $('input:radio[name=gender]');
      if(!$radios.is(':checked')) {
        $radios.filter('[value=' + customer.gender + ']').prop('checked', true);
      }
    }
  }

  delete(id: string){
    let customer = this.customerDAO.findById(id);
    if (customer != undefined){
      $("#nameDelete").text(customer.name);
      this.id = customer.id;
    }
  }
}
