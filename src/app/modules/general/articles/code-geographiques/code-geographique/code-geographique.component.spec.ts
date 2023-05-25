import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGeographiqueComponent } from './code-geographique.component';

describe('CodeGeographiqueComponent', () => {
  let component: CodeGeographiqueComponent;
  let fixture: ComponentFixture<CodeGeographiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGeographiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeGeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
