import { TestBed } from '@angular/core/testing';

import { IsServiceService } from './is-service.service';

describe('IsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsServiceService = TestBed.get(IsServiceService);
    expect(service).toBeTruthy();
  });
});
