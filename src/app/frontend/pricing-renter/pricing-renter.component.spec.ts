import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingRenterComponent } from './pricing-renter.component';

describe('PricingRenterComponent', () => {
  let component: PricingRenterComponent;
  let fixture: ComponentFixture<PricingRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingRenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
