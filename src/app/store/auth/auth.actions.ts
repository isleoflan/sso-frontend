import {createAction, props} from '@ngrx/store';

export const setLoginRequestId = createAction(
  '[Auth] Set Login Request Id',
  props<{ loginRequestId: string | null }>()
);

export const setGlobalSessionId = createAction(
  '[Auth] Set Global Session Id',
  props<{ globalSessionId: string | null }>()
);
