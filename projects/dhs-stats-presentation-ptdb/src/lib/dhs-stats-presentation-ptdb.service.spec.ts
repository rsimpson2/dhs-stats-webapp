import { TestBed } from '@angular/core/testing';

import { DhsStatsPresentationPtdbService } from './dhs-stats-presentation-ptdb.service';

describe('DhsStatsPresentationPtdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DhsStatsPresentationPtdbService = TestBed.get(DhsStatsPresentationPtdbService);
    expect(service).toBeTruthy();
  });
});
