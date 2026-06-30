import {Component, EventEmitter, input, Input, output, Output} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-carbon-footprint-result',
  imports: [
    DecimalPipe
  ],
  templateUrl: './carbon-footprint-result.html',
  styleUrl: './carbon-footprint-result.css',
})
export class CarbonFootprintResult {

  // @Input() travels!: { distanceKm: number; consumptionPer100: number }[];
  travels = input.required<any[]>()

  // @Output() eventTravel  = new EventEmitter<void>();
  eventTravel = output<void>()

  public addTravel() {
    this.eventTravel.emit();

  }


}
