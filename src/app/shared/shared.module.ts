import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarLandlordComponent } from './sidebar-landlord/sidebar-landlord.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarRenterComponent } from './siderbar-renter/siderbar-renter.component';
import { BidCardComponent } from './bid-card/bid-card.component';
import { BidOfferCardComponent } from './bid-offer-card/bid-offer-card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MapCardComponent } from './map-card/map-card.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';

const declared = [
  FooterComponent,
  SidebarLandlordComponent,
  LoaderComponent,
  HeaderComponent,
  SiderbarRenterComponent,
  BidCardComponent,
  BidOfferCardComponent,
  ListCardComponent,
  MapCardComponent,
  PagenotfoundComponent,

  ProfileSidebarComponent,
];
@NgModule({
  declarations: [...declared],
  imports: [CommonModule, SharedRoutingModule],
  exports: [...declared],
})
export class SharedModule {}
