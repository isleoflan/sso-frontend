import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, EMPTY, of } from "rxjs";
import { catchError, first, tap } from 'rxjs/operators';
import { AbstractRegisterApiService } from '../../api/abstract-register-api.service';
import { RegisterNewAccountDto } from '../../interfaces/dto/register-new-account-dto';
import { Gender } from '../../interfaces/enum/gender';
import { CustomValidatorService } from '../../services/custom-validator.service';
import { AuthFacadeService } from '../../store/auth/auth-facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  MALE = Gender.MALE;
  FEMALE = Gender.FEMALE;
  OTHER = Gender.OTHER;

  registerForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required], [this.customValidatorService.checkForExistingUsername]),
    password: new FormControl<string>('', [Validators.required]),
    passwordConfirm: new FormControl<string>('', [Validators.required]),
    gender: new FormControl<Gender>(Gender.MALE, [Validators.required]),
    forename: new FormControl<string>('', [Validators.required]),
    lastname: new FormControl<string>('', [Validators.required]),
    birthDate: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email], [this.customValidatorService.checkForExistingEmail]),
    phone: new FormControl<string>('', [Validators.required, this.customValidatorService.phoneNumber]),
    address: new FormControl<string>('', [Validators.required]),
    zipCode: new FormControl<string>('', [Validators.required, Validators.min(1000), Validators.max(9999)]),
    city: new FormControl<string>('', [Validators.required])
  }, [this.customValidatorService.passwordConfirm('password', 'passwordConfirm')]);

  constructor(
    private customValidatorService: CustomValidatorService,
    private authFacadeService: AuthFacadeService,
    private registerApiService: AbstractRegisterApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  onSubmit(): void {
    const values = this.registerForm.value;

    this.isLoading.next(true);

    this.authFacadeService.loginRequestId$.subscribe((loginRequestId) => {
      const registerNewAccountDto: RegisterNewAccountDto = {
        loginRequestId: loginRequestId,

        username: values.username!,
        password: values.password!,

        gender: values.gender!,
        forename: values.forename!,
        lastname: values.lastname!,

        address: values.address!,
        zipCode: parseInt(values.zipCode!, 10),
        city: values.city!,

        birthDate: new Date(values.birthDate!),

        email: values.email!,
        phone: values.phone!
      }
      this.registerApiService.registerNewAccount(registerNewAccountDto).pipe(
        first(),
        tap(() => this.router.navigate(['success'], {relativeTo: this.activatedRoute})),
        catchError(() => {
          this.isLoading.next(false);
          return of(EMPTY);
        })
      ).subscribe(() => {
        this.isLoading.next(false);
      });
    });
  }
}
