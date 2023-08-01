import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRenterProfileComponent } from './create-renter-profile.component';

describe('CreateRenterProfileComponent', () => {
  let component: CreateRenterProfileComponent;
  let fixture: ComponentFixture<CreateRenterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRenterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
