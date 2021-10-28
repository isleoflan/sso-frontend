import {Component, OnInit} from '@angular/core';
import {RequestInformationFacadeService} from '../store/request-information/request-information-facade.service';
import {SessionInformationFacadeService} from '../store/session-information/session-information-facade.service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnInit {

  requestInformation$ = this.requestInformationFacadeService.requestInformation$({loginRequestId: 'asdfasdf'});
  sessionInformation$ = this.sessionInformationFacadeService.sessionInformation$({globalSessionId: 'asdfasdf'})

  constructor(
    private requestInformationFacadeService: RequestInformationFacadeService,
    private sessionInformationFacadeService: SessionInformationFacadeService
  ) {
  }

  ngOnInit(): void {
  }

}
