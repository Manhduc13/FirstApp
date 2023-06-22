import { Component } from '@angular/core';
import { Housinglocation } from '../interface/housinglocation';
@Component({
  selector: 'app-home',
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [
  {
    id: 1,
    name: 'Moonlight',
    city: 'Washington, D.C.',
    nation: 'America',
    photo: 'assets/Villa1.png',
    availableUnits: 1,
    wifi: true,
    laundry: false,
    price: 50000000000
  },
  {
    id: 2,
    name: 'Sunset',
    city: 'Paris',
    nation: 'France',
    photo: 'assets/Villa2.png',
    availableUnits: 1,
    wifi: true,
    laundry: false,
    price: 50000000000
  },
  {
    id: 3,
    name: 'Sunrise',
    city: 'London',
    nation: 'England',
    photo: 'assets/Villa3.png',
    availableUnits: 1,
    wifi: true,
    laundry: false,
    price: 50000000000
  },
  {
    id: 4,
    name: 'SunFlower',
    city: 'Roma',
    nation: 'Italia',
    photo: 'assets/Villa4.png',
    availableUnits: 1,
    wifi: true,
    laundry: false,
    price: 50000000000
  },
  {
    id: 5,
    name: 'Twilight',
    city: 'NewYork',
    nation: 'America',
    photo: 'assets/Villa5.png',
    availableUnits: 1,
    wifi: true,
    laundry: false,
    price: 50000000000
  },
  {
    id: 6,
    name: 'Seabatical',
    city: 'Berlin',
    nation: 'Germany',
    photo: 'assets/Villa6.png',
    availableUnits: 1,
    wifi: true,
    laundry: false,
    price: 50000000000
  },
  ];
}
