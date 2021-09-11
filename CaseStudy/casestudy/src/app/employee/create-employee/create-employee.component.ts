import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ReactiveForm} from "../../reactive-form";
import {EmployeeDaoService} from "../employee-dao.service";
import {IEmployee} from "../IEmployee";
import {Position} from "../Position";
import {EducationDegree} from "../EducationDegree";
import {Division} from "../Division";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  listPosition: Position[] = [];
  listEducation: EducationDegree[] = [];
  listDivision: Division[] = [];
  employeeForm!: FormGroup;
  isSubmit: boolean = false;
  existsId: boolean = false;
  action: string = 'create';

  constructor(private employeeDao: EmployeeDaoService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeDao.findAllPosition().subscribe(data => this.listPosition = data);
    this.employeeDao.findAllEducation().subscribe(data => this.listEducation = data);
    this.employeeDao.findAllDivision().subscribe(data => this.listDivision = data);
    let reactiveForm: ReactiveForm = new ReactiveForm();
    reactiveForm.setFormEmployee(undefined);
    this.employeeForm = reactiveForm.formEmployee;
  }

  onCreate() {
    this.isSubmit = true;
    console.log(this.employeeForm);
    if(this.employeeForm.valid){
      this.employeeDao.save(new IEmployee(this.employee.id.value, this.employee.name.value, this.employee.dateOfBirth.value,
        this.employee.idCard.value, this.employee.salary.value, this.employee.phoneNumber.value, this.employee.email.value,
        this.employee.address.value, this.employee.position.value, this.employee.educationDegree.value,
        this.employee.division.value)).subscribe(next => {
        this.employeeDao.statusSuccess = 'create';
        this.router.navigate(['/employee/list']);
      }, error => this.existsId = true);


    }
  }

  onUpdate(){
  }

  get employee(){
    return this.employeeForm.controls;
  }

  compareFn(c1: IEmployee, c2: IEmployee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
