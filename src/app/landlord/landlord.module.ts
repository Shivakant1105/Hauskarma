import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandlordRoutingModule } from './landlord-routing.module';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { BidOffersComponent } from './bid-offers/bid-offers.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';

import { PropertiesListingComponent } from './properties-listing/properties-listing.component';
import { CreateLandlordProfileComponent } from './create-landlord-profile/create-landlord-profile.component';
import { LandlordComponent } from './landlord.component';
import { ChatComponent } from './chat/chat.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { SharedModule } from '../shared/shared.module';
import { SettingComponent } from './setting/setting.component';
import { VerificationComponent } from './verification/verification.component';
import { PreferenceComponent } from './preference/preference.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { ChangeContactDetailsComponent } from './change-contact-details/change-contact-details.component';

import { MakePaymentComponent } from './make-payment/make-payment.component';

@NgModule({
  declarations: [
    LandlordComponent,
    CreateLandlordProfileComponent,
    BidOffersComponent,
    CreateListingComponent,
    UpdateProfileComponent,
    BasicDetailsComponent,
    PropertiesListingComponent,
    ChatComponent,
    TenantsComponent,
    TenantEditComponent,
    SettingComponent,
    VerificationComponent,
    PreferenceComponent,
    NotificationsComponent,
    ChangeContactDetailsComponent,
    MakePaymentComponent,
  ],
  imports: [CommonModule, LandlordRoutingModule, SharedModule],
})
export class LandlordModule {}
