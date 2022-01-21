import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../../layout/card/card.module';
import { SetPasswordRoutingModule } from './set-password-routing.module';
import { SetPasswordComponent } from './set-password.component';


@NgModule({
  declarations: [
    SetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    SetPasswordRoutingModule
  ]
})
export class SetPasswordModule { }
