import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesRenterComponent } from './features-renter.component';

describe('FeaturesRenterComponent', () => {
  let component: FeaturesRenterComponent;
  let fixture: ComponentFixture<FeaturesRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesRenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
