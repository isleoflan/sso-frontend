import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {setGlobalSessionId, setLoginRequestId, unsetGlobalSessionId} from './auth.actions';


@Injectable()
export class AuthEffects {

  setLoginRequestId$ = createEffect(() => this.actions$.pipe(
    ofType(setLoginRequestId.type),
    map(({loginRequestId}) => {
      window.sessionStorage.setItem('iol-login-request-id', loginRequestId);
    }),
  ), {dispatch: false});

  setGlobalSessionId$ = createEffect(() => this.actions$.pipe(
    ofType(setGlobalSessionId.type),
    map(({globalSessionId}) => {
      window.localStorage.setItem('iol-global-session-id', globalSessionId);
    }),
  ), {dispatch: false});

  unsetGlobalSessionId$ = createEffect(() => this.actions$.pipe(
    ofType(unsetGlobalSessionId.type),
    map(() => {
      window.localStorage.removeItem('iol-global-session-id');
    }),
  ), {dispatch: false});

  constructor(private actions$: Actions) {
  }
}
