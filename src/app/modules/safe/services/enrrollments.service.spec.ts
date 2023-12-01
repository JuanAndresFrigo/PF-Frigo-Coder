import { TestBed } from '@angular/core/testing';

import { EnrrollmentsService } from './enrrollments.service';

describe('EnrrollmentsService', () => {
  let service: EnrrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
