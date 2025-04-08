import { TestBed } from '@angular/core/testing';

import { WlService } from './wl.service';

describe('WlService', () => {
  let service: WlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
