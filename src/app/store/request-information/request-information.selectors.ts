import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {RequestInformation} from '../../interfaces/payload/request-information';
import {AppState} from '../app.state';
import {requestInformationFeatureKey, State} from './request-information.reducer';

const getRequestInformation = (state: State): RequestInformation | null => state.requestInformation;

export const selectRequestInformationState: MemoizedSelector<AppState, State> = createFeatureSelector(requestInformationFeatureKey);

export const selectRequestInformation: MemoizedSelector<AppState, RequestInformation | null> = createSelector(
  selectRequestInformationState,
  getRequestInformation
);
