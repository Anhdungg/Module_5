import {Component, DoCheck, OnInit} from '@angular/core';
import * as $ from "jquery";
import {IEmployee} from "../IEmployee";
import {EmployeeDaoService} from "../employee-dao.service";
import {Position} from "../Position";
import {EducationDegree} from "../EducationDegree";
import {Division} from "../Division";
import {ShareServiceService} from "../../share-service.service";

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
              private shareService: ShareServiceService){
  }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name employee';
    this.employeeDAO.findAllPosition().subscribe(data => this.listPosition = data);
    this.employeeDAO.findAllEducation().subscribe(data => this.listEducation = data);
    this.employeeDAO.findAllDivision().subscribe(data => this.listDivision = data);
    this.employeeDAO.findAll().subscribe(data => this.listEmployee = data);
    let status: boolean = this.employeeDAO.statusSuccess != '';
    if (this.employeeDAO.statusSuccess == 'create'){
      $("#modalTitle").text('Create employee');
      $("#modalContent").text('Create employee success');
    }else if (this.employeeDAO.statusSuccess == 'edit'){
      $("#modalTitle").text('Update employee');
      $("#modalContent").text('Update employee success');
    }if (this.employeeDAO.statusSuccess == 'delete'){
      $("#modalTitle").text('Delete employee');
      $("#modalContent").text('Delete employee success');
    }
    this.employeeDAO.statusSuccess = '';
    $(document).ready(function () {
      if (status){
        $("#launch").click();
        status = false;
      }
    });
  }

  detail(id: string) {
    this.employeeDAO.findById(id).subscribe(employee => {
      $("#idEmployee").val(employee.id);
      $("#nameEmployee").val(employee.name);
      $("#salaryEmployee").val(employee.salary);
      $("#addressEmployee").val(employee.address);
      $("#emailEmployee").val(employee.email);
      $("#idCardEmployee").val(employee.idCard);
      $("#phoneNumberEmployee").val(employee.phoneNumber);
      $("#positionEmployee").val(employee.position.id);
      $("#educationDegreeEmployee").val(employee.educationDegree.id);
      $("#divisionEmployee").val(employee.division.id);
      $("#dateOfBirthEmployee").val(employee.dateOfBirth.replace('/', '-').replace('/', '-'));
    });
  }

  delete(id: string){
    this.employeeDAO.findById(id).subscribe( employee => {
      $("#nameDelete").text(employee.name);
      this.id = employee.id;
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
