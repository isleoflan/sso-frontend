import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CardModule} from '../../layout/card/card.module';
import {RequestInformationStoreModule} from '../../store/request-information/request-information-store.module';
import {SessionInformationStoreModule} from '../../store/session-information/session-information-store.module';

import {ContinueRoutingModule} from './continue-routing.module';
import {ContinueComponent} from './continue.component';


@NgModule({
  declarations: [
    ContinueComponent
  ],
  imports: [
    CommonModule,
    ContinueRoutingModule,
    CardModule,
    RequestInformationStoreModule,
    SessionInformationStoreModule
  ]
})
export class ContinueModule {
}
