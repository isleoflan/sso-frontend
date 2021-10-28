import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {AppState} from '../app.state';
import {authFeatureKey, State} from './auth.reducer';

const getLoginRequestId = (state: State): string | null => state.loginRequestId;
const getGlobalSessionId = (state: State): string | null => state.globalSessionId;

export const selectAuthState: MemoizedSelector<AppState, State> = createFeatureSelector(authFeatureKey);

export const selectLoginRequestId: MemoizedSelector<AppState, string | null> = createSelector(
  selectAuthState,
  getLoginRequestId
);

export const selectGlobalSessionId: MemoizedSelector<AppState, string | null> = createSelector(
  selectAuthState,
  getGlobalSessionId
);
