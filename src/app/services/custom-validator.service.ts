import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import {parsePhoneNumber} from 'libphonenumber-js';
import {Observable, of} from 'rxjs';
import {catchError, delay, first, map, switchMap} from 'rxjs/operators';
import {AbstractRegisterApiService} from '../api/abstract-register-api.service';
import {CheckEmailDto} from '../interfaces/dto/check-email-dto';
import {CheckUsernameDto} from '../interfaces/dto/check-username-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor(
    private registerApiService: AbstractRegisterApiService
  ) {
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

  get phoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const phoneValue = control.value;
      if (control.valid) {
        try {
          const phoneNumber = parsePhoneNumber(phoneValue.toString(), 'CH');
          if (phoneNumber.isValid()) {
            return null;
          }
        } catch (e) {
          return {wrongPhoneNumberFormat: true} as ValidationErrors;
        }
      }
      return null;
    };
  }

  get checkForExistingEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const checkEmailDto: CheckEmailDto = {
        email: control.value
      };
      return of(control.value).pipe(
        delay(275),
        switchMap(() => this.registerApiService.checkEmail(checkEmailDto).pipe(
          first(),
          map(() => null),
          catchError((error) => of({emailExists: true, emailExistsErrors: error.error.errors} as ValidationErrors))
        ))
      );
    };
  }

  get checkForExistingUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const checkUsernameDto: CheckUsernameDto = {
        username: control.value
      }
      return of(control.value).pipe(
        delay(275),
        switchMap(() => this.registerApiService.checkUsername(checkUsernameDto).pipe(
          first(),
          map(() => null),
          catchError((error) => of({
            usernameExists: true,
            usernameExistsErrors: error.error.errors
          } as ValidationErrors))
        ))
      );
    };
  }

}
