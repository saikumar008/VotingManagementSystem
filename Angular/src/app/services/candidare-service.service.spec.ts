import { TestBed } from '@angular/core/testing';

import { CandidareServiceService } from './candidare-service.service';

describe('CandidareServiceService', () => {
  let service: CandidareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
