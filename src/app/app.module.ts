import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {AbstractAuthApiService} from './api/abstract-auth-api.service';
import {AbstractRegisterApiService} from './api/abstract-register-api.service';
import {AbstractResetApiService} from './api/abstract-reset-api.service';
import {MockAuthApiService} from './api/mock-auth-api.service';
import {MockRegisterApiService} from './api/mock-register-api.service';
import {MockResetApiService} from './api/mock-reset-api.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InitLoginComponent} from './init-login/init-login.component';
import {CardModule} from './layout/card/card.module';
import {RedirectComponent} from './redirect/redirect.component';
import {AppStoreModule} from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    InitLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    CardModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    {provide: AbstractAuthApiService, useClass: MockAuthApiService},
    {provide: AbstractRegisterApiService, useClass: MockRegisterApiService},
    {provide: AbstractResetApiService, useClass: MockResetApiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
