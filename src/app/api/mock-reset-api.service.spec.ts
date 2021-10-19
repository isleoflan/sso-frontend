import {TestBed} from '@angular/core/testing';

import {MockResetApiService} from './mock-reset-api.service';

describe('MockResetApiService', () => {
  let service: MockResetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockResetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
