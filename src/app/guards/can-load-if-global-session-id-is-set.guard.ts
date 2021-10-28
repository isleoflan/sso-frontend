import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthFacadeService} from '../store/auth/auth-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadIfGlobalSessionIdIsSetGuard implements CanLoad {
  constructor(
    private authFacadeService: AuthFacadeService
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.authFacadeService.globalSessionId$.pipe(
      map((result) => typeof result === 'string')
    );
  }
}
