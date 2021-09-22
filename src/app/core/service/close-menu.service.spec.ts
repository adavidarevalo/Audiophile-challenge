import { TestBed } from '@angular/core/testing';

import { CloseMenuService } from './close-menu.service';

describe('CloseMenuService', () => {
  let service: CloseMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
