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
    <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocation: Housinglocation = {
  id: 9999,
  name: 'Luxury Home',
  city: 'Modern city',
  state: 'ST',
  photo: 'assets/LuxuryHouse.png',
  availableUnits: 99,
  wifi: true,
  laundry: false,
  };
}
