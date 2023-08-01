import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingLandlordComponent } from './pricing-landlord.component';

describe('PricingLandlordComponent', () => {
  let component: PricingLandlordComponent;
  let fixture: ComponentFixture<PricingLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingLandlordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
