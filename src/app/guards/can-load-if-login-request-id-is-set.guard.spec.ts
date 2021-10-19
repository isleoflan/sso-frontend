import {TestBed} from '@angular/core/testing';

import {CanLoadIfLoginRequestIdIsSetGuard} from './can-load-if-login-request-id-is-set.guard';

describe('CanLoadIfLoginRequestIdIsSetGuard', () => {
  let guard: CanLoadIfLoginRequestIdIsSetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadIfLoginRequestIdIsSetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
