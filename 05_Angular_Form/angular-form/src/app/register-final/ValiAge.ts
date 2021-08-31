import {AbstractControl, ValidationErrors} from "@angular/forms";

export  function valiAge(control: AbstractControl): ValidationErrors | null {
  const v=control.value;
  console.log(v);
  if (v == '' || v == null) {
    return { 'valiAge': false}
  }

  if (v < 18) {
    return { 'valiAge': true }
  }
  return null;
}
