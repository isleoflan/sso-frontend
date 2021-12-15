import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DoubleOptInRoutingModule} from './double-opt-in-routing.module';
import {VerifyComponent} from './verify/verify.component';
import {CardModule} from "../../layout/card/card.module";
import {SuccessComponent} from './success/success.component';
import {FailureComponent} from './failure/failure.component';


@NgModule({
  declarations: [
    VerifyComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    CommonModule,
    DoubleOptInRoutingModule,
    CardModule
  ]
})
export class DoubleOptInModule {
}
