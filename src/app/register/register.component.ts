import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Gender} from '../interfaces/enum/gender';
import {CustomValidatorService} from '../services/custom-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  MALE = Gender.MALE;
  FEMALE = Gender.FEMALE;
  OTHER = Gender.OTHER;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required], [this.customValidatorService.checkForExistingUsername]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    forename: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email], [this.customValidatorService.checkForExistingEmail]),
    mobile: new FormControl('', [Validators.required, this.customValidatorService.phoneNumber]),
    address: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(9999)]),
    city: new FormControl('', [Validators.required])
  }, [this.customValidatorService.passwordConfirm('password', 'passwordConfirm')]);

  constructor(
    private customValidatorService: CustomValidatorService
  ) {
  }

  ngOnInit(): void {
    this.registerForm.patchValue({
      gender: this.MALE
    });
  }

  onSubmit(): void {
  }

}
