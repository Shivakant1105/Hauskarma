import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLandlordComponent } from './sidebar-landlord.component';

describe('SidebarLandlordComponent', () => {
  let component: SidebarLandlordComponent;
  let fixture: ComponentFixture<SidebarLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLandlordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
