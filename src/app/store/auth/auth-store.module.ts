import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {authFeatureKey, reducer} from './auth.reducer';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(authFeatureKey, reducer)
  ]
})
export class AuthStoreModule {
}
