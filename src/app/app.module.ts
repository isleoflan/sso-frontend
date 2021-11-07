import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {AbstractAuthApiService} from './api/abstract-auth-api.service';
import {AbstractRegisterApiService} from './api/abstract-register-api.service';
import {AbstractResetApiService} from './api/abstract-reset-api.service';

import {AuthApiService} from './api/auth-api.service';
import {RegisterApiService} from './api/register-api.service';
import {ResetApiService} from './api/reset-api.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InitLoginComponent} from './components/init-login/init-login.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {httpInterceptorProviders} from './interceptors';
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
    HttpClientModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    httpInterceptorProviders,
    {provide: AbstractAuthApiService, useClass: AuthApiService},
    {provide: AbstractRegisterApiService, useClass: RegisterApiService},
    {provide: AbstractResetApiService, useClass: ResetApiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
