import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "./customer/ICustomer";
import {IEmployee} from "./employee/IEmployee";
import {EmployeeDaoService} from "./employee/employee-dao.service";
import {CustomerDAOService} from "./customer/customer-dao.service";
import {HttpClient} from "@angular/common/http";

export class ReactiveForm {
  private _formCustomer!: FormGroup;
  private _formEmployee!: FormGroup;
  constructor() {
  }


  get formCustomer(): FormGroup {
    return this._formCustomer;
  }

  setFormCustomer(customer: ICustomer | undefined) {
    this._formCustomer = new FormGroup({
      id: new FormControl(customer != undefined ? customer.id : '',
        [Validators.required, Validators.pattern('^(KH-)[\\d]{4}$')]),
      name: new FormControl(customer != undefined ? customer.name : '',
        [Validators.required]),
      dateOfBirth: new FormControl(
        customer != undefined ? customer.dateOfBirth.replace('/', '-').replace('/', '-') : '',
        [Validators.required, valiAge]),
      gender: new FormControl(customer != undefined ? customer.gender+'' : '',
        [Validators.required]),
      idCard: new FormControl(customer != undefined ? customer.idCard : '',
        [Validators.required, Validators.pattern('^([\\d]{9}|[\\d]{12})$')]),
      phoneNumber: new FormControl(customer != undefined ? customer.phoneNumber : '',
        [Validators.required, Validators.pattern('^((\\(84\\)\\+)|(0))((91)|(90))[\\d]{7}$')]),
      email: new FormControl(customer != undefined ? customer.email : '',
        [Validators.required, Validators.email]),
      address: new FormControl(customer != undefined ? customer.address : '',
        [Validators.required]),
      customerType: new FormControl(customer != undefined ? {id: customer.customerType.id, name: customer.customerType.name} : '',
        [Validators.required]),
    });
  }


  get formEmployee(): FormGroup {
    return this._formEmployee;
  }

  setFormEmployee(employee: IEmployee | undefined){
    this._formEmployee = new FormGroup({
      id: new FormControl(employee != undefined ? employee.id : '',
        [Validators.required, Validators.pattern('^(NV-)[\\d]{4}$')]),
      name: new FormControl(employee != undefined ? employee.name : '',
        [Validators.required]),
      dateOfBirth: new FormControl(
        employee != undefined ? employee.dateOfBirth.replace('/', '-').replace('/', '-') : '',
        [Validators.required, valiAge]),
      salary: new FormControl(employee != undefined ? employee.salary : '', [Validators.required]),
      idCard: new FormControl(employee != undefined ? employee.idCard : '',
        [Validators.required, Validators.pattern('^([\\d]{9}|[\\d]{12})$')]),
      phoneNumber: new FormControl(employee != undefined ? employee.phoneNumber : '',
        [Validators.required, Validators.pattern('^((\\(84\\)\\+)|(0))((91)|(90))[\\d]{7}$')]),
      email: new FormControl(employee != undefined ? employee.email : '',
        [Validators.required, Validators.email]),
      address: new FormControl(employee != undefined ? employee.address : '',
        [Validators.required]),
      position: new FormControl(employee!= undefined ? employee.position : '', [Validators.required]),
      educationDegree: new FormControl(employee!= undefined ? employee.educationDegree : '', [Validators.required]),
      division: new FormControl(employee!= undefined ? employee.division : '', [Validators.required]),
    });
  }

}

function valiAge(d: AbstractControl): Validators | null {
  const now = new Date;
  const date = new Date(d.value);
  let diff = now.getFullYear() - date.getFullYear();
  if (now.getMonth() > date.getMonth()){
    diff++;
  }else if((now.getMonth() == date.getMonth()) && (now.getDate() >= date.getDate())){
    diff++;
  }
  if (diff < 18){
    return {valiAge: true};
  }
  // console.log('Now: ' + now.toString() + ' dateOfBirth: ' + date.toString() + ' diff: ' + diff);
  return null;
}





// function existsIdEmployee(e: AbstractControl): Validators | null {
//   let employeeDAO: EmployeeDaoService = new EmployeeDaoService();
//   if (employeeDAO.checkExistsId(e.value)){
//     return {existsId: true};
//   }
//   return null;
// }
