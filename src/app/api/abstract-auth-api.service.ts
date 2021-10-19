import {Observable} from 'rxjs';
import {LoginWithSessionIdDto} from '../interfaces/dto/login-with-session-id-dto';
import {LoginWithUserCredentialsDto} from '../interfaces/dto/login-with-user-credentials-dto';
import {RequestInformationDto} from '../interfaces/dto/request-information-dto';
import {SessionInformationDto} from '../interfaces/dto/session-information-dto';
import {Payload} from '../interfaces/payload';
import {RequestInformation} from '../interfaces/payload/request-information';
import {SessionInformation} from '../interfaces/payload/session-information';
import {Redirect} from '../interfaces/payload/redirect';
import {SessionRedirect} from '../interfaces/payload/session-redirect';


export abstract class AbstractAuthApiService {

  public abstract requestInformation(requestInformationDto: RequestInformationDto): Observable<Payload<RequestInformation>>;
  public abstract sessionInformation(sessionInformationDto: SessionInformationDto): Observable<Payload<SessionInformation>>;
  public abstract loginWithSessionId(loginWithSessionIdDto: LoginWithSessionIdDto): Observable<Payload<Redirect>>;
  public abstract loginWithUserCredentials(loginWithUserCredentialsDto: LoginWithUserCredentialsDto): Observable<Payload<SessionRedirect>>;
}
