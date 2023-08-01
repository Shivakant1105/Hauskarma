import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingRenterComponent } from './pricing-renter/pricing-renter.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDeatilsTwoComponent } from './blog-deatils-two/blog-deatils-two.component';
import { BlogDeatilsComponent } from './blog-deatils/blog-deatils.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FeaturesLandlordComponent } from './features-landlord/features-landlord.component';
import { FeaturesRenterComponent } from './features-renter/features-renter.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PolicyComponent } from './policy/policy.component';
import { PricingLandlordComponent } from './pricing-landlord/pricing-landlord.component';
import { SearchResultMapComponent } from './search-result-map/search-result-map.component';
import { SearchResultsListingDetailsComponent } from './search-results-listing-details/search-results-listing-details.component';
import { SearchResultsListingComponent } from './search-results-listing/search-results-listing.component';
import { TermsComponent } from './terms/terms.component';
import { FrontendComponent } from './frontend.component';
import { PagenotfoundComponent } from '../shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'frontend',
    component: FrontendComponent,
    children: [
      { path: 'homepage', component: HomepageComponent },

      { path: 'blog', component: BlogComponent },
      { path: 'blog-details', component: BlogDeatilsComponent },
      { path: 'blog-details-two', component: BlogDeatilsTwoComponent },
      { path: 'features-renter', component: FeaturesRenterComponent },
      { path: 'features-landlord', component: FeaturesLandlordComponent },
      { path: 'pricing-renter', component: PricingRenterComponent },
      { path: 'pricing-landlord', component: PricingLandlordComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'search-result-map', component: SearchResultMapComponent },
      {
        path: 'search-results-listing-details',
        component: SearchResultsListingDetailsComponent,
      },
      {
        path: 'search-results-listing',
        component: SearchResultsListingComponent,
      },
      { path: '**', component: PagenotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
