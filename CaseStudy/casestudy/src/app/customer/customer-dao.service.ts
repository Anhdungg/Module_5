import { Injectable } from '@angular/core';
import {ICustomer} from "./ICustomer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ICustomerType} from "./icustomer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerDAOService {
  URL_API_CUSTOMER_TYPE: string = 'http://localhost:3000/customerType';
  URL_API_CUSTOMER: string = 'http://localhost:3000/customer';
  public statusSuccess: string = '';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.URL_API_CUSTOMER);
  }

  findById(id: string): Observable<ICustomer>{
    return this.http.get<ICustomer>(this.URL_API_CUSTOMER+'/' + id);
  }

  findAllCustomerType(): Observable<ICustomerType[]>{
    return this.http.get<ICustomerType[]>(this.URL_API_CUSTOMER_TYPE);
  }

  save(customer: ICustomer): Observable<ICustomer>{
    return this.http.post<ICustomer>(this.URL_API_CUSTOMER, {
      id: customer.id,
      name: customer.name,
      dateOfBirth: customer.dateOfBirth,
      gender: customer.gender,
      idCard: customer.idCard,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      address: customer.address,
      customerType: customer.customerType
    });
  }

  update(customer: ICustomer): Observable<ICustomer>{
    return this.http.put<ICustomer>(this.URL_API_CUSTOMER + '/' + customer.id, {
      id: customer.id,
      name: customer.name,
      dateOfBirth: customer.dateOfBirth,
      gender: customer.gender,
      idCard: customer.idCard,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      address: customer.address,
      customerType: customer.customerType
    });
  }

  deleteById(id: string): Observable<ICustomer>{
    // let index = this.findById(id);
    // if(index != undefined){
      return this.http.delete<ICustomer>(this.URL_API_CUSTOMER + "/" + id);
    // }
  }

  checkExistsId(id: string): boolean{
    this.findById(id).subscribe(
      data =>  {
        console.log(data);
        return data.id != undefined;},
    );
    return false;
  }

  getHttpClient(): HttpClient{
    return this.http;
  }

  search(keyword: string): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.URL_API_CUSTOMER + "?name_like=" + keyword)
  }
}
