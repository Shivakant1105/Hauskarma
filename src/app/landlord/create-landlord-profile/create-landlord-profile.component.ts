import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-landlord-profile',
  templateUrl: './create-landlord-profile.component.html',
  styleUrls: ['./create-landlord-profile.component.css'],
})
export class CreateLandlordProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
