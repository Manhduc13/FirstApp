import { Component, inject } from '@angular/core';
import { HousingLocation } from '../interface/housinglocation';
import { HousingService } from '../housing-location/housing.service';
@Component({
  selector: 'app-home',
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[]=[];
  filteredLocationList: HousingLocation[]=[];
  housingService: HousingService= inject(HousingService);
  constructor(){
    this.housingLocationList=this.housingService.getAllHousingLocations();
    this.filteredLocationList=this.housingLocationList;
  }
  filterResults(text: string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList=this.housingLocationList.filter(housingLocation=>housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }
}
