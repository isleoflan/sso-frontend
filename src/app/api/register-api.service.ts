import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {CheckEmailDto} from '../interfaces/dto/check-email-dto';
import {CheckUsernameDto} from '../interfaces/dto/check-username-dto';
import {RegisterNewAccountDto} from '../interfaces/dto/register-new-account-dto';
import {VerifyEmailDto} from '../interfaces/dto/verify-email-dto';
import {Payload} from '../interfaces/payload';
import {Availability} from '../interfaces/payload/availability';
import {AbstractRegisterApiService} from './abstract-register-api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService implements AbstractRegisterApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  checkEmail(checkEmailDto: CheckEmailDto): Observable<Payload<Availability>> {
    return this.http.get<Payload<Availability>>('/register/check/email', {params: {...checkEmailDto}}).pipe(first());
  }

  checkUsername(checkUsernameDto: CheckUsernameDto): Observable<Payload<Availability>> {
    return this.http.get<Payload<Availability>>('/register/check/username', {params: {...checkUsernameDto}}).pipe(first());
  }

  registerNewAccount(registerNewAccountDto: RegisterNewAccountDto): Observable<Payload<null>> {
    return this.http.post<Payload<null>>('/register/new', {registerNewAccountDto}).pipe(first());
  }

  verifyEmail(verifyEmailDDto: VerifyEmailDto): Observable<Payload<null>> {
    return this.http.patch<Payload<null>>('/register/verify/email', {verifyEmailDDto}).pipe(first());
  }

}
