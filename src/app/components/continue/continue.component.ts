import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {LoginWithSessionIdDto} from '../../interfaces/dto/login-with-session-id-dto';
import {AuthFacadeService} from '../../store/auth/auth-facade.service';
import {RequestInformationFacadeService} from '../../store/request-information/request-information-facade.service';
import {SessionInformationFacadeService} from '../../store/session-information/session-information-facade.service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnDestroy {

  requestInformation$ = this.requestInformationFacadeService.requestInformation$;
  sessionInformation$ = this.sessionInformationFacadeService.sessionInformation$;

  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
    private sessionInformationFacadeService: SessionInformationFacadeService,
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onContinue(): void {
    this.authFacadeService.authState$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(({loginRequestId, globalSessionId}) => {
      const loginWithSessionIdDto: LoginWithSessionIdDto = {
        loginRequestId: loginRequestId || '',
        globalSessionId: globalSessionId || ''
      };
      this.authFacadeService.loginWithSessionId(loginWithSessionIdDto).subscribe((payload) => {
        this.router.navigate(['/redirect', {externalUrl: payload.data.redirect}], {
          skipLocationChange: true
        });
      });
    })
  }

}
