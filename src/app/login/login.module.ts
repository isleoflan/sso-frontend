import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CardModule} from '../layout/card/card.module';
import {LoginRoutingModule} from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
