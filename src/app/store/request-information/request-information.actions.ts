import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {Payload} from '../../interfaces/payload';
import {RequestInformation} from '../../interfaces/payload/request-information';

export const loadRequestInformation = createAction(
  '[RequestInformation] Load RequestInformation'
);

export const loadRequestInformationSuccess = createAction(
  '[RequestInformation] Load RequestInformation Success',
  props<{ payload: Payload<RequestInformation> }>()
);

export const loadRequestInformationFailure = createAction(
  '[RequestInformation] Load RequestInformation Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadRequestInformationCancel = createAction(
  '[RequestInformation] Load RequestInformation Cancel',
);
