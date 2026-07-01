import {Component, input, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
   username = input.required<string>()
}
