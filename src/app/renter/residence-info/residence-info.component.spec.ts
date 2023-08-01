import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceInfoComponent } from './residence-info.component';

describe('ResidenceInfoComponent', () => {
  let component: ResidenceInfoComponent;
  let fixture: ComponentFixture<ResidenceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidenceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
