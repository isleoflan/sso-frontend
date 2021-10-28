import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AbstractAuthApiService} from '../../api/abstract-auth-api.service';
import {LoginWithUserCredentialsDto} from '../../interfaces/dto/login-with-user-credentials-dto';
import {Payload} from '../../interfaces/payload';
import {SessionRedirect} from '../../interfaces/payload/session-redirect';
import {AppState} from '../app.state';
import {AuthStoreActions, AuthStoreSelectors} from './index';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  authState$ = this.store.select(AuthStoreSelectors.selectAuthState);
  loginRequestId$ = this.store.select(AuthStoreSelectors.selectLoginRequestId);
  globalSessionId$ = this.store.select(AuthStoreSelectors.selectGlobalSessionId);

  constructor(
    private store: Store<AppState>,
    private authApiService: AbstractAuthApiService
  ) {
  }

  setLoginRequestId(loginRequestId: string | null): void {
    this.store.dispatch({type: AuthStoreActions.setLoginRequestId.type, loginRequestId});
  }

  setGlobalSessionId(globalSessionId: string | null): void {
    this.store.dispatch({type: AuthStoreActions.setGlobalSessionId.type, globalSessionId});
  }

  loginWithUserCredentials(loginWithUserCredentialsDto: LoginWithUserCredentialsDto): Observable<Payload<SessionRedirect>> {
    return this.authApiService.loginWithUserCredentials(loginWithUserCredentialsDto).pipe(
      tap((payload) => {
        const globalSessionId = payload.data.globalSessionId;
        this.store.dispatch({type: AuthStoreActions.setGlobalSessionId.type, globalSessionId})
      })
    )
  }
}
