import { TestBed } from '@angular/core/testing';

import { JAvaService } from './java.service';

describe('JAvaService', () => {
  let service: JAvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JAvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
