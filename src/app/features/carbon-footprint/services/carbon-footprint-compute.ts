import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  private travels: any[];

  constructor() {
    this.travels = [
      {distanceKm: 50, consumptionPer100: 5, quantityCo2 : 7},
      {distanceKm: 150, consumptionPer100: 6, quantityCo2 : 9},
      {distanceKm: 250, consumptionPer100: 7, quantityCo2 : 12},
      {distanceKm: 350, consumptionPer100: 8, quantityCo2 : 3},
      {distanceKm: 450, consumptionPer100: 9, quantityCo2 : 1}
    ];
  }

  public getTravels() {
    return this.travels;
  }

  public addTravel(travel: any) {
    this.travels.push(travel);
  }

  public getQuantityCo2ByTravel(distance : number, consumption : number){
    return (distance * consumption) /100 * 2.3;
  }

  public getResumeTravels() {
    let distance = this.travels.reduce(
      (acc, travel) => acc + travel.distanceKm, 0);

    let consumptionPer100 = this.travels.reduce(
      (acc, travel) => acc + travel.consumptionPer100, 0) / this.travels.length

    let quantityCo2 = this.travels.reduce(
      (acc, travel) => acc + travel.quantityCo2, 0);

    return {distance: distance, consumptionPer100: consumptionPer100, quantityCo2 : quantityCo2};
  }


}
