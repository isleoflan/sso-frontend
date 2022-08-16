import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginWithUserCredentialsDto } from '../../interfaces/dto/login-with-user-credentials-dto';
import { LoginForm } from "../../interfaces/form/login-form";
import { ErrorPayload } from '../../interfaces/payload';
import { AuthFacadeService } from '../../store/auth/auth-facade.service';
import { RequestInformationFacadeService } from '../../store/request-information/request-information-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  requestInformation$ = this.requestInformationFacadeService.requestInformation$;
  apiErrors$: Subject<ErrorPayload[]> = new Subject<ErrorPayload[]>();

  loginForm = new FormGroup<LoginForm>({
    username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
  });


  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authFacadeService.unsetGlobalSessionId();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authFacadeService.loginRequestId$.subscribe((loginRequestId) => {
        const loginWithUserCredentialsDto: LoginWithUserCredentialsDto = {
          username: this.loginForm.value.username!,
          password: this.loginForm.value.password!,
          loginRequestId
        }
        this.authFacadeService.loginWithUserCredentials(loginWithUserCredentialsDto).pipe(
          tap((payload) => {
            this.router.navigate(['/redirect', {externalUrl: payload.data.redirect}], {
              skipLocationChange: true
            }).catch(() => {
            });
          }),
          catchError((error) => {
            this.apiErrors$.next(error.error.errors);
            return of(EMPTY);
          })
        ).subscribe();
      })
    }
  }

}
