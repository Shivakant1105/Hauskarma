import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandlordProfileComponent } from './create-landlord-profile.component';

describe('CreateLandlordProfileComponent', () => {
  let component: CreateLandlordProfileComponent;
  let fixture: ComponentFixture<CreateLandlordProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLandlordProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLandlordProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
