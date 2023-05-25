import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipeActifComponent } from './principe-actif.component';

describe('PrincipeActifComponent', () => {
  let component: PrincipeActifComponent;
  let fixture: ComponentFixture<PrincipeActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipeActifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipeActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
