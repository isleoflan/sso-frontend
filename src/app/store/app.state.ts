import {AuthStoreReducer} from './auth';
import {RequestInformationStoreReducer} from './request-information';

export interface AppState {
  auth: AuthStoreReducer.State;
  requestInformation: RequestInformationStoreReducer.State;
}
