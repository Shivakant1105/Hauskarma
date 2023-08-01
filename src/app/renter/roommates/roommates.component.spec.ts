import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommatesComponent } from './roommates.component';

describe('RoommatesComponent', () => {
  let component: RoommatesComponent;
  let fixture: ComponentFixture<RoommatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoommatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
