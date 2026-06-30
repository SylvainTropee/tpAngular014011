import {Component, EventEmitter, input, Input, Output} from '@angular/core';

@Component({
  selector: 'app-carbon-footprint-result',
  imports: [],
  templateUrl: './carbon-footprint-result.html',
  styleUrl: './carbon-footprint-result.css',
})
export class CarbonFootprintResult {

  // @Input() travels!: { distanceKm: number; consumptionPer100: number }[];
  travels = input.required<{ distanceKm: number, consumptionPer100: number }[]>()

  @Output() eventTravel  = new EventEmitter<void>();


  public addTravel(){
    this.eventTravel.emit();

  }


}
