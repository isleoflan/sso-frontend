import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {AuthStoreModule} from './auth/auth-store.module';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {}),
    AuthStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
  ]
})
export class AppStoreModule {
}
