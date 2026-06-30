import {AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CarbonFootprintForm} from './carbon-footprint-form/carbon-footprint-form';
import {CarbonFootprintResult} from './carbon-footprint-result/carbon-footprint-result';
import {DecimalPipe} from '@angular/common';
import {CarbonFootprintCompute} from './services/carbon-footprint-compute';

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
  public quantityCo2 : number;
  public travels: any[]

  constructor(private cfc : CarbonFootprintCompute) {
    this.distanceKm = 0;
    this.consumptionPer100 = 0;
    this.quantityCo2 = 0;
    this.travels = this.cfc.getTravels();
    this.calculateDistanceTotalAndConsumptionAverage();
  }

  protected add100km() {
    this.distanceKm += 100;
  }

  public addTravel() {
    const distance = Math.round(Math.random() * 1000);
    const consumption = Math.round(Math.random() * 10);
    const quantityCo2 = this.cfc.getQuantityCo2ByTravel(distance, consumption);
    this.cfc.addTravel({distanceKm: distance, consumptionPer100: consumption, quantityCo2 : quantityCo2})
    this.calculateDistanceTotalAndConsumptionAverage();
  }

  public calculateDistanceTotalAndConsumptionAverage() {

    const result = this.cfc.getResumeTravels();
    this.distanceKm = result.distance;
    this.consumptionPer100 = result.consumptionPer100;
    this.quantityCo2 = result.quantityCo2;
  }


}
