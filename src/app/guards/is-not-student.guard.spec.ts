import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isNotStudentGuard } from './is-not-student.guard';

describe('isNotStudentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isNotStudentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
