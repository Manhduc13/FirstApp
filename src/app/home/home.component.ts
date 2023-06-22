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
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: 'assets/example-house.jpg',
  availableUnits: 99,
  wifi: true,
  laundry: false,
  };
}
