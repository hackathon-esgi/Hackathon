import { TestBed } from '@angular/core/testing';

import { AccueilTagService } from './accueil-tag.service';

describe('AccueilTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccueilTagService = TestBed.get(AccueilTagService);
    expect(service).toBeTruthy();
  });
});
