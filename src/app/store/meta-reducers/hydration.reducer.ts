import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {AppState} from '../app.state';

export const hydrationMetaReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {

  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const globalSessionId = localStorage.getItem('iol-global-session-id') || null;
      const loginRequestId = sessionStorage.getItem('iol-login-request-id') || null;

      return {
        ...state,
        auth: {
          globalSessionId,
          loginRequestId
        }
      } as AppState;
    }
    return reducer(state, action)
  };
}
