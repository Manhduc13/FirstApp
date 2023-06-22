import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interface/housinglocation';
@Component({
  selector: 'app-housing-location',
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}} | {{housingLocation.nation }}</p>
    <a [routerLink]="['/details', housingLocation.id]">More Info</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
