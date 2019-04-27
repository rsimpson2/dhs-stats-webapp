import { TestBed } from '@angular/core/testing';

import { DhsStatsPresentationSmsService } from './dhs-stats-presentation-sms.service';

describe('DhsStatsPresentationSmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DhsStatsPresentationSmsService = TestBed.get(DhsStatsPresentationSmsService);
    expect(service).toBeTruthy();
  });
});
