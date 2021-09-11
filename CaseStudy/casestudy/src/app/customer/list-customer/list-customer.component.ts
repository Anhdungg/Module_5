import {Component, DoCheck, OnInit} from '@angular/core';
import {CustomerDAOService} from "../customer-dao.service";
import {ICustomer} from "../ICustomer";
import * as $ from "jquery";
import {ShareServiceService} from "../../share-service.service";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit, DoCheck{
  p: number = 1;
  listCustomer: ICustomer[] = [];
  id: string = '';
  constructor(private customerDAO: CustomerDAOService,
              private shareService: ShareServiceService){
  }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name customer';
    let status: boolean = this.customerDAO.statusSuccess != '';
    this.customerDAO.findAll().subscribe((customer) => this.listCustomer=customer);
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
    this.customerDAO.findById(id).subscribe((data: ICustomer) => {
      $("#idCustomer").val(data.id);
      $("#nameCustomer").val(data.name);
      $("#addressCustomer").val(data.address);
      $("#emailCustomer").val(data.email);
      $("#idCardCustomer").val(data.idCard);
      $("#phoneNumberCustomer").val(data.phoneNumber);
      $("#typeCustomer").val(data.customerType.id);
      $("#dateOfBirthCustomer").val(data.dateOfBirth.replace('/', '-').replace('/', '-'));
      let $radios = $('input:radio[name=gender]');
      if(!$radios.is(':checked')) {
        $radios.filter('[value=' + data.gender + ']').prop('checked', true);
      }
    });
  }

  delete(id: string){
   this.customerDAO.findById(id).subscribe((customer) => {
     $("#nameDelete").text(customer.name);
     this.id = customer.id;
   });
  }

  ngDoCheck(): void {
    if (this.shareService.statusSearch){
      this.p=1;
      this.customerDAO.search(this.shareService.keyword).subscribe(data => {
        this.listCustomer = data;
      });
      this.shareService.statusSearch = false;
    }
  }
}
