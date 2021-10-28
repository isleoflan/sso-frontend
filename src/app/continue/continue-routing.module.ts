import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContinueComponent} from './continue.component';

const routes: Routes = [
  {
    path: '',
    component: ContinueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinueRoutingModule {
}
