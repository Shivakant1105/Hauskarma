import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDeatilsTwoComponent } from './blog-deatils-two/blog-deatils-two.component';
import { BlogDeatilsComponent } from './blog-deatils/blog-deatils.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FeaturesLandlordComponent } from './features-landlord/features-landlord.component';
import { FeaturesRenterComponent } from './features-renter/features-renter.component';

import { PolicyComponent } from './policy/policy.component';
import { PricingLandlordComponent } from './pricing-landlord/pricing-landlord.component';
import { PricingRenterComponent } from './pricing-renter/pricing-renter.component';
import { SearchResultMapComponent } from './search-result-map/search-result-map.component';
import { SearchResultsListingDetailsComponent } from './search-results-listing-details/search-results-listing-details.component';
import { SearchResultsListingComponent } from './search-results-listing/search-results-listing.component';
import { TermsComponent } from './terms/terms.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FrontendComponent } from './frontend.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomepageComponent,
    BlogDeatilsComponent,
    BlogDeatilsTwoComponent,
    BlogComponent,
    FeaturesLandlordComponent,
    FeaturesRenterComponent,
    PricingRenterComponent,
    PricingLandlordComponent,
    TermsComponent,
    PolicyComponent,
    AboutUsComponent,
    FaqsComponent,
    ContactUsComponent,
    SearchResultMapComponent,
    SearchResultsListingComponent,
    SearchResultsListingDetailsComponent,

    FrontendComponent,
  ],
  imports: [CommonModule, FrontendRoutingModule, SharedModule],
})
export class FrontendModule {}
