import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordTwoComponent } from './change-password-two.component';

describe('ChangePasswordTwoComponent', () => {
  let component: ChangePasswordTwoComponent;
  let fixture: ComponentFixture<ChangePasswordTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
