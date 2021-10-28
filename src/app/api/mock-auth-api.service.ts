import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
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
export class MockAuthApiService implements AbstractAuthApiService {

  loginWithSessionId(loginWithSessionIdDto: LoginWithSessionIdDto): Observable<Payload<Redirect>> {
    const data: Redirect = {
      redirect: environment.fallbackUrl
    }
    return of({data} as Payload<Redirect>);
  }

  loginWithUserCredentials(loginWithUserCredentialsDto: LoginWithUserCredentialsDto): Observable<Payload<SessionRedirect>> {
    const data: SessionRedirect = {
      globalSessionId: faker.datatype.uuid(),
      redirect: environment.fallbackUrl
    }
    return of({data} as Payload<SessionRedirect>);
  }

  requestInformation(requestInformationDto: RequestInformationDto): Observable<Payload<RequestInformation>> {
    const data: RequestInformation = {
      id: faker.datatype.uuid(),
      title: faker.lorem.word(),
      description: faker.lorem.sentences(3),
      baseUrl: environment.fallbackUrl,
      icon: faker.image.avatar()
    }
    return of({data} as Payload<RequestInformation>);
  }

  sessionInformation(sessionInformationDto: SessionInformationDto): Observable<Payload<SessionInformation>> {
    const data: SessionInformation = {
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
    }
    return of({data} as Payload<SessionInformation>);
  }
}
