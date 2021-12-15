import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CardModule} from '../../layout/card/card.module';
import {AuthStoreModule} from '../../store/auth/auth-store.module';
import {RequestInformationStoreModule} from '../../store/request-information/request-information-store.module';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {ResetPasswordComponent} from './reset-password.component';
import {SuccessComponent} from './success/success.component';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    CardModule,
    ReactiveFormsModule,
    AuthStoreModule,
    RequestInformationStoreModule,
  ]
})
export class ResetPasswordModule { }
