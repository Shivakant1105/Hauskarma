import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', redirectTo: 'auth' },
  { path: 'frontend', redirectTo: 'frontend' },
  { path: 'landlord', redirectTo: 'landlord' },
  { path: 'renter', redirectTo: 'renter' },
  { path: 'common', redirectTo: 'common' },
  { path: '', redirectTo: 'frontend/homepage', pathMatch: 'full' },

  { path: '**', redirectTo: 'frontend' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
