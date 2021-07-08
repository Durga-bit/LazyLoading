import { TestBed } from '@angular/core/testing';

import { WEbService } from './web.service';

describe('WEbService', () => {
  let service: WEbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WEbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
