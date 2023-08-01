import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentMethodComponent } from './add-payment-method.component';

describe('AddPaymentMethodComponent', () => {
  let component: AddPaymentMethodComponent;
  let fixture: ComponentFixture<AddPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
