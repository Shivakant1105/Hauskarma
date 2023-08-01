import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-landlord',
  templateUrl: './sidebar-landlord.component.html',
  styleUrls: ['./sidebar-landlord.component.css'],
})
export class SidebarLandlordComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() sidebarData: any;
  ngOnInit() {}
}
