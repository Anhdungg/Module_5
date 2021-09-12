import {Component, DoCheck, Inject, OnInit} from '@angular/core';
import {IEmployee} from "../IEmployee";
import {EmployeeDaoService} from "../employee-dao.service";
import {Position} from "../Position";
import {EducationDegree} from "../EducationDegree";
import {Division} from "../Division";
import {ShareServiceService} from "../../share-service.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

interface StatusAction {
  title: string,
  content: string
}

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit, DoCheck {
  listPosition: Position[] = [];
  listEducation: EducationDegree[] = [];
  listDivision: Division[] = [];
  listEmployee: IEmployee[] = [];
  id!: string;
  p: number = 1;
  constructor(private employeeDAO: EmployeeDaoService,
              private shareService: ShareServiceService,
              private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name employee';
    this.employeeDAO.findAllPosition().subscribe(data => this.listPosition = data);
    this.employeeDAO.findAllEducation().subscribe(data => this.listEducation = data);
    this.employeeDAO.findAllDivision().subscribe(data => this.listDivision = data);
    this.employeeDAO.findAll().subscribe(data => this.listEmployee = data);
    let statusAction: StatusAction | null = null;
    if (this.employeeDAO.statusSuccess == 'create'){
      statusAction = {title: 'Create employee', content: 'Create employee success'};
    }else if (this.employeeDAO.statusSuccess == 'edit'){
      statusAction = {title: 'Update employee', content: 'Update employee success'};
    }if (this.employeeDAO.statusSuccess == 'delete'){
      statusAction = {title: 'Delete employee', content: 'Delete employee success'};
    }
    if(this.employeeDAO.statusSuccess != ''){
      if(statusAction != null){
        setTimeout(() => {
          this.dialog.open(ModalStatus, {width: '40%', autoFocus: false, data: statusAction, position: {top: '5%'}});
        }, 400);

      }
    }
    this.employeeDAO.statusSuccess = '';
  }

  detail(id: string) {
    this.employeeDAO.findById(id).subscribe(employee => {
      this.dialog.open(EmployeeDetail, {width: '60%', autoFocus: false, data: employee});
    });
  }

  delete(id: string){
    this.employeeDAO.findById(id).subscribe( employee => {
      this.dialog.open(ConfirmDelete, {width: '40%', autoFocus: false, data: employee, position: {top: '5%'}});
    });
  }

  ngDoCheck(): void {
    if (this.shareService.statusSearch){
      this.p=1;
      this.employeeDAO.search(this.shareService.keyword).subscribe(data => {
        this.listEmployee = data;
      });
      this.shareService.statusSearch = false;
    }
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './employee-detail.html',
})
export class EmployeeDetail{
  constructor(public dialogRef: MatDialogRef<EmployeeDetail>,
              @Inject(MAT_DIALOG_DATA) public data: IEmployee) {
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './confirm_delete.html',
})
export class ConfirmDelete{
  constructor(public dialogRef: MatDialogRef<ConfirmDelete>,
              @Inject(MAT_DIALOG_DATA) public data: IEmployee) {
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
