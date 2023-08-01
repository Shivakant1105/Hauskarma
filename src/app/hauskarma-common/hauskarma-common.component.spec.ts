import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauskarmaCommonComponent } from './hauskarma-common.component';

describe('HauskarmaCommonComponent', () => {
  let component: HauskarmaCommonComponent;
  let fixture: ComponentFixture<HauskarmaCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauskarmaCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauskarmaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
