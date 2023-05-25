import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteDirecteComponent } from './vente-directe.component';

describe('VenteDirecteComponent', () => {
  let component: VenteDirecteComponent;
  let fixture: ComponentFixture<VenteDirecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteDirecteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenteDirecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
