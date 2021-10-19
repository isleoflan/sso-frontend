import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {}),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
  ]
})
export class AppStoreModule {
}
