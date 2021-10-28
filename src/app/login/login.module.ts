import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CardModule} from '../layout/card/card.module';
import {AuthStoreModule} from '../store/auth/auth-store.module';
import {RequestInformationStoreModule} from '../store/request-information/request-information-store.module';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    ReactiveFormsModule,
    AuthStoreModule,
    RequestInformationStoreModule
  ]
})
export class LoginModule { }
