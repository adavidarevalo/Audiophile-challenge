import { TestBed } from '@angular/core/testing';

import { FetchApiProductService } from './fetch-api-product.service';

describe('FetchApiProductService', () => {
  let service: FetchApiProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
