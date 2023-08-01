import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarRenterComponent } from './siderbar-renter.component';

describe('SiderbarRenterComponent', () => {
  let component: SiderbarRenterComponent;
  let fixture: ComponentFixture<SiderbarRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderbarRenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderbarRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
