import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../interface/housinglocation';
import { HousingService } from '../housing-location/housing.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <div class="body">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}} | {{housingLocation?.nation}}</p>
      </section>
      <hr>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <hr>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name<input id="first-name" type="text" formControlName="firstName" placeholder="For example: Nguyen Duc"required></label>       
      
          <label for="last-name">Last Name<input id="last-name" type="text" formControlName="lastName" placeholder="For example: Manh"required></label>
        
          <label for="email">Email<input id="email" type="email" formControlName="email" placeholder="For example: abc@gmail.com" required></label>
          
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </div>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    housingLocation: HousingLocation | undefined;
  
    applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });

    constructor() {
      const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
      
      //console.log(this.housingService.getHousingLocationById(housingLocationId));
      
      this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
    }
    submitApplication() {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      );
    }
}
