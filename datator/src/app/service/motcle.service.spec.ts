import { TestBed } from '@angular/core/testing';

import { MotcleService } from './motcle.service';

describe('MotcleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotcleService = TestBed.get(MotcleService);
    expect(service).toBeTruthy();
  });
});
