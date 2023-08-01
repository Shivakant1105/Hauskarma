import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidOffersComponent } from './bid-offers.component';

describe('BidOffersComponent', () => {
  let component: BidOffersComponent;
  let fixture: ComponentFixture<BidOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
