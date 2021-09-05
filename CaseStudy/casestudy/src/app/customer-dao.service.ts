import { Injectable } from '@angular/core';
import {ICustomer} from "./ICustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerDAOService {
  public statusSuccess: string = '';

  listCustomer: ICustomer[] = [new ICustomer('KH-0001', 'Le Van Anh Dung', '1997/11/05', false,
    '184209423', '0917937297', 'ledung.ht17@gmail.com', '55, Hoang Ke Viem Ngu Hanh Son, Da Nang',
    'Diamond')];
  constructor() { }

  findAll(){
    return this.listCustomer;
  }

  findById(id: string): ICustomer | undefined{
    return this.listCustomer.find(element => element.id == id);
  }

  save(customer: ICustomer){
    this.listCustomer.push(customer);
  }

  update(customer: ICustomer){
    this.listCustomer.find(element => {
      if (element.id == customer.id){
        // element.id = customer.id;
        element.name = customer.name;
        element.dateOfBirth = customer.dateOfBirth;
        element.gender = customer.gender;
        element.idCard = customer.idCard;
        element.phoneNumber = customer.phoneNumber;
        element.email = customer.email;
        element.address = customer.address;
        element.customerType = customer.customerType;
      }
    })
  }

  deleteById(id: string){
    let index = this.findById(id);
    if(index != undefined){
      this.listCustomer.splice(this.listCustomer.indexOf(index), 1);
    }
  }
}
