import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenterComponent } from './renter.component';
import { CreateRenterProfileComponent } from './create-renter-profile/create-renter-profile.component';
import { BidOffersComponent } from './bid-offers/bid-offers.component';
import { SettingComponent } from './setting/setting.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { VerificationComponent } from './verification/verification.component';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OccupationComponent } from './occupation/occupation.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PetsComponent } from './pets/pets.component';
import { PropertiesComponent } from './properties/properties.component';
import { ResidenceInfoComponent } from './residence-info/residence-info.component';
import { RoommatesComponent } from './roommates/roommates.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'renter',
    component: RenterComponent,
    children: [
      { path: 'create-profile', component: CreateRenterProfileComponent },
      { path: 'bid-offers', component: BidOffersComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'payment-method', component: PaymentMethodComponent },
      { path: 'add-payment', component: AddPaymentMethodComponent },
      { path: 'update-profile', component: UpdateProfileComponent },
      { path: 'residence-info', component: ResidenceInfoComponent },
      { path: 'occupation', component: OccupationComponent },
      { path: 'vehicle-details', component: VehicleDetailsComponent },
      { path: 'misc-roommates', component: RoommatesComponent },
      { path: 'misc-pets', component: PetsComponent },
      { path: 'home-insurance', component: InsuranceComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'verification', component: VerificationComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenterRoutingModule {}
