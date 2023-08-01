import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsListingDetailsComponent } from './search-results-listing-details.component';

describe('SearchResultsListingDetailsComponent', () => {
  let component: SearchResultsListingDetailsComponent;
  let fixture: ComponentFixture<SearchResultsListingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsListingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
