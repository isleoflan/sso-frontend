import {HttpErrorResponse} from '@angular/common/http';
import {createReducer, on} from '@ngrx/store';
import {RequestInformation} from '../../interfaces/payload/request-information';
import {
  loadRequestInformation,
  loadRequestInformationCancel,
  loadRequestInformationFailure,
  loadRequestInformationSuccess
} from './request-information.actions';


export const requestInformationFeatureKey = 'requestInformation';

export interface State {
  requestInformation: RequestInformation | null;
  isLoading: boolean,
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  requestInformation: null,
  isLoading: false,
  hasLoaded: false,
  error: null
};


export const reducer = createReducer(
  initialState,
  on(loadRequestInformation, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    }
  }),
  on(loadRequestInformationSuccess, (state: State, {payload}) => {
    return {
      ...state,
      requestInformation: payload.data,
      isLoading: false,
      hasLoaded: true,
      error: null
    }
  }),
  on(loadRequestInformationFailure, (state: State, {error}) => {
    return {
      ...state,
      requestInformation: null,
      isLoading: false,
      hasLoaded: false,
      error
    }
  }),
  on(loadRequestInformationCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
    }
  })
);

