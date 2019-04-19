import { TestBed } from '@angular/core/testing';

import { PtdbService } from './ptdb.service';

describe('PtdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PtdbService = TestBed.get(PtdbService);
    expect(service).toBeTruthy();
  });
});
