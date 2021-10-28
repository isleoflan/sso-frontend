import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AuthEffects} from './auth.effects';
import {authFeatureKey, reducer} from './auth.reducer';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthStoreModule {
}
