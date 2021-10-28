import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {Payload} from '../../interfaces/payload';
import {SessionInformation} from '../../interfaces/payload/session-information';

export const loadSessionInformation = createAction(
  '[SessionInformation] Load SessionInformation'
);

export const loadSessionInformationSuccess = createAction(
  '[SessionInformation] Load SessionInformation Success',
  props<{ payload: Payload<SessionInformation> }>()
);

export const loadSessionInformationFailure = createAction(
  '[SessionInformation] Load SessionInformation Failure',
  props<{ error: HttpErrorResponse }>()
);
export const loadSessionInformationCancel = createAction(
  '[SessionInformation] Load SessionInformation Cancel'
);
