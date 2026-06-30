import {AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CarbonFootprintForm} from './carbon-footprint-form/carbon-footprint-form';
import {CarbonFootprintResult} from './carbon-footprint-result/carbon-footprint-result';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    CarbonFootprintForm,
    CarbonFootprintResult,
    DecimalPipe
  ],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.css',
})
export class CarbonFootprint {

  public readonly CONSUMPTION_MAX = 7;
  public readonly CONSUMPTION_MIN = 4;

  public distanceKm: number;
  public consumptionPer100: number;
  public travels: { distanceKm: number, consumptionPer100: number }[] //any[]

  constructor() {
    this.distanceKm = 0;
    this.consumptionPer100 = 0;
    this.travels = [
      {distanceKm: 50, consumptionPer100: 5},
      {distanceKm: 150, consumptionPer100: 6},
      {distanceKm: 250, consumptionPer100: 7},
      {distanceKm: 350, consumptionPer100: 8},
      {distanceKm: 450, consumptionPer100: 9}
    ];
    this.calculateDistanceTotalAndConsumptionAverage();
  }

  protected add100km() {
    this.distanceKm += 100;
  }

  public addTravel() {
    const distance = Math.round(Math.random() * 1000);
    const consumption = Math.round(Math.random() * 10);
    this.travels.push({distanceKm: distance, consumptionPer100: consumption});
    this.calculateDistanceTotalAndConsumptionAverage();
  }

  public calculateDistanceTotalAndConsumptionAverage() {

    this.distanceKm = this.travels.reduce(
      (acc, travel) => acc + travel.distanceKm, 0);

    this.consumptionPer100 = this.travels.reduce(
      (acc, travel) => acc + travel.consumptionPer100, 0) / this.travels.length
  }


}
