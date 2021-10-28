import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthFacadeService} from '../store/auth/auth-facade.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRequestIdIsSetGuard implements CanLoad, CanActivateChild {

  isLoginRequestIdSet$: Observable<boolean> = this.authFacadeService.loginRequestId$.pipe(
    map((result) => typeof result === 'string')
  );

  constructor(
    private authFacadeService: AuthFacadeService
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isLoginRequestIdSet$;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoginRequestIdSet$;
  }
}
