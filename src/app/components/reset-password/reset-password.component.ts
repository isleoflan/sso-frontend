import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestInformationFacadeService} from '../../store/request-information/request-information-facade.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = new FormGroup({});
  requestInformation$ = this.requestInformationFacadeService.requestInformation$;

  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
  ) {
  }

  ngOnInit(): void {

    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {

  }

}
