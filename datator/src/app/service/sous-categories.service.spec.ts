import { TestBed } from '@angular/core/testing';

import { SousCategoriesService } from './sous-categories.service';

describe('SousCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SousCategoriesService = TestBed.get(SousCategoriesService);
    expect(service).toBeTruthy();
  });
});
