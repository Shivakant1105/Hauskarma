import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { BidOffersComponent } from './bid-offers/bid-offers.component';
import { CreateRenterProfileComponent } from './create-renter-profile/create-renter-profile.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OccupationComponent } from './occupation/occupation.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PetsComponent } from './pets/pets.component';
import { PropertiesComponent } from './properties/properties.component';
import { RenterComponent } from './renter.component';
import { ResidenceInfoComponent } from './residence-info/residence-info.component';
import { RoommatesComponent } from './roommates/roommates.component';
import { SettingComponent } from './setting/setting.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VerificationComponent } from './verification/verification.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RenterRoutingModule } from './renter-routing.module';

@NgModule({
  declarations: [
    CreateRenterProfileComponent,
    RenterComponent,
    BidOffersComponent,
    WishlistComponent,
    SettingComponent,
    InvoiceComponent,
    PaymentMethodComponent,
    AddPaymentMethodComponent,
    UpdateProfileComponent,
    ResidenceInfoComponent,
    OccupationComponent,
    RoommatesComponent,
    PetsComponent,
    InsuranceComponent,
    VehicleDetailsComponent,
    PropertiesComponent,
    VerificationComponent,
  ],
  imports: [CommonModule, RenterRoutingModule, SharedModule],
})
export class RenterModule {}
