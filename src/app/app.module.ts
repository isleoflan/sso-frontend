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
import {InitLoginComponent} from './components/init-login/init-login.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {CardModule} from './layout/card/card.module';
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
    // Mock Services for test data
    {provide: AbstractAuthApiService, useClass: MockAuthApiService},
    {provide: AbstractRegisterApiService, useClass: MockRegisterApiService},
    {provide: AbstractResetApiService, useClass: MockResetApiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
