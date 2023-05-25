import { TestBed } from '@angular/core/testing';

import { PrincipeActifService } from './principe-actif.service';

describe('PrincipeActifService', () => {
  let service: PrincipeActifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipeActifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
