import {Observable} from 'rxjs';
import {ExecuteResetDto} from '../interfaces/dto/execute-reset-dto';
import {RequestResetDto} from '../interfaces/dto/request-reset-dto';
import {VerifyResetRequestDto} from '../interfaces/dto/verify-reset-request-dto';
import {Payload} from '../interfaces/payload';
import {SessionRedirect} from '../interfaces/payload/session-redirect';


export abstract class AbstractResetApiService {

  public abstract requestReset(requestResetDto: RequestResetDto): Observable<Payload<null>>;
  public abstract verifyResetRequest(verifyResetRequestDto: VerifyResetRequestDto): Observable<Payload<null>>;
  public abstract executeReset(executeResetDto: ExecuteResetDto): Observable<Payload<SessionRedirect>>;
}
