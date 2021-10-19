import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {AbstractAuthApiService} from '../api/abstract-auth-api.service';
import {LoginWithUserCredentialsDto} from '../interfaces/dto/login-with-user-credentials-dto';
import {RequestInformationFacadeService} from '../store/request-information/request-information-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  requestInformation$ = this.requestInformationFacadeService.requestInformation$({loginRequestId: 'asdfasdfasdf'});
  loginForm: FormGroup = new FormGroup({});


  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
    private authApiService: AbstractAuthApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginWithUserCredentialsDto: LoginWithUserCredentialsDto = {
        ...this.loginForm.value,
        loginRequestId: '',
      }
      this.authApiService.loginWithUserCredentials(loginWithUserCredentialsDto).pipe(
        tap((payload) => {
          this.router.navigate(['/redirect', {externalUrl: payload.data.redirect}], {
            skipLocationChange: true
          });
        })
      ).subscribe()
    }
  }

}
