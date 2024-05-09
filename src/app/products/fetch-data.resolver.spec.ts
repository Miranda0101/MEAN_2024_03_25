import { TestBed } from '@angular/core/testing';

import { FetchDataResolver } from './fetch-data.resolver';

describe('FetchDataResolver', () => {
  let resolver: FetchDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
