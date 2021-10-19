import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer, requestInformationFeatureKey} from './request-information.reducer';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(requestInformationFeatureKey, reducer)
  ]
})
export class RequestInformationStoreModule {
}
