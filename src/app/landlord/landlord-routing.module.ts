import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidOffersComponent } from './bid-offers/bid-offers.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';

import { CreateListingComponent } from './create-listing/create-listing.component';
import { PropertiesListingComponent } from './properties-listing/properties-listing.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateLandlordProfileComponent } from './create-landlord-profile/create-landlord-profile.component';
import { LandlordComponent } from './landlord.component';
import { ChatComponent } from './chat/chat.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { SettingComponent } from './setting/setting.component';
import { VerificationComponent } from './verification/verification.component';
import { ChangeContactDetailsComponent } from './change-contact-details/change-contact-details.component';
import { PreferenceComponent } from './preference/preference.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { MakePaymentComponent } from './make-payment/make-payment.component';

const routes: Routes = [
  {
    path: 'landlord',
    component: LandlordComponent,

    children: [
      {
        path: 'create-profile',
        component: CreateLandlordProfileComponent,
      },
      { path: 'bid-offers', component: BidOffersComponent },
      { path: 'create-listing', component: CreateListingComponent },

      { path: 'update-profile', component: UpdateProfileComponent },
      { path: 'basic-details', component: BasicDetailsComponent },

      { path: 'properties-listing', component: PropertiesListingComponent },
      { path: 'tenants', component: TenantsComponent },
      { path: 'tenant-edit', component: TenantEditComponent },
      { path: 'make-payment', component: MakePaymentComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'setting', component: SettingComponent },

      {
        path: 'change-contact-details',
        component: ChangeContactDetailsComponent,
      },

      { path: 'verification', component: VerificationComponent },
      { path: 'preference', component: PreferenceComponent },
      { path: 'notifications', component: NotificationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
