import { TestBed } from '@angular/core/testing';

import { SalesService } from './sale.service';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
