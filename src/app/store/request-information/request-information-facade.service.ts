import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, filter, finalize, share, startWith, switchMap, tap} from 'rxjs/operators';
import {AbstractAuthApiService} from '../../api/abstract-auth-api.service';
import {RequestInformation} from '../../interfaces/payload/request-information';
import {AppState} from '../app.state';
import {AuthStoreSelectors} from '../auth';
import {FacadeService} from '../facade.service';
import {RequestInformationStoreActions, RequestInformationStoreSelectors} from './index';

@Injectable({
  providedIn: 'root'
})
export class RequestInformationFacadeService extends FacadeService {

  private requireRequestInformation$ = this.store.select(AuthStoreSelectors.selectLoginRequestId).pipe(
    filter((data) => typeof data !== null),
    switchMap((loginRequestId) => this.store.select(RequestInformationStoreSelectors.selectRequestInformationState).pipe(
        finalize(() => this.store.dispatch({type: RequestInformationStoreActions.loadRequestInformationCancel.type})),
        filter(({isLoading, hasLoaded, error}) => !isLoading && !hasLoaded && error === null),
        tap(() => this.store.dispatch({type: RequestInformationStoreActions.loadRequestInformation.type})),
        switchMap(() => this.authApiService.requestInformation({loginRequestId: loginRequestId!}).pipe(
          tap((payload) => this.store.dispatch({
            type: RequestInformationStoreActions.loadRequestInformationSuccess.type,
            payload
          })),
          catchError((error) => {
            this.store.dispatch({type: RequestInformationStoreActions.loadRequestInformationFailure.type, error});
            return of(EMPTY);
          })
        )),
        share()
      )
    ));

  requestInformation$: Observable<RequestInformation | null> = this.muteFirst(
    this.requireRequestInformation$.pipe(startWith(null)),
    this.store.select(RequestInformationStoreSelectors.selectRequestInformation)
  );

  constructor(
    private store: Store<AppState>,
    private authApiService: AbstractAuthApiService
  ) {
    super();
  }


}
