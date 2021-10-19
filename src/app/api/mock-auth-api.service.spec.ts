import { TestBed } from '@angular/core/testing';

import { MockAuthApiService } from './mock-auth-api.service';

describe('MockAuthApiService', () => {
  let service: MockAuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAuthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
