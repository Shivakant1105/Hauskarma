import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidOfferCardComponent } from './bid-offer-card.component';

describe('BidOfferCardComponent', () => {
  let component: BidOfferCardComponent;
  let fixture: ComponentFixture<BidOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidOfferCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
