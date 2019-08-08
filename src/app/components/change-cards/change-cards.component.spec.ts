import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardsComponent } from './change-cards.component';

describe('ChangeCardsComponent', () => {
  let component: ChangeCardsComponent;
  let fixture: ComponentFixture<ChangeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
