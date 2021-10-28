import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {setLoginRequestId} from './auth.actions';


@Injectable()
export class AuthEffects {

  setLoginRequestId$ = createEffect(() => this.actions$.pipe(
    ofType(setLoginRequestId.type),
    map(({loginRequestId}) => {
      window.sessionStorage.setItem('iol-login-request-id', loginRequestId);
    }),
  ), {dispatch: false});

  constructor(private actions$: Actions) {
  }
}
