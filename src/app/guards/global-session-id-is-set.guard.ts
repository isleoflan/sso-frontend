import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
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
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.isGlobalSessionIdSet();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.isGlobalSessionIdSet();
  }

  private isGlobalSessionIdSet(): Observable<boolean | UrlTree> {
    return this.isGlobalSessionIdSet$.pipe(
      map((state) => {
        if (state) {
          return state;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
