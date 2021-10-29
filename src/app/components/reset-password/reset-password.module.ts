import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CardModule} from '../../layout/card/card.module';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {ResetPasswordComponent} from './reset-password.component';


@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class ResetPasswordModule { }
