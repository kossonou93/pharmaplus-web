import { TestBed } from '@angular/core/testing';

import { ParticulierService } from './particulier.service';

describe('ParticulierService', () => {
  let service: ParticulierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticulierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
