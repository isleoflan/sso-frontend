import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractRegisterApiService} from "../../../api/abstract-register-api.service";
import {catchError, tap} from "rxjs/operators";
import {EMPTY, of} from "rxjs";
import {AuthFacadeService} from "../../../store/auth/auth-facade.service";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(
    private registerApiService: AbstractRegisterApiService,
    private authFacadeService: AuthFacadeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const hash = this.activatedRoute.snapshot.paramMap.get('hash')!;

    this.registerApiService.verifyEmail({hash}).pipe(
      tap(({data}) => {
        // set Login Request Id
        this.authFacadeService.setGlobalSessionId(data.globalSessionId);
      }),
      tap(({data}) => this.router.navigate(['success', btoa(data.redirect)], {relativeTo: this.activatedRoute})),
      catchError(() => {
        return of(EMPTY);
      })
    ).subscribe();
  }
}
