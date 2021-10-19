import { TestBed } from '@angular/core/testing';

import { ResetApiService } from './reset-api.service';

describe('ResetApiService', () => {
  let service: ResetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
