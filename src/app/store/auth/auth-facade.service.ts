import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
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
    private store: Store<AppState>
  ) {
  }

  setLoginRequestId(loginRequestId: string | null): void {
    this.store.dispatch({type: AuthStoreActions.setLoginRequestId.type, loginRequestId});
  }

  setGlobalSessionId(globalSessionId: string | null): void {
    this.store.dispatch({type: AuthStoreActions.setGlobalSessionId.type, globalSessionId});
  }
}
