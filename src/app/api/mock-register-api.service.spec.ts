import {TestBed} from '@angular/core/testing';

import {MockRegisterApiService} from './mock-register-api.service';

describe('MockRegisterApiService', () => {
  let service: MockRegisterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRegisterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
