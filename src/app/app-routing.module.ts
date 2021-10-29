import {InjectionToken, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {InitLoginComponent} from './components/init-login/init-login.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {GlobalSessionIdIsSetGuard} from './guards/global-session-id-is-set.guard';
import {LoginRequestIdIsSetGuard} from './guards/login-request-id-is-set.guard';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: 'login',
    canLoad: [
      LoginRequestIdIsSetGuard
    ],
    canActivateChild: [
      LoginRequestIdIsSetGuard
    ],
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'continue',
    canLoad: [
      LoginRequestIdIsSetGuard,
      GlobalSessionIdIsSetGuard,
    ],
    canActivateChild: [
      LoginRequestIdIsSetGuard,
      GlobalSessionIdIsSetGuard,
    ],
    loadChildren: () => import('./components/continue/continue.module').then(m => m.ContinueModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./components/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./components/set-password/set-password.module').then(m => m.SetPasswordModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
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
