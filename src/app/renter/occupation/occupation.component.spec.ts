import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationComponent } from './occupation.component';

describe('OccupationComponent', () => {
  let component: OccupationComponent;
  let fixture: ComponentFixture<OccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
