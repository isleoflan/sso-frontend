import {HttpErrorResponse} from '@angular/common/http';
import {createReducer, on} from '@ngrx/store';
import {SessionInformation} from '../../interfaces/payload/session-information';
import {
  loadSessionInformation,
  loadSessionInformationCancel,
  loadSessionInformationFailure,
  loadSessionInformationSuccess
} from './session-information.actions';


export const sessionInformationFeatureKey = 'sessionInformation';

export interface State {
  sessionInformation: SessionInformation | null;
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;

}

export const initialState: State = {
  sessionInformation: null,
  isLoading: false,
  hasLoaded: false,
  error: null
};


export const reducer = createReducer(
  initialState,
  on(loadSessionInformation, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    }
  }),
  on(loadSessionInformationSuccess, (state: State, {payload}) => {
    return {
      ...state,
      sessionInformation: payload.data,
      isLoading: false,
      hasLoaded: true,
      error: null
    }
  }),
  on(loadSessionInformationFailure, (state: State, {error}) => {
    return {
      ...state,
      sessionInformation: null,
      isLoading: false,
      hasLoaded: false,
      error
    }
  }),
  on(loadSessionInformationCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
    }
  })
);
