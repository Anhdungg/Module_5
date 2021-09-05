import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "../ICustomer";

export class ReactiveForm {
  private readonly _formCustomer: FormGroup;
  constructor(customer: ICustomer | undefined) {
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
      customerType: new FormControl(customer != undefined ? customer.customerType : '',
        [Validators.required]),
    });
  }

  get formCustomer(): FormGroup {
    return this._formCustomer;
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
