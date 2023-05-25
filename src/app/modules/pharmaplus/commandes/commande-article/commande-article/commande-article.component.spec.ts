import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeArticleComponent } from './commande-article.component';

describe('CommandeArticleComponent', () => {
  let component: CommandeArticleComponent;
  let fixture: ComponentFixture<CommandeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
