import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, filter, finalize, share, startWith, switchMap, tap} from 'rxjs/operators';
import {AbstractAuthApiService} from '../../api/abstract-auth-api.service';
import {SessionInformation} from '../../interfaces/payload/session-information';
import {AppState} from '../app.state';
import {AuthStoreSelectors} from '../auth';
import {FacadeService} from '../facade.service';
import {SessionInformationStoreActions, SessionInformationStoreSelectors} from './index';

@Injectable({
  providedIn: 'root'
})
export class SessionInformationFacadeService extends FacadeService {

  private requireSessionInformation$ = this.store.select(AuthStoreSelectors.selectGlobalSessionId).pipe(
    filter((globalSessionId) => globalSessionId !== null),
    switchMap((globalSessionId) => this.store.select(SessionInformationStoreSelectors.selectSessionInformationState).pipe(
      finalize(() => this.store.dispatch({type: SessionInformationStoreActions.loadSessionInformationCancel.type})),
      filter(({isLoading, hasLoaded, error}) => !isLoading && !hasLoaded && error === null),
      tap(() => this.store.dispatch({type: SessionInformationStoreActions.loadSessionInformation.type})),
      switchMap(() => this.authApiService.sessionInformation({globalSessionId: globalSessionId!}).pipe(
        tap((payload) => this.store.dispatch({
          type: SessionInformationStoreActions.loadSessionInformationSuccess.type,
          payload
        })),
        catchError((error) => {
          this.store.dispatch({type: SessionInformationStoreActions.loadSessionInformationFailure.type, error});
          return of(EMPTY);
        })
      )),
      share()
    ))
  );

  sessionInformation$: Observable<SessionInformation | null> = this.muteFirst(
    this.requireSessionInformation$.pipe(startWith(null)),
    this.store.select(SessionInformationStoreSelectors.selectSessionInformation)
  );

  constructor(
    private store: Store<AppState>,
    private authApiService: AbstractAuthApiService
  ) {
    super();
  }


}
