import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HauskarmaCommonComponent } from './hauskarma-common.component';

import { BillingAddressComponent } from './billing-address/billing-address.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ChangePasswordTwoComponent } from './change-password-two/change-password-two.component';
import { AddBillingAddressComponent } from './add-billing-address/add-billing-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: 'common',
    component: HauskarmaCommonComponent,

    children: [
      { path: 'billing-address', component: BillingAddressComponent },
      { path: 'add-billing', component: AddBillingAddressComponent },
      { path: 'delete-account', component: DeleteAccountComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'change-password-two', component: ChangePasswordTwoComponent },
      { path: 'support', component: SupportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HauskarmaCommonRoutingModule {}
