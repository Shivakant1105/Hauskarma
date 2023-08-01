import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeContactDetailsComponent } from './change-contact-details.component';

describe('ChangeContactDetailsComponent', () => {
  let component: ChangeContactDetailsComponent;
  let fixture: ComponentFixture<ChangeContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeContactDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
