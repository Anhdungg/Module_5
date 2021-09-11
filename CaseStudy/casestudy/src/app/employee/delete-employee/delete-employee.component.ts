import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeDaoService} from "../employee-dao.service";
import {Position} from "../Position";
import {EducationDegree} from "../EducationDegree";
import {Division} from "../Division";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeDao: EmployeeDaoService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param.id != undefined){
          this.employeeDao.deleteById(param.id).subscribe();
      }
      this.employeeDao.statusSuccess = 'delete';
      this.router.navigate(['employee/list'])
    })
  }

}
