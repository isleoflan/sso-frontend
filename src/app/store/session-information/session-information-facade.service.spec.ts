import {TestBed} from '@angular/core/testing';

import {SessionInformationFacadeService} from './session-information-facade.service';

describe('SessionInformationFacadeService', () => {
  let service: SessionInformationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionInformationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
