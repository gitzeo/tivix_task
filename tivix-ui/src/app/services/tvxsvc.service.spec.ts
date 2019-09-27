import { TestBed } from '@angular/core/testing';

import { TvxsvcService } from './tvxsvc.service';

describe('TvxsvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvxsvcService = TestBed.get(TvxsvcService);
    expect(service).toBeTruthy();
  });
});
