import {InjectionToken, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {CanLoadIfGlobalSessionIdIsSetGuard} from './guards/can-load-if-global-session-id-is-set.guard';
import {CanLoadIfLoginRequestIdIsSetGuard} from './guards/can-load-if-login-request-id-is-set.guard';
import {InitLoginComponent} from './init-login/init-login.component';
import {RedirectComponent} from './redirect/redirect.component';
import {RegisterComponent} from './register/register.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: 'login',
    canLoad: [
      CanLoadIfLoginRequestIdIsSetGuard
    ],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'continue',
    canLoad: [
      CanLoadIfLoginRequestIdIsSetGuard,
      CanLoadIfGlobalSessionIdIsSetGuard,
    ],
    loadChildren: () => import('./continue/continue.module').then(m => m.ContinueModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./set-password/set-password.module').then(m => m.SetPasswordModule)
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'redirect',
    canActivate: [externalUrlProvider],
    component: RedirectComponent
  },

  {
    path: ':loginRequestId',
    component: InitLoginComponent,
  },
  {
    path: '**',
    component: RedirectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        if (externalUrl) {
          window.open(externalUrl, '_self');
        }
      },
    },
  ]
})
export class AppRoutingModule { }
