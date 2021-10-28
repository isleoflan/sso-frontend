import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthFacadeService} from '../store/auth/auth-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadIfLoginRequestIdIsSetGuard implements CanLoad {

  constructor(
    private authFacadeService: AuthFacadeService
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authFacadeService.loginRequestId$.pipe(
      map((result) => typeof result === 'string')
    );
  }
}
