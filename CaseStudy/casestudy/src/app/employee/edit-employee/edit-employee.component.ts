import { Component, OnInit } from '@angular/core';
import {ReactiveForm} from "../../reactive-form";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {EmployeeDaoService} from "../employee-dao.service";
import {IEmployee} from "../IEmployee";
import {HttpClient} from "@angular/common/http";
import {Position} from "../Position";
import {EducationDegree} from "../EducationDegree";
import {Division} from "../Division";

@Component({
  selector: 'app-edit-employee',
  templateUrl: '../create-employee/create-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  listPosition: Position[] = [];
  listEducation: EducationDegree[] = [];
  listDivision: Division[] = [];
  employeeForm!: FormGroup;
  isSubmit: boolean = false;
  existsId: boolean = false;
  action: string = 'edit';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeDao: EmployeeDaoService) { }

  ngOnInit(): void {
    this.employeeDao.findAllPosition().subscribe(data => this.listPosition = data);
    this.employeeDao.findAllEducation().subscribe(data => this.listEducation = data);
    this.employeeDao.findAllDivision().subscribe(data => this.listDivision = data);
    this.route.queryParams.subscribe(param => {
      if (param.id != undefined){
        this.employeeDao.findById(param.id).subscribe(employee => {
          let reactiveForm: ReactiveForm = new ReactiveForm();
          reactiveForm.setFormEmployee(employee);
          this.employeeForm = reactiveForm.formEmployee;
        }, error => (this.router.navigate(['/employee/list'])));
      }else {
        this.router.navigate(['/employee/list']);
      }

    })
  }

  get employee(){
    return this.employeeForm.controls;
  }

  onUpdate(){
    this.isSubmit = true;
    if (this.employeeForm.valid){
      this.employeeDao.update( new IEmployee(this.employee.id.value, this.employee.name.value, this.employee.dateOfBirth.value,
        this.employee.idCard.value, this.employee.salary.value, this.employee.phoneNumber.value, this.employee.email.value,
        this.employee.address.value, this.employee.position.value, this.employee.educationDegree.value,
        this.employee.division.value)).subscribe()
    }
    this.employeeDao.statusSuccess = 'edit';
    this.router.navigate(['/employee/list']);
  }
  onCreate() {

  }

  compareFn(c1: IEmployee, c2: IEmployee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
