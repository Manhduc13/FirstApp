import { Component, inject } from '@angular/core';
import { HousingLocation } from '../interface/housinglocation';
import { HousingService } from '../housing-location/housing.service';
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
  housingLocationList: HousingLocation[]=[];
  housingService: HousingService= inject(HousingService);
  constructor(){
    this.housingLocationList=this.housingService.getAllHousingLocations();
  }
}
