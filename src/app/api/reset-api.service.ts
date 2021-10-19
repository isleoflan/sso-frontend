import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {ExecuteResetDto} from '../interfaces/dto/execute-reset-dto';
import {RequestResetDto} from '../interfaces/dto/request-reset-dto';
import {VerifyResetRequestDto} from '../interfaces/dto/verify-reset-request-dto';
import {Payload} from '../interfaces/payload';
import {SessionRedirect} from '../interfaces/payload/session-redirect';
import {MockResetApiService} from './mock-reset-api.service';

@Injectable({
  providedIn: 'root'
})
export class ResetApiService implements MockResetApiService{

  constructor(
    private http: HttpClient
  ) { }

  executeReset(executeResetDto: ExecuteResetDto): Observable<Payload<SessionRedirect>> {
    return this.http.post<Payload<SessionRedirect>>('/v1/reset/execute', {executeResetDto}).pipe(first());
  }

  requestReset(requestResetDto: RequestResetDto): Observable<Payload<null>> {
    return this.http.post<Payload<null>>('/v1/reset/request', {requestResetDto}).pipe(first());
  }

  verifyResetRequest(verifyResetRequestDto: VerifyResetRequestDto): Observable<Payload<null>> {
    return this.http.get<Payload<null>>('/v1/reset/verify', {params: {...verifyResetRequestDto}}).pipe(first());
  }

}
