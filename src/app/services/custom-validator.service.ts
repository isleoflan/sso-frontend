import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() {
  }

  passwordConfirm(passwordField1: string, passwordField2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.get(passwordField1)!.value !== control.get(passwordField2)!.value) {
        control.get(passwordField2)!.setErrors({passwordsDontMatch: true});
        return {passwordsDontMatch: true} as ValidationErrors;
      }
      return null;
    };
  }
}
