import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsListingComponent } from './search-results-listing.component';

describe('SearchResultsListingComponent', () => {
  let component: SearchResultsListingComponent;
  let fixture: ComponentFixture<SearchResultsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
