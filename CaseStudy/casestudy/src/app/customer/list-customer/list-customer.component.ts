import {Component, DoCheck, Inject, OnInit} from '@angular/core';
import {CustomerDAOService} from "../customer-dao.service";
import {ICustomer} from "../ICustomer";
import {ShareServiceService} from "../../share-service.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

interface StatusAction {
  title: string,
  content: string
}

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
              private shareService: ShareServiceService,
              private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name customer';
    this.customerDAO.findAll().subscribe((customer) => this.listCustomer=customer);
    let statusAction: StatusAction | null = null;
    if (this.customerDAO.statusSuccess == 'create'){
      statusAction = {title: 'Create customer', content: 'Create customer success'}
    }else if (this.customerDAO.statusSuccess == 'edit'){
      statusAction = {title: 'Update customer', content: 'Update customer success'}
    }if (this.customerDAO.statusSuccess == 'delete'){
      statusAction = {title: 'Delete customer', content: 'Delete customer success'}
    }
    if(this.customerDAO.statusSuccess != ''){
      if(statusAction != null){
        setTimeout(() => {
          this.dialog.open(ModalStatus, {width: '40%', autoFocus: false, data: statusAction, position: {top: '5%'}});
        }, 400);

      }
    }
    this.customerDAO.statusSuccess = '';
  }

  detail(id: string) {

    this.customerDAO.findById(id).subscribe((data: ICustomer) => {
      this.dialog.open(CustomerDetail, {width: '60%', autoFocus: false, data: data});
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(`Dialog result: ${result}`);
      // });
    });
  }

  delete(id: string){
   this.customerDAO.findById(id).subscribe((customer) => {
     this.dialog.open(ConfirmDelete, {width: '40%', autoFocus: false, data: customer, position: {top: '5%'}});
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

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './customer-detail.html',
})
export class CustomerDetail{
  constructor(public dialogRef: MatDialogRef<CustomerDetail>,
              @Inject(MAT_DIALOG_DATA) public data: ICustomer) {
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './confirm_delete.html',
})
export class ConfirmDelete{
  constructor(public dialogRef: MatDialogRef<ConfirmDelete>,
              @Inject(MAT_DIALOG_DATA) public data: ICustomer) {
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './modal_status.html',
})
export class ModalStatus{
  constructor(public dialogRef: MatDialogRef<ModalStatus>,
              @Inject(MAT_DIALOG_DATA) public data: StatusAction) {
  }
}
