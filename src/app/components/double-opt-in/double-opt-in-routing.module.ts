import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerifyComponent} from "./verify/verify.component";
import {SuccessComponent} from "./success/success.component";
import {FailureComponent} from "./failure/failure.component";

const routes: Routes = [
  {
    path: 'success/:base64redirectUrl',
    component: SuccessComponent
  },
  {
    path: 'failure',
    component: FailureComponent,
  },
  {
    path: 'verify/:hash',
    component: VerifyComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleOptInRoutingModule {
}
