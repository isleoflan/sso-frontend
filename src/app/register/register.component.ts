import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Gender} from '../interfaces/enum/gender';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  MALE = Gender.MALE;
  FEMALE = Gender.FEMALE;
  OTHER = Gender.OTHER;

  registerForm: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
