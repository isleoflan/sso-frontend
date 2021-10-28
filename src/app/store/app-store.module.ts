import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {AuthStoreModule} from './auth/auth-store.module';
import {metaReducers} from './meta-reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {metaReducers}),
    AuthStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
  ]
})
export class AppStoreModule {
}
