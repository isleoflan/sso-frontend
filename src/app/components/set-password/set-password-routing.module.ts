import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetPasswordComponent} from './set-password.component';
import {SuccessComponent} from './success/success.component';

const routes: Routes = [
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: ':hash',
    component: SetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetPasswordRoutingModule { }
