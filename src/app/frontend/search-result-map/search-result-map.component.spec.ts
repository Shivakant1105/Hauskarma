import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultMapComponent } from './search-result-map.component';

describe('SearchResultMapComponent', () => {
  let component: SearchResultMapComponent;
  let fixture: ComponentFixture<SearchResultMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
