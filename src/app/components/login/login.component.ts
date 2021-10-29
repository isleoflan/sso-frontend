import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginWithUserCredentialsDto} from '../../interfaces/dto/login-with-user-credentials-dto';
import {AuthFacadeService} from '../../store/auth/auth-facade.service';
import {RequestInformationFacadeService} from '../../store/request-information/request-information-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  requestInformation$ = this.requestInformationFacadeService.requestInformation$;
  loginForm: FormGroup = new FormGroup({});


  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authFacadeService.unsetGlobalSessionId();

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
      this.authFacadeService.loginWithUserCredentials(loginWithUserCredentialsDto).subscribe((payload) => {
        this.router.navigate(['/redirect', {externalUrl: payload.data.redirect}], {
          skipLocationChange: true
        });
      });
    }
  }

}
