import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {SessionInformation} from '../../interfaces/payload/session-information';
import {AppState} from '../app.state';
import {sessionInformationFeatureKey, State} from './session-information.reducer';

const getSessionInformation = (state: State): SessionInformation | null => state.sessionInformation;

export const selectSessionInformationState: MemoizedSelector<AppState, State> = createFeatureSelector(sessionInformationFeatureKey);

export const selectSessionInformation: MemoizedSelector<AppState, SessionInformation | null> = createSelector(
  selectSessionInformationState,
  getSessionInformation
);
