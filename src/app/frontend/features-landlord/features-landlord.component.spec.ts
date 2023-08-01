import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesLandlordComponent } from './features-landlord.component';

describe('FeaturesLandlordComponent', () => {
  let component: FeaturesLandlordComponent;
  let fixture: ComponentFixture<FeaturesLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesLandlordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
