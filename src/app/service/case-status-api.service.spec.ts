import { TestBed } from '@angular/core/testing';

import { CaseStatusApiService } from './case-status-api.service';

describe('CaseStatusApiService', () => {
  let service: CaseStatusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseStatusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
