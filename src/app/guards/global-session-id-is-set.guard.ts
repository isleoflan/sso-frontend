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
export class GlobalSessionIdIsSetGuard implements CanLoad, CanActivateChild {

  private isGlobalSessionIdSet$: Observable<boolean> = this.authFacadeService.globalSessionId$.pipe(
    map((result) => typeof result === 'string')
  );

  constructor(
    private authFacadeService: AuthFacadeService
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isGlobalSessionIdSet$;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isGlobalSessionIdSet$;
  }

}
