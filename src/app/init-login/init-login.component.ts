import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthFacadeService} from '../store/auth/auth-facade.service';

@Component({
  selector: 'app-init-login',
  templateUrl: './init-login.component.html',
  styleUrls: ['./init-login.component.scss']
})
export class InitLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authFacadeService: AuthFacadeService
  ) {
  }

  ngOnInit(): void {
    // set Login Request Id
    const loginRequestId = this.activatedRoute.snapshot.paramMap.get('loginRequestId');
    this.authFacadeService.setLoginRequestId(loginRequestId);

    // set global Session Id
    const globalSessionId = localStorage.getItem('iol-global-session-id');
    this.authFacadeService.setGlobalSessionId(globalSessionId);

    // check auth and redirect to specific location
    this.authFacadeService.authState$.subscribe((state) => {
      if (state.loginRequestId && state.globalSessionId) {
        this.router.navigate(['/continue']);
      } else if (state.loginRequestId) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/redirect', {redirectUrl: 'https://isleoflan.ch'}]);
      }
    })
  }
}
