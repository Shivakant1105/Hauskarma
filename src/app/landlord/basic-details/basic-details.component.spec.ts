import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetailsComponent } from './basic-details.component';

describe('BasicDetailsComponent', () => {
  let component: BasicDetailsComponent;
  let fixture: ComponentFixture<BasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
