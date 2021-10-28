import {createReducer, on} from '@ngrx/store';
import {setGlobalSessionId, setLoginRequestId, unsetGlobalSessionId} from './auth.actions';


export const authFeatureKey = 'auth';

export interface State {
  loginRequestId: string | null;
  globalSessionId: string | null;
}

export const initialState: State = {
  loginRequestId: null,
  globalSessionId: null
};


export const reducer = createReducer(
  initialState,
  on(setLoginRequestId, (state: State, {loginRequestId}) => {
    return {
      ...state,
      loginRequestId
    }
  }),
  on(setGlobalSessionId, (state: State, {globalSessionId}) => {
    return {
      ...state,
      globalSessionId
    }
  }),
  on(unsetGlobalSessionId, (state: State) => {
    return {
      ...state,
      globalSessionId: null
    }
  })
);

