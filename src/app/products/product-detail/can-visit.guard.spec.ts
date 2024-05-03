import { TestBed } from '@angular/core/testing';

import { CanVisitGuard } from './can-visit.guard';

describe('CanVisitGuard', () => {
  let guard: CanVisitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVisitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
