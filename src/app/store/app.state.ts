import {AuthStoreReducer} from './auth';
import {RequestInformationStoreReducer} from './request-information';
import {SessionInformationStoreReducer} from './session-information';

export interface AppState {
  auth: AuthStoreReducer.State;
  requestInformation: RequestInformationStoreReducer.State;
  sessionInformation: SessionInformationStoreReducer.State;
}
