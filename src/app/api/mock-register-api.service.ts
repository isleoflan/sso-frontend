import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CheckEmailDto} from '../interfaces/dto/check-email-dto';
import {CheckUsernameDto} from '../interfaces/dto/check-username-dto';
import {RegisterNewAccountDto} from '../interfaces/dto/register-new-account-dto';
import {VerifyEmailDto} from '../interfaces/dto/verify-email-dto';
import {Payload} from '../interfaces/payload';
import {Availability} from '../interfaces/payload/availability';
import {AbstractRegisterApiService} from './abstract-register-api.service';
import {SessionRedirect} from "../interfaces/payload/session-redirect";
import {environment} from "../../environments/environment";
import * as faker from "faker";

@Injectable({
  providedIn: 'root'
})
export class MockRegisterApiService implements AbstractRegisterApiService {

  checkEmail(checkEmailDto: CheckEmailDto): Observable<Payload<Availability>> {
    const data: Availability = {
      available: true
    }
    return of({data} as Payload<Availability>);
  }

  checkUsername(checkUsernameDto: CheckUsernameDto): Observable<Payload<Availability>> {
    const data: Availability = {
      available: true
    }
    return of({data} as Payload<Availability>);
  }

  registerNewAccount(registerNewAccountDto: RegisterNewAccountDto): Observable<Payload<null>> {
    return of({data: null} as Payload<null>);
  }

  verifyEmail(verifyEmailDDto: VerifyEmailDto): Observable<Payload<SessionRedirect>> {
    const data: SessionRedirect = {
      globalSessionId: faker.datatype.uuid(),
      redirect: environment.fallbackUrl
    }
    return of({data} as Payload<SessionRedirect>);
  }
}
