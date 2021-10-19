import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, filter, finalize, share, startWith, switchMap, tap} from 'rxjs/operators';
import {AbstractAuthApiService} from '../../api/abstract-auth-api.service';
import {RequestInformationDto} from '../../interfaces/dto/request-information-dto';
import {RequestInformation} from '../../interfaces/payload/request-information';
import {AppState} from '../app.state';
import {FacadeService} from '../facade.service';
import {RequestInformationStoreActions, RequestInformationStoreSelectors} from './index';

@Injectable({
  providedIn: 'root'
})
export class RequestInformationFacadeService extends FacadeService {

  constructor(
    private store: Store<AppState>,
    private authApiService: AbstractAuthApiService
  ) {
    super();
  }

  requestInformation$ = (requestInformationDto: RequestInformationDto): Observable<RequestInformation | null> => this.muteFirst(
    this.requireRequestInformation$(requestInformationDto).pipe(startWith(null)),
    this.store.select(RequestInformationStoreSelectors.selectRequestInformation)
  );

  private requireRequestInformation$ = (requestInformationDto: RequestInformationDto) =>
    this.store.select(RequestInformationStoreSelectors.selectRequestInformationState).pipe(
      finalize(() => this.store.dispatch({type: RequestInformationStoreActions.loadRequestInformationCancel.type})),
      filter(({isLoading, hasLoaded, error}) => !isLoading && !hasLoaded && error === null),
      tap(() => this.store.dispatch({type: RequestInformationStoreActions.loadRequestInformation.type})),
      switchMap(() => this.authApiService.requestInformation(requestInformationDto).pipe(
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
    );
}
