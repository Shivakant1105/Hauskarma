import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillingAddressComponent } from './add-billing-address.component';

describe('AddBillingAddressComponent', () => {
  let component: AddBillingAddressComponent;
  let fixture: ComponentFixture<AddBillingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBillingAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBillingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
