import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { createErrorHandler, TraceService } from "@sentry/angular";
import { AbstractAuthApiService } from './api/abstract-auth-api.service';
import { AbstractRegisterApiService } from './api/abstract-register-api.service';
import { AbstractResetApiService } from './api/abstract-reset-api.service';

import { AuthApiService } from './api/auth-api.service';
import { RegisterApiService } from './api/register-api.service';
import { ResetApiService } from './api/reset-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitLoginComponent } from './components/init-login/init-login.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { httpInterceptorProviders } from './interceptors';
import { CardModule } from './layout/card/card.module';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    InitLoginComponent
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
    {provide: ErrorHandler, useValue: createErrorHandler({showDialog: true})},
    {provide: TraceService, deps: [Router]},
    {
      provide: APP_INITIALIZER, useFactory: () => () => {
      }, deps: [TraceService], multi: true
    },
    httpInterceptorProviders,
    {provide: AbstractAuthApiService, useClass: AuthApiService},
    {provide: AbstractRegisterApiService, useClass: RegisterApiService},
    {provide: AbstractResetApiService, useClass: ResetApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
