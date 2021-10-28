import {TestBed} from '@angular/core/testing';

import {RequestInformationFacadeService} from './request-information-facade.service';

describe('RequestInformationFacadeService', () => {
  let service: RequestInformationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestInformationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
