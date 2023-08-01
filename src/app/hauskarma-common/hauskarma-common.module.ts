import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HauskarmaCommonRoutingModule } from './hauskarma-common-routing.module';
import { HauskarmaCommonComponent } from './hauskarma-common.component';

import { BillingAddressComponent } from './billing-address/billing-address.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SharedModule } from '../shared/shared.module';
import { AddBillingAddressComponent } from './add-billing-address/add-billing-address.component';
import { ChangePasswordTwoComponent } from './change-password-two/change-password-two.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    HauskarmaCommonComponent,
    BillingAddressComponent,
    AddBillingAddressComponent,
    ChangePasswordTwoComponent,
    DeleteAccountComponent,
    ChangePasswordComponent,
    SupportComponent,
  ],
  imports: [CommonModule, HauskarmaCommonRoutingModule, SharedModule],
})
export class HauskarmaCommonModule {}
