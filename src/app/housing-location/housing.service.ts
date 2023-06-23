import { Injectable } from '@angular/core';
import { HousingLocation } from '../interface/housinglocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
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
    }
  ];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  };
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  };
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
