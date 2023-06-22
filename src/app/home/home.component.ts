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
    id: 0,
    name: 'Villa 1',
    city: 'Modern City',
    state: 'ST',
    photo: 'assets/Villa1.png',
    availableUnits: 8,
    wifi: true,
    laundry: false,
    price: 10000000000
  },
  {
    id: 1,
    name: 'Villa 2',
    city: 'Modern City',
    state: 'ST',
    photo: 'assets/Villa2.png',
    availableUnits: 8,
    wifi: true,
    laundry: false,
    price: 10000000000
  },
  {
    id: 2,
    name: 'Villa 3',
    city: 'Modern City',
    state: 'ST',
    photo: 'assets/Villa3.png',
    availableUnits: 8,
    wifi: true,
    laundry: false,
    price: 10000000000
  },
  {
    id: 3,
    name: 'Villa 3',
    city: 'Modern City',
    state: 'ST',
    photo: 'assets/Villa4.png',
    availableUnits: 8,
    wifi: true,
    laundry: false,
    price: 10000000000
  }
  ];
}
