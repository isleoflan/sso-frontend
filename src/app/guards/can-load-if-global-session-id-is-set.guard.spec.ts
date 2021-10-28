import {TestBed} from '@angular/core/testing';

import {CanLoadIfGlobalSessionIdIsSetGuard} from './can-load-if-global-session-id-is-set.guard';

describe('CanLoadIfGlobalSessionIdIsSetGuard', () => {
  let guard: CanLoadIfGlobalSessionIdIsSetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadIfGlobalSessionIdIsSetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
