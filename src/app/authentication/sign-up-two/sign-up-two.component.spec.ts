import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTwoComponent } from './sign-up-two.component';

describe('SignUpTwoComponent', () => {
  let component: SignUpTwoComponent;
  let fixture: ComponentFixture<SignUpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
