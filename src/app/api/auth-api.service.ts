import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {LoginWithSessionIdDto} from '../interfaces/dto/login-with-session-id-dto';
import {LoginWithUserCredentialsDto} from '../interfaces/dto/login-with-user-credentials-dto';
import {RequestInformationDto} from '../interfaces/dto/request-information-dto';
import {SessionInformationDto} from '../interfaces/dto/session-information-dto';
import {Payload} from '../interfaces/payload';
import {Redirect} from '../interfaces/payload/redirect';
import {RequestInformation} from '../interfaces/payload/request-information';
import {SessionInformation} from '../interfaces/payload/session-information';
import {SessionRedirect} from '../interfaces/payload/session-redirect';
import {AbstractAuthApiService} from './abstract-auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AbstractAuthApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  loginWithSessionId(loginWithSessionIdDto: LoginWithSessionIdDto): Observable<Payload<Redirect>> {
    return this.http.post<Payload<Redirect>>('/auth/login', loginWithSessionIdDto).pipe(first());
  }

  loginWithUserCredentials(loginWithUserCredentialsDto: LoginWithUserCredentialsDto): Observable<Payload<SessionRedirect>> {
    return this.http.post<Payload<SessionRedirect>>('/auth/login', loginWithUserCredentialsDto).pipe(first());
  }

  requestInformation(requestInformationDto: RequestInformationDto): Observable<Payload<RequestInformation>> {
    return this.http.get<Payload<RequestInformation>>('/auth/request/info', {params: {...requestInformationDto}}).pipe(first());
  }

  sessionInformation(sessionInformationDto: SessionInformationDto): Observable<Payload<SessionInformation>> {
    return this.http.get<Payload<SessionInformation>>('/auth/session/info', {params: {...sessionInformationDto}}).pipe(first());
  }
}
