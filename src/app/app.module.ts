import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AbstractAuthApiService} from './api/abstract-auth-api.service';
import {AbstractRegisterApiService} from './api/abstract-register-api.service';
import {AbstractResetApiService} from './api/abstract-reset-api.service';
import {MockAuthApiService} from './api/mock-auth-api.service';
import {MockRegisterApiService} from './api/mock-register-api.service';
import {MockResetApiService} from './api/mock-reset-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: AbstractAuthApiService, useClass: MockAuthApiService},
    {provide: AbstractRegisterApiService, useClass: MockRegisterApiService},
    {provide: AbstractResetApiService, useClass: MockResetApiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
