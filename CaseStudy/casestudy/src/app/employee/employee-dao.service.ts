import { Injectable } from '@angular/core';
import {ICustomer} from "../customer/ICustomer";
import {IEmployee} from "./IEmployee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Position} from "./Position";
import {EducationDegree} from "./EducationDegree";
import {Division} from "./Division";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDaoService {
  API_EMPLOYEE: string = 'http://localhost:3000/employee';
  API_POSITION: string = 'http://localhost:3000/position';
  API_EDUCATION: string = 'http://localhost:3000/educationDegree';
  API_DIVISION: string = 'http://localhost:3000/division';
  public statusSuccess: string = '';

  // listEmployee: IEmployee[] = [new IEmployee(1, 'Le Van Anh Dung', '1997/11/05', '184209423',
  //   1000000, '0917937297', 'ledung.ht17@gmail.com', '55, Hoang Ke Viem Ngu Hanh Son, Da Nang',
  //   'quan ly', 'dai hoc', 'hanh chinh')];

  constructor(private http: HttpClient) { }

  findAll(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.API_EMPLOYEE);
  }

  findAllPosition(): Observable<Position[]>{
    return this.http.get<Position[]>(this.API_POSITION);
  }

  findAllEducation(): Observable<EducationDegree[]>{
    return this.http.get<EducationDegree[]>(this.API_EDUCATION);
  }

  findAllDivision(): Observable<Division[]>{
    return this.http.get<Division[]>(this.API_DIVISION);
  }

  findById(id: string): Observable<IEmployee>{
    return this.http.get<IEmployee>(this.API_EMPLOYEE + "/" + id);
  }

  save(employee: IEmployee): Observable<IEmployee>{
    return this.http.post<IEmployee>(this.API_EMPLOYEE, {
      id: employee.id,
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      idCard: employee.idCard,
      salary: employee.salary,
      phoneNumber: employee.phoneNumber,
      email: employee.email,
      address: employee.address,
      position: employee.position,
      educationDegree: employee.educationDegree,
      division: employee.division
  });
  }

  update(employee: IEmployee): Observable<IEmployee>{
    return this.http.put<IEmployee>(this.API_EMPLOYEE + "/" + employee.id, {
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      idCard: employee.idCard,
      salary: employee.salary,
      phoneNumber: employee.phoneNumber,
      email: employee.email,
      address: employee.address,
      position: employee.position,
      educationDegree: employee.educationDegree,
      division: employee.division
    })
  }

  deleteById(id: string): Observable<IEmployee>{
    return this.http.delete<IEmployee>(this.API_EMPLOYEE + "/" + id);
  }

  checkExistsId(id: string): boolean{
    this.findById(id).subscribe(data => {
      return data.id != undefined
    });
    return false;
  }

  search(keyword: string): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.API_EMPLOYEE + '?name_like=' + keyword)
  }
}
