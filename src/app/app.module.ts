import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontendModule } from './frontend/frontend.module';
import { LandlordModule } from './landlord/landlord.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RenterModule } from './renter/renter.module';
import { HauskarmaCommonModule } from './hauskarma-common/hauskarma-common.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FrontendModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LandlordModule,
    RenterModule,
    SharedModule,
    AuthenticationModule,
    HauskarmaCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
