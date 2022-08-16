import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, tap, catchError } from 'rxjs/operators';
import { AbstractResetApiService } from '../../api/abstract-reset-api.service';
import { ExecuteResetDto } from '../../interfaces/dto/execute-reset-dto';
import { AuthFacadeService } from "../../store/auth/auth-facade.service";

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  setPasswordForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private resetApiService: AbstractResetApiService,
    private authFacadeService: AuthFacadeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // check if hash is valid
    const resetId = this.activatedRoute.snapshot.paramMap.get('hash');

    if (resetId) {
      this.resetApiService.verifyResetRequest({
        resetId
      }).pipe(
        catchError(() => this.router.navigate(['/redirect', {externalUrl: 'https://isleoflan.ch'}]))
      ).subscribe();

    } else {
      this.router.navigate(['/redirect', {externalUrl: 'https://isleoflan.ch'}]);
    }

    this.setPasswordForm = new UntypedFormGroup({
      password: new UntypedFormControl('', [Validators.required]),
      passwordConfirm: new UntypedFormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const resetId = this.activatedRoute.snapshot.paramMap.get('hash') as string;

    const executeResetDto: ExecuteResetDto = {
      resetId,
      password: this.setPasswordForm.value.password
    };
    this.resetApiService.executeReset(executeResetDto).pipe(
      first(),
      tap((payload) => {
        this.authFacadeService.setGlobalSessionId(payload.data.globalSessionId);
        this.router.navigate(['/redirect', {externalUrl: payload.data.redirect}]);
      })
    ).subscribe();

  }

}
