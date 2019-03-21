import { TestBed } from '@angular/core/testing';

import { TestHttpService } from './test-http.service';

describe('TestHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestHttpService = TestBed.get(TestHttpService);
    expect(service).toBeTruthy();
  });
});
