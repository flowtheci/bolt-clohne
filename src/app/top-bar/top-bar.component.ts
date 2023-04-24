import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  constructor() { }

  servicesMenuItems: MenuItem[] = [
    {title: 'drives', subtitle: 'drives-info'},
    {title: 'scooters', subtitle: 'scooters-info'},
    {title: 'carsharing', subtitle: 'carsharing-info'},
    {title: 'food-delivery', subtitle: 'food-delivery-info'},
    {title: 'package-delivery', subtitle: 'package-delivery-info'},
    {title: 'business-client', subtitle: 'business-client-info'},
  ];

  becomePartnerItems: MenuItem[] = [
    {title: 'driver', subtitle: 'driver-info'},
    {title: 'courier', subtitle: 'courier-info'},
    {title: 'store', subtitle: 'store-info'},
    {title: 'car-park', subtitle: 'car-park-info'},
    {title: 'franchise', subtitle: 'franchise-info'},
];

  companyItems: MenuItem[] = [
    {title: 'job-opportunities', subtitle: ''},
    {title: 'about-us', subtitle: ''},
    {title: 'green-plan', subtitle: ''},
    {title: 'blog', subtitle: ''},
    {title: 'press', subtitle: ''},
];

  safetyItems: MenuItem[] = [
    {title: 'passenger-safety', subtitle: ''},
    {title: 'driver-safety', subtitle: ''},
    {title: 'scooter-safety', subtitle: ''},
    {title: 'safety-lab', subtitle: ''},
];

  citiesItems: MenuItem[] = [
    {title: 'our-cities', subtitle: ''},
    {title: 'airports', subtitle: ''},
    {title: 'solutions-for-cities', subtitle: ''},
];



  ngOnInit(): void {
  }

}

export interface MenuItem {
  title: string,
  subtitle: string,
}
