import { TestBed } from '@angular/core/testing';

import { CodeGeographiqueService } from './code-geographique.service';

describe('CodeGeographiqueService', () => {
  let service: CodeGeographiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeGeographiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
