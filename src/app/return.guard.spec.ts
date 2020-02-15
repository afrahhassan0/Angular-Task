import { TestBed, async, inject } from '@angular/core/testing';

import { ReturnGuard } from './return.guard';

describe('ReturnGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnGuard]
    });
  });

  it('should ...', inject([ReturnGuard], (guard: ReturnGuard) => {
    expect(guard).toBeTruthy();
  }));
});
