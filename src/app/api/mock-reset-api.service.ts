import {Injectable} from '@angular/core';

import * as faker from 'faker';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {ExecuteResetDto} from '../interfaces/dto/execute-reset-dto';
import {RequestResetDto} from '../interfaces/dto/request-reset-dto';
import {VerifyResetRequestDto} from '../interfaces/dto/verify-reset-request-dto';
import {Payload} from '../interfaces/payload';
import {SessionRedirect} from '../interfaces/payload/session-redirect';
import {AbstractResetApiService} from './abstract-reset-api.service';

@Injectable({
  providedIn: 'root'
})
export class MockResetApiService implements AbstractResetApiService {

  executeReset(executeResetDto: ExecuteResetDto): Observable<Payload<SessionRedirect>> {
    const data: SessionRedirect = {
      globalSessionId: faker.datatype.uuid(),
      redirect: environment.fallbackUrl
    }
    return of({data} as Payload<SessionRedirect>);
  }

  requestReset(requestResetDto: RequestResetDto): Observable<Payload<null>> {
    return of({data: null} as Payload<null>);
  }

  verifyResetRequest(verifyResetRequestDto: VerifyResetRequestDto): Observable<Payload<null>> {
    return of({data: null} as Payload<null>);
  }
}
