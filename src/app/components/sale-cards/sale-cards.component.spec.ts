import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCardsComponent } from './sale-cards.component';

describe('SaleCardsComponent', () => {
  let component: SaleCardsComponent;
  let fixture: ComponentFixture<SaleCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
