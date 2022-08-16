import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { AbstractResetApiService } from '../../api/abstract-reset-api.service';
import { RequestResetDto } from '../../interfaces/dto/request-reset-dto';
import { AuthFacadeService } from '../../store/auth/auth-facade.service';
import { RequestInformationFacadeService } from '../../store/request-information/request-information-facade.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  resetPasswordForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });
  requestInformation$ = this.requestInformationFacadeService.requestInformation$;

  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
    private resetApiService: AbstractResetApiService,
    private authFacadeService: AuthFacadeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      this.authFacadeService.loginRequestId$.subscribe((loginRequestId) => {
        const requestResetDto: RequestResetDto = {
          email: this.resetPasswordForm.value.email!,
          loginRequestId
        };
        this.resetApiService.requestReset(requestResetDto).pipe(
          first(),
          tap(() => this.router.navigate(['success'], {relativeTo: this.activatedRoute})),
        ).subscribe();
      });
    }
  }

}
