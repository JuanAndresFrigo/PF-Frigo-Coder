import { TestBed } from '@angular/core/testing';

import { EnrrollmentsService } from './enrrollments.service';
import { HttpClientModule } from '@angular/common/http';

describe('EnrrollmentsService', () => {
  let service: EnrrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EnrrollmentsService],
    });
    service = TestBed.inject(EnrrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
