import {Observable} from 'rxjs';
import {CheckEmailDto} from '../interfaces/dto/check-email-dto';
import {CheckUsernameDto} from '../interfaces/dto/check-username-dto';
import {RegisterNewAccountDto} from '../interfaces/dto/register-new-account-dto';
import {VerifyEmailDto} from '../interfaces/dto/verify-email-dto';
import {Payload} from '../interfaces/payload';
import {Availability} from '../interfaces/payload/availability';


export abstract class AbstractRegisterApiService {
  public abstract checkEmail(checkEmailDto: CheckEmailDto): Observable<Payload<Availability>>;

  public abstract checkUsername(checkUsernameDto: CheckUsernameDto): Observable<Payload<Availability>>;

  public abstract registerNewAccount(registerNewAccountDto: RegisterNewAccountDto): Observable<Payload<null>>;

  public abstract verifyEmail(verifyEmailDDto: VerifyEmailDto): Observable<Payload<null>>;
}
