import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer, sessionInformationFeatureKey} from './session-information.reducer';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(sessionInformationFeatureKey, reducer)
  ]
})
export class SessionInformationStoreModule {
}
