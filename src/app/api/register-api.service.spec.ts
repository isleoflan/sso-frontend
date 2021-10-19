import { TestBed } from '@angular/core/testing';

import { RegisterApiService } from './register-api.service';

describe('RegisterApiService', () => {
  let service: RegisterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
